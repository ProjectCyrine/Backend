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
exports.UpdatePortfolioItemDto = exports.CreatePortfolioItemDto = exports.portfolioCategories = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
exports.portfolioCategories = [
    'parcours',
    'formation',
    'medaille',
    'prix',
    'image',
    'video',
];
class CreatePortfolioItemDto {
    category;
    title;
    subtitle;
    location;
    startDate;
    endDate;
    description;
    mediaUrl;
    mediaType;
    cloudinaryPublicId;
    tags;
    featured;
    order;
}
exports.CreatePortfolioItemDto = CreatePortfolioItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.portfolioCategories, example: 'prix' }),
    (0, class_validator_1.IsEnum)(exports.portfolioCategories),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1er Prix - Concours International' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Institut Supérieur de Musique de Tunis' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Tunis, Tunisie' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-05-01' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-05-01' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [String],
        example: ['Participation en tant que soliste', 'Répertoire classique'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePortfolioItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    }),
    (0, class_validator_1.IsUrl)({ require_tld: false }, { message: 'mediaUrl doit être une URL valide' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['image', 'video'], example: 'image' }),
    (0, class_validator_1.IsEnum)(['image', 'video']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "mediaType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'portfolio/media/sample',
        description: 'Public ID Cloudinary',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePortfolioItemDto.prototype, "cloudinaryPublicId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], example: ['piano', 'festival'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePortfolioItemDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePortfolioItemDto.prototype, "featured", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePortfolioItemDto.prototype, "order", void 0);
class UpdatePortfolioItemDto extends (0, swagger_1.PartialType)(CreatePortfolioItemDto) {
}
exports.UpdatePortfolioItemDto = UpdatePortfolioItemDto;
//# sourceMappingURL=create-portfolio-item.dto.js.map