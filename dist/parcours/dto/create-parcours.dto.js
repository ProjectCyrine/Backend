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
exports.UpdateParcoursDto = exports.CreateParcoursDto = exports.EntreeDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class EntreeDto {
    titre;
    lieu;
    dateDebut;
    dateFin;
    description;
    ordre;
}
exports.EntreeDto = EntreeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Professeure de piano - Conservatoire Les Solistes' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EntreeDto.prototype, "titre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Tunis' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EntreeDto.prototype, "lieu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EntreeDto.prototype, "dateDebut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Present' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EntreeDto.prototype, "dateFin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [String],
        example: ['Cours individuels', 'Preparation aux concerts'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], EntreeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EntreeDto.prototype, "ordre", void 0);
class CreateParcoursDto {
    categorie;
    label;
    icone;
    entrees;
}
exports.CreateParcoursDto = CreateParcoursDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'experience' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateParcoursDto.prototype, "categorie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Experiences professionnelles' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateParcoursDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Piano' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateParcoursDto.prototype, "icone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [EntreeDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => EntreeDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateParcoursDto.prototype, "entrees", void 0);
class UpdateParcoursDto extends (0, swagger_1.PartialType)(CreateParcoursDto) {
}
exports.UpdateParcoursDto = UpdateParcoursDto;
//# sourceMappingURL=create-parcours.dto.js.map