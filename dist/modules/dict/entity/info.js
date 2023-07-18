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
exports.DictInfoEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 字典信息
 */
let DictInfoEntity = class DictInfoEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '類型ID' }),
    __metadata("design:type", Number)
], DictInfoEntity.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '名稱' }),
    __metadata("design:type", String)
], DictInfoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序', default: 0 }),
    __metadata("design:type", Number)
], DictInfoEntity.prototype, "orderNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '類型 el-tag', nullable: true }),
    __metadata("design:type", String)
], DictInfoEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '備註', nullable: true }),
    __metadata("design:type", String)
], DictInfoEntity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '父ID', default: null }),
    __metadata("design:type", Number)
], DictInfoEntity.prototype, "parentId", void 0);
DictInfoEntity = __decorate([
    (0, orm_1.EntityModel)('dict_info')
], DictInfoEntity);
exports.DictInfoEntity = DictInfoEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGljdC9lbnRpdHkvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsNENBQStDO0FBQy9DLHFDQUFpQztBQUVqQzs7R0FFRztBQUVILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxpQkFBVTtDQWtCN0MsQ0FBQTtBQWhCQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7OENBQ2I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ2I7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztnREFDckI7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ3BDO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQzNCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0RBQ3pCO0FBakJOLGNBQWM7SUFEMUIsSUFBQSxpQkFBVyxFQUFDLFdBQVcsQ0FBQztHQUNaLGNBQWMsQ0FrQjFCO0FBbEJZLHdDQUFjIn0=