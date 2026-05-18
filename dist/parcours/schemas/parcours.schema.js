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
exports.ParcoursSchema = exports.Parcours = exports.EntreeSchema = exports.Entree = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Entree = class Entree {
    titre;
    lieu;
    dateDebut;
    dateFin;
    description;
    ordre;
};
exports.Entree = Entree;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Entree.prototype, "titre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], Entree.prototype, "lieu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Entree.prototype, "dateDebut", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Present' }),
    __metadata("design:type", String)
], Entree.prototype, "dateFin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Entree.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Entree.prototype, "ordre", void 0);
exports.Entree = Entree = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Entree);
exports.EntreeSchema = mongoose_1.SchemaFactory.createForClass(Entree);
let Parcours = class Parcours {
    categorie;
    label;
    icone;
    entrees;
};
exports.Parcours = Parcours;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Parcours.prototype, "categorie", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Parcours.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Musique' }),
    __metadata("design:type", String)
], Parcours.prototype, "icone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.EntreeSchema], default: [] }),
    __metadata("design:type", Array)
], Parcours.prototype, "entrees", void 0);
exports.Parcours = Parcours = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Parcours);
exports.ParcoursSchema = mongoose_1.SchemaFactory.createForClass(Parcours);
//# sourceMappingURL=parcours.schema.js.map