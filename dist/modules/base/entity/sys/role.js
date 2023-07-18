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
exports.BaseSysRoleEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 角色
 */
let BaseSysRoleEntity = class BaseSysRoleEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '用户ID' }),
    __metadata("design:type", String)
], BaseSysRoleEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '名称' }),
    __metadata("design:type", String)
], BaseSysRoleEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '角色标签', nullable: true, length: 50 }),
    __metadata("design:type", String)
], BaseSysRoleEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '备注', nullable: true }),
    __metadata("design:type", String)
], BaseSysRoleEntity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '数据权限是否关联上下级', default: 1 }),
    __metadata("design:type", Number)
], BaseSysRoleEntity.prototype, "relevance", void 0);
BaseSysRoleEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_role')
], BaseSysRoleEntity);
exports.BaseSysRoleEntity = BaseSysRoleEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL3JvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxxQ0FBd0M7QUFFeEM7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFVO0NBaUJoRCxDQUFBO0FBZkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O2lEQUNiO0FBSWY7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUNiO0FBSWI7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOztnREFDMUM7QUFHZDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztpREFDM0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztvREFDN0I7QUFoQlAsaUJBQWlCO0lBRDdCLElBQUEsaUJBQVcsRUFBQyxlQUFlLENBQUM7R0FDaEIsaUJBQWlCLENBaUI3QjtBQWpCWSw4Q0FBaUIifQ==