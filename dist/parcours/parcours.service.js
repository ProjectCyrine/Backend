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
exports.ParcoursService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const parcours_schema_1 = require("./schemas/parcours.schema");
let ParcoursService = class ParcoursService {
    parcoursModel;
    constructor(parcoursModel) {
        this.parcoursModel = parcoursModel;
    }
    async create(dto) {
        return this.parcoursModel.create(this.normalizeParcours(dto));
    }
    async findAll() {
        return this.parcoursModel.find().sort({ createdAt: -1, categorie: 1 }).exec();
    }
    async findByCategorie(categorie) {
        const section = await this.parcoursModel.findOne({ categorie }).exec();
        if (!section) {
            throw new common_1.NotFoundException(`Categorie "${categorie}" introuvable`);
        }
        return section;
    }
    async update(id, dto) {
        const section = await this.parcoursModel
            .findByIdAndUpdate(id, this.normalizeParcours(dto), {
            new: true,
            runValidators: true,
        })
            .exec();
        if (!section) {
            throw new common_1.NotFoundException('Section de parcours introuvable');
        }
        return section;
    }
    async remove(id) {
        const section = await this.parcoursModel.findByIdAndDelete(id).exec();
        if (!section) {
            throw new common_1.NotFoundException('Section de parcours introuvable');
        }
        return { deleted: true, id };
    }
    normalizeParcours(dto) {
        if (!dto.entrees) {
            return dto;
        }
        return {
            ...dto,
            entrees: [...dto.entrees].sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0)),
        };
    }
};
exports.ParcoursService = ParcoursService;
exports.ParcoursService = ParcoursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(parcours_schema_1.Parcours.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ParcoursService);
//# sourceMappingURL=parcours.service.js.map