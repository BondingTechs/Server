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
exports.IPAgentEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
/**
 * 字典信息
 */
let IPAgentEntity = class IPAgentEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: 'IP Info ID' }),
    __metadata("design:type", Number)
], IPAgentEntity.prototype, "infoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'userAgentString' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "userAgentString", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'name' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'type' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'version' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'versionMajor' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "versionMajor", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'device' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'engine' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "engine", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'operatingSystem' }),
    __metadata("design:type", String)
], IPAgentEntity.prototype, "operatingSystem", void 0);
IPAgentEntity = __decorate([
    (0, orm_1.EntityModel)('ip_agent')
], IPAgentEntity);
exports.IPAgentEntity = IPAgentEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2xvY2F0aW9uL2VudGl0eS9hZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBK0M7QUFDL0MsdUNBQTRDO0FBQzVDLHFDQUFpQztBQUVqQzs7R0FFRztBQUVILElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxpQkFBVTtDQTJCNUMsQ0FBQTtBQXpCQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQzs7NkNBQ25CO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs7c0RBQ2Y7QUFHeEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OzJDQUNmO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OzJDQUNmO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7OzhDQUNmO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDOzttREFDZjtBQUdyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7NkNBQ2Y7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7NkNBQ2Y7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDOztzREFDZjtBQTFCYixhQUFhO0lBRHpCLElBQUEsaUJBQVcsRUFBQyxVQUFVLENBQUM7R0FDWCxhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYSJ9