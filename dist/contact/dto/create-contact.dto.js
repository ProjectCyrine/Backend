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
exports.CreateContactDto = void 0;
const class_validator_1 = require("class-validator");
class CreateContactDto {
    nom;
    email;
    sujet;
    message;
}
exports.CreateContactDto = CreateContactDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le nom est requis' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Nom trop long (max 100 caractères)' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Adresse email invalide' }),
    (0, class_validator_1.IsNotEmpty)({ message: "L'email est requis" }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le sujet est requis' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Sujet trop long (max 200 caractères)' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "sujet", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le message est requis' }),
    (0, class_validator_1.MinLength)(10, { message: 'Message trop court (min 10 caractères)' }),
    (0, class_validator_1.MaxLength)(2000, { message: 'Message trop long (max 2000 caractères)' }),
    __metadata("design:type", String)
], CreateContactDto.prototype, "message", void 0);
//# sourceMappingURL=create-contact.dto.js.map