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
exports.ParcoursController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../common/decorators/public.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const create_parcours_dto_1 = require("./dto/create-parcours.dto");
const parcours_service_1 = require("./parcours.service");
let ParcoursController = class ParcoursController {
    parcoursService;
    constructor(parcoursService) {
        this.parcoursService = parcoursService;
    }
    async findAll() {
        const data = await this.parcoursService.findAll();
        return { success: true, count: data.length, data };
    }
    async findOne(categorie) {
        const data = await this.parcoursService.findByCategorie(categorie);
        return { success: true, data };
    }
    async create(dto) {
        const data = await this.parcoursService.create(dto);
        return { success: true, data };
    }
    async update(id, dto) {
        const data = await this.parcoursService.update(id, dto);
        return { success: true, data };
    }
    async remove(id) {
        await this.parcoursService.remove(id);
    }
};
exports.ParcoursController = ParcoursController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Liste publique des sections de parcours' }),
    (0, swagger_1.ApiOkResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':categorie'),
    (0, swagger_1.ApiOperation)({ summary: 'Retourne une section de parcours par categorie' }),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Param)('categorie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Ajoute une section de parcours dynamiquement' }),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_parcours_dto_1.CreateParcoursDto]),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('admin/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifie une section de parcours' }),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_parcours_dto_1.UpdateParcoursDto]),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprime une section de parcours' }),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "remove", null);
exports.ParcoursController = ParcoursController = __decorate([
    (0, swagger_1.ApiTags)('parcours'),
    (0, common_1.Controller)('parcours'),
    __metadata("design:paramtypes", [parcours_service_1.ParcoursService])
], ParcoursController);
//# sourceMappingURL=parcours.controller.js.map