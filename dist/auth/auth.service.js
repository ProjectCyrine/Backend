"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const crypto_1 = require("crypto");
const mongoose_2 = require("mongoose");
const admin_user_schema_1 = require("./schemas/admin-user.schema");
let AuthService = class AuthService {
    adminUserModel;
    configService;
    constructor(adminUserModel, configService) {
        this.adminUserModel = adminUserModel;
        this.configService = configService;
    }
    async login(dto) {
        const user = await this.adminUserModel
            .findOne({
            $or: [{ username: dto.email }, { email: dto.email.toLowerCase() }],
        })
            .exec();
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('Identifiants invalides');
        }
        const providedHash = this.hashPassword(dto.password);
        if (!this.safeCompare(user.passwordHash, providedHash)) {
            throw new common_1.UnauthorizedException('Identifiants invalides');
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
    verifyAccessToken(token) {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new common_1.UnauthorizedException('Token invalide');
        }
        const [encodedHeader, encodedPayload, signature] = parts;
        const expectedSignature = this.createSignature(`${encodedHeader}.${encodedPayload}`);
        if (!this.safeCompare(signature, expectedSignature)) {
            throw new common_1.UnauthorizedException('Signature invalide');
        }
        const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
        if (payload.exp * 1000 < Date.now()) {
            throw new common_1.UnauthorizedException('Session expiree');
        }
        return payload;
    }
    async getProfile(userId) {
        const user = await this.adminUserModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur admin introuvable');
        }
        return {
            id: String(user._id),
            username: user.username,
            email: user.email,
        };
    }
    signAccessToken(payload) {
        const encodedHeader = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
        const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
        const signature = this.createSignature(`${encodedHeader}.${encodedPayload}`);
        return `${encodedHeader}.${encodedPayload}.${signature}`;
    }
    createSignature(value) {
        return (0, crypto_1.createHmac)('sha256', this.getJwtSecret())
            .update(value)
            .digest('base64url');
    }
    hashPassword(password) {
        const salt = this.configService.get('AUTH_PASSWORD_SALT') ?? 'portfolio-salt';
        return (0, crypto_1.createHash)('sha256').update(`${salt}:${password}`).digest('hex');
    }
    safeCompare(a, b) {
        const aBuffer = Buffer.from(a);
        const bBuffer = Buffer.from(b);
        if (aBuffer.length !== bBuffer.length) {
            return false;
        }
        return (0, crypto_1.timingSafeEqual)(aBuffer, bBuffer);
    }
    getJwtSecret() {
        return (this.configService.get('JWT_SECRET') ?? 'dev-secret-change-me');
    }
    getExpiryTimestamp() {
        const ttlHours = Number(this.configService.get('JWT_EXPIRES_IN_HOURS') ?? '12');
        return Math.floor(Date.now() / 1000) + ttlHours * 60 * 60;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_user_schema_1.AdminUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map