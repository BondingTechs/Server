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
exports.IndustryCategoryEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let IndustryCategoryEntity = class IndustryCategoryEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '分類名稱' }),
    __metadata("design:type", String)
], IndustryCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '分類代稱' }),
    __metadata("design:type", String)
], IndustryCategoryEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分類描述', nullable: true }),
    __metadata("design:type", String)
], IndustryCategoryEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '上層分類', nullable: true }),
    __metadata("design:type", Number)
], IndustryCategoryEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'Icon', nullable: true }),
    __metadata("design:type", String)
], IndustryCategoryEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序號', nullable: true }),
    __metadata("design:type", Number)
], IndustryCategoryEntity.prototype, "orderNum", void 0);
IndustryCategoryEntity = __decorate([
    (0, orm_1.EntityModel)('industry_category')
], IndustryCategoryEntity);
exports.IndustryCategoryEntity = IndustryCategoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L2VudGl0eS9jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsNENBQStDO0FBQy9DLHFDQUF3QztBQUV4Qzs7R0FFRztBQUVILElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXVCLFNBQVEsaUJBQVU7Q0F1QnJELENBQUE7QUFwQkM7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O29EQUNmO0FBSWI7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O29EQUNmO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkRBQ3hCO0FBR3BCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dEQUMzQjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDL0I7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3REFDMUI7QUFuQk4sc0JBQXNCO0lBRGxDLElBQUEsaUJBQVcsRUFBQyxtQkFBbUIsQ0FBQztHQUNwQixzQkFBc0IsQ0F1QmxDO0FBdkJZLHdEQUFzQiJ9