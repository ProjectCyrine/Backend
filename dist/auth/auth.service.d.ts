import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { AdminUserDocument } from './schemas/admin-user.schema';
type TokenPayload = {
    sub: string;
    username: string;
    exp: number;
};
export declare class AuthService {
    private readonly adminUserModel;
    private readonly configService;
    constructor(adminUserModel: Model<AdminUserDocument>, configService: ConfigService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
        user: {
            id: string;
            username: string;
            email: string;
        };
    }>;
    verifyAccessToken(token: string): TokenPayload;
    getProfile(userId: string): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
    private signAccessToken;
    private createSignature;
    private hashPassword;
    private safeCompare;
    private getJwtSecret;
    private getExpiryTimestamp;
}
export {};
