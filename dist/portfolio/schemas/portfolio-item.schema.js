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
exports.PortfolioItemSchema = exports.PortfolioItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const create_portfolio_item_dto_1 = require("../dto/create-portfolio-item.dto");
let PortfolioItem = class PortfolioItem {
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
};
exports.PortfolioItem = PortfolioItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: create_portfolio_item_dto_1.portfolioCategories, index: true }),
    __metadata("design:type", String)
], PortfolioItem.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], PortfolioItem.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], PortfolioItem.prototype, "subtitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], PortfolioItem.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PortfolioItem.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PortfolioItem.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], PortfolioItem.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PortfolioItem.prototype, "mediaUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['image', 'video'] }),
    __metadata("design:type", String)
], PortfolioItem.prototype, "mediaType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PortfolioItem.prototype, "cloudinaryPublicId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], PortfolioItem.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], PortfolioItem.prototype, "featured", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PortfolioItem.prototype, "order", void 0);
exports.PortfolioItem = PortfolioItem = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PortfolioItem);
exports.PortfolioItemSchema = mongoose_1.SchemaFactory.createForClass(PortfolioItem);
//# sourceMappingURL=portfolio-item.schema.js.map