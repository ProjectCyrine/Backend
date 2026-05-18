"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcoursModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const parcours_schema_1 = require("./schemas/parcours.schema");
const parcours_service_1 = require("./parcours.service");
const parcours_controller_1 = require("./parcours.controller");
let ParcoursModule = class ParcoursModule {
};
exports.ParcoursModule = ParcoursModule;
exports.ParcoursModule = ParcoursModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                { name: parcours_schema_1.Parcours.name, schema: parcours_schema_1.ParcoursSchema },
            ]),
        ],
        controllers: [parcours_controller_1.ParcoursController],
        providers: [parcours_service_1.ParcoursService, jwt_auth_guard_1.JwtAuthGuard],
    })
], ParcoursModule);
//# sourceMappingURL=parcours.module.js.map