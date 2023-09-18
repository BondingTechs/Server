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
exports.IPInfoEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
/**
 * 字典信息
 */
let IPInfoEntity = class IPInfoEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: 'IP地址' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '國家' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '縣/市' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '區' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '經度' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '緯度' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '時區' }),
    __metadata("design:type", String)
], IPInfoEntity.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用戶ID', nullable: true }),
    __metadata("design:type", Number)
], IPInfoEntity.prototype, "userId", void 0);
IPInfoEntity = __decorate([
    (0, orm_1.EntityModel)('ip_info')
], IPInfoEntity);
exports.IPInfoEntity = IPInfoEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9jYXRpb24vZW50aXR5L2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHVDQUE0QztBQUM1QyxxQ0FBaUM7QUFFakM7O0dBRUc7QUFFSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFhLFNBQVEsaUJBQVU7Q0F3QjNDLENBQUE7QUF0QkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O3dDQUNqQjtBQUdYO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDVjtBQUdoQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7MENBQ2Q7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7OENBQ1I7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzhDQUNUO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDUjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ1Q7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQzdCO0FBdkJKLFlBQVk7SUFEeEIsSUFBQSxpQkFBVyxFQUFDLFNBQVMsQ0FBQztHQUNWLFlBQVksQ0F3QnhCO0FBeEJZLG9DQUFZIn0=