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
exports.BaseSysParamEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 参数配置
 */
let BaseSysParamEntity = class BaseSysParamEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '键位' }),
    __metadata("design:type", String)
], BaseSysParamEntity.prototype, "keyName", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '名称' }),
    __metadata("design:type", String)
], BaseSysParamEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '数据', type: 'text' }),
    __metadata("design:type", String)
], BaseSysParamEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: '数据类型 0:字符串 1：数组 2：键值对',
        default: 0,
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], BaseSysParamEntity.prototype, "dataType", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '备注', nullable: true }),
    __metadata("design:type", String)
], BaseSysParamEntity.prototype, "remark", void 0);
BaseSysParamEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_param')
], BaseSysParamEntity);
exports.BaseSysParamEntity = BaseSysParamEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2UvZW50aXR5L3N5cy9wYXJhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsNENBQStDO0FBQy9DLHFDQUF3QztBQUV4Qzs7R0FFRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsaUJBQVU7Q0FvQmpELENBQUE7QUFqQkM7SUFGQyxJQUFBLGVBQUssR0FBRTtJQUNQLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQ1Y7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUNiO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Z0RBQzNCO0FBT2I7SUFMQyxJQUFBLGdCQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQzs7b0RBQ2U7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7a0RBQzNCO0FBbkJKLGtCQUFrQjtJQUQ5QixJQUFBLGlCQUFXLEVBQUMsZ0JBQWdCLENBQUM7R0FDakIsa0JBQWtCLENBb0I5QjtBQXBCWSxnREFBa0IifQ==