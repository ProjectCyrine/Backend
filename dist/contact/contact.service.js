"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ContactService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const nodemailer = __importStar(require("nodemailer"));
const contact_schema_1 = require("./schemas/contact.schema");
let ContactService = ContactService_1 = class ContactService {
    contactModel;
    config;
    logger = new common_1.Logger(ContactService_1.name);
    constructor(contactModel, config) {
        this.contactModel = contactModel;
        this.config = config;
    }
    async create(dto) {
        const contact = await this.contactModel.create(dto);
        this.sendNotificationEmail(dto).catch((err) => this.logger.warn(`Email non envoye: ${err.message}`));
        return contact;
    }
    async findAll() {
        return this.contactModel.find().sort({ createdAt: -1 }).exec();
    }
    async sendNotificationEmail(dto) {
        const user = this.config.get('EMAIL_USER');
        const pass = this.config.get('EMAIL_PASS');
        const to = this.config.get('EMAIL_TO');
        if (!user || !pass || !to) {
            this.logger.warn('Configuration email incomplète, notification ignorée');
            return;
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user, pass },
        });
        await transporter.sendMail({
            from: `"Portfolio Cyrine" <${user}>`,
            to,
            subject: `Nouveau message de ${dto.nom} - ${dto.sujet}`,
            html: `
        <h2 style="color:#1a1a2e">Nouveau message via le portfolio</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nom</td><td>${dto.nom}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td>${dto.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Sujet</td><td>${dto.sujet}</td></tr>
        </table>
        <hr/>
        <p style="white-space:pre-line">${dto.message}</p>
      `,
        });
        this.logger.log(`Email envoye a ${to}`);
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = ContactService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.Contact.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], ContactService);
//# sourceMappingURL=contact.service.js.map