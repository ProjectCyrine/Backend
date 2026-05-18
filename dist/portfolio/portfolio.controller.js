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
exports.PortfolioController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../common/decorators/public.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const cloudinary_service_1 = require("./cloudinary.service");
const create_portfolio_item_dto_1 = require("./dto/create-portfolio-item.dto");
const upload_media_dto_1 = require("./dto/upload-media.dto");
const portfolio_service_1 = require("./portfolio.service");
let PortfolioController = class PortfolioController {
    portfolioService;
    cloudinaryService;
    constructor(portfolioService, cloudinaryService) {
        this.portfolioService = portfolioService;
        this.cloudinaryService = cloudinaryService;
    }
    findAll(category) {
        return this.portfolioService.findAll(category);
    }
    create(dto) {
        return this.portfolioService.create(dto);
    }
    update(id, dto) {
        return this.portfolioService.update(id, dto);
    }
    remove(id) {
        return this.portfolioService.remove(id);
    }
    uploadMedia(file, dto) {
        return this.cloudinaryService.uploadBuffer(file, dto.resourceType, dto.folder);
    }
    findOne(id) {
        return this.portfolioService.findOne(id);
    }
};
exports.PortfolioController = PortfolioController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Liste publique des contenus du portfolio' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, enum: create_portfolio_item_dto_1.portfolioCategories }),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('admin/items'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: "Ajoute un contenu portfolio depuis l'admin" }),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_portfolio_item_dto_1.CreatePortfolioItemDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('admin/items/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifie un contenu portfolio' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_portfolio_item_dto_1.UpdatePortfolioItemDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/items/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprime un contenu portfolio' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('admin/upload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload image ou video vers Cloudinary' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: { type: 'string', format: 'binary' },
                resourceType: { type: 'string', enum: ['image', 'video'] },
                folder: { type: 'string' },
            },
            required: ['file', 'resourceType'],
        },
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_media_dto_1.UploadMediaDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "uploadMedia", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('item/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Detail public d un contenu du portfolio' }),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findOne", null);
exports.PortfolioController = PortfolioController = __decorate([
    (0, swagger_1.ApiTags)('portfolio'),
    (0, common_1.Controller)('portfolio'),
    __metadata("design:paramtypes", [portfolio_service_1.PortfolioService,
        cloudinary_service_1.CloudinaryService])
], PortfolioController);
//# sourceMappingURL=portfolio.controller.js.map