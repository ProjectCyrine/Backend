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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
let CloudinaryService = class CloudinaryService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async uploadBuffer(file, resourceType, folder) {
        const cloudName = this.configService.get('CLOUDINARY_CLOUD_NAME');
        const apiKey = this.configService.get('CLOUDINARY_API_KEY');
        const apiSecret = this.configService.get('CLOUDINARY_API_SECRET');
        if (!cloudName || !apiKey || !apiSecret) {
            throw new common_1.BadRequestException('Configuration Cloudinary manquante. Vérifie CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY et CLOUDINARY_API_SECRET.');
        }
        if (!file?.buffer?.length) {
            throw new common_1.BadRequestException('Aucun fichier reçu');
        }
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const targetFolder = folder ||
            this.configService.get('CLOUDINARY_FOLDER') ||
            'portfolio/cyrine';
        const signaturePayload = `folder=${targetFolder}&timestamp=${timestamp}${apiSecret}`;
        const signature = (0, crypto_1.createHash)('sha1').update(signaturePayload).digest('hex');
        const formData = new FormData();
        const arrayBuffer = file.buffer.buffer.slice(file.buffer.byteOffset, file.buffer.byteOffset + file.buffer.byteLength);
        formData.append('file', new Blob([arrayBuffer]), file.originalname);
        formData.append('api_key', apiKey);
        formData.append('timestamp', timestamp);
        formData.append('folder', targetFolder);
        formData.append('signature', signature);
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            const payload = await response.text();
            throw new common_1.InternalServerErrorException(`Échec de l'upload Cloudinary: ${payload}`);
        }
        const payload = (await response.json());
        return {
            url: payload.secure_url,
            publicId: payload.public_id,
            resourceType: payload.resource_type,
        };
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map