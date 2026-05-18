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
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const portfolio_item_schema_1 = require("./schemas/portfolio-item.schema");
let PortfolioService = class PortfolioService {
    portfolioItemModel;
    constructor(portfolioItemModel) {
        this.portfolioItemModel = portfolioItemModel;
    }
    async create(dto) {
        return this.portfolioItemModel.create(dto);
    }
    async findAll(category) {
        const filter = category ? { category } : {};
        return this.portfolioItemModel
            .find(filter)
            .sort({ category: 1, order: 1, createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        const item = await this.portfolioItemModel.findById(id).exec();
        if (!item) {
            throw new common_1.NotFoundException('Élément portfolio introuvable');
        }
        return item;
    }
    async update(id, dto) {
        const item = await this.portfolioItemModel
            .findByIdAndUpdate(id, dto, { new: true, runValidators: true })
            .exec();
        if (!item) {
            throw new common_1.NotFoundException('Élément portfolio introuvable');
        }
        return item;
    }
    async remove(id) {
        const item = await this.portfolioItemModel.findByIdAndDelete(id).exec();
        if (!item) {
            throw new common_1.NotFoundException('Élément portfolio introuvable');
        }
        return { deleted: true, id };
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(portfolio_item_schema_1.PortfolioItem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map