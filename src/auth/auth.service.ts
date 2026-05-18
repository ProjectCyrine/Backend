import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { AdminUser, AdminUserDocument } from './schemas/admin-user.schema';

type TokenPayload = {
  sub: string;
  username: string;
  exp: number;
};

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AdminUser.name)
    private readonly adminUserModel: Model<AdminUserDocument>,
    private readonly configService: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.adminUserModel
      .findOne({
        $or: [{ username: dto.email }, { email: dto.email.toLowerCase() }],
      })
      .exec();

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const providedHash = this.hashPassword(dto.password);

    if (!this.safeCompare(user.passwordHash, providedHash)) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const accessToken = this.signAccessToken({
      sub: String(user._id),
      username: user.username,
      exp: this.getExpiryTimestamp(),
    });

    return {
      accessToken,
      tokenType: 'Bearer',
      user: {
        id: String(user._id),
        username: user.username,
        email: user.email,
      },
    };
  }

  verifyAccessToken(token: string): TokenPayload {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new UnauthorizedException('Token invalide');
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    const expectedSignature = this.createSignature(
      `${encodedHeader}.${encodedPayload}`,
    );

    if (!this.safeCompare(signature, expectedSignature)) {
      throw new UnauthorizedException('Signature invalide');
    }

    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8'),
    ) as TokenPayload;

    if (payload.exp * 1000 < Date.now()) {
      throw new UnauthorizedException('Session expiree');
    }

    return payload;
  }

  async getProfile(userId: string) {
    const user = await this.adminUserModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('Utilisateur admin introuvable');
    }

    return {
      id: String(user._id),
      username: user.username,
      email: user.email,
    };
  }

  private signAccessToken(payload: TokenPayload): string {
    const encodedHeader = Buffer.from(
      JSON.stringify({ alg: 'HS256', typ: 'JWT' }),
    ).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
      'base64url',
    );
    const signature = this.createSignature(
      `${encodedHeader}.${encodedPayload}`,
    );

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }

  private createSignature(value: string): string {
    return createHmac('sha256', this.getJwtSecret())
      .update(value)
      .digest('base64url');
  }

  private hashPassword(password: string): string {
    const salt =
      this.configService.get<string>('AUTH_PASSWORD_SALT') ?? 'portfolio-salt';
    return createHash('sha256').update(`${salt}:${password}`).digest('hex');
  }

  private safeCompare(a: string, b: string): boolean {
    const aBuffer = Buffer.from(a);
    const bBuffer = Buffer.from(b);

    if (aBuffer.length !== bBuffer.length) {
      return false;
    }

    return timingSafeEqual(aBuffer, bBuffer);
  }

  private getJwtSecret(): string {
    return (
      this.configService.get<string>('JWT_SECRET') ?? 'dev-secret-change-me'
    );
  }

  private getExpiryTimestamp(): number {
    const ttlHours = Number(
      this.configService.get<string>('JWT_EXPIRES_IN_HOURS') ?? '12',
    );
    return Math.floor(Date.now() / 1000) + ttlHours * 60 * 60;
  }
}
