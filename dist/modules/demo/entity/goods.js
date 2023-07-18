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
exports.DemoGoodsEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 商品
 */
let DemoGoodsEntity = class DemoGoodsEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '标题' }),
    __metadata("design:type", String)
], DemoGoodsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '图片' }),
    __metadata("design:type", String)
], DemoGoodsEntity.prototype, "pic", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '价格', type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], DemoGoodsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分类 0-衣服 1-鞋子 2-裤子', type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], DemoGoodsEntity.prototype, "type", void 0);
DemoGoodsEntity = __decorate([
    (0, orm_1.EntityModel)('demo_goods')
], DemoGoodsEntity);
exports.DemoGoodsEntity = DemoGoodsEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vZW50aXR5L2dvb2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1Qyw0Q0FBK0M7QUFDL0MscUNBQWlDO0FBRWpDOztHQUVHO0FBRUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBVTtDQVk5QyxDQUFBO0FBVkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzhDQUNaO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzRDQUNkO0FBR1o7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzhDQUNyRDtBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzs2Q0FDekQ7QUFYRixlQUFlO0lBRDNCLElBQUEsaUJBQVcsRUFBQyxZQUFZLENBQUM7R0FDYixlQUFlLENBWTNCO0FBWlksMENBQWUifQ==