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
exports.BaseSysRoleDepartmentEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 角色部門
 */
let BaseSysRoleDepartmentEntity = class BaseSysRoleDepartmentEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '角色ID', type: 'bigint' }),
    __metadata("design:type", Number)
], BaseSysRoleDepartmentEntity.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '部門ID', type: 'bigint' }),
    __metadata("design:type", Number)
], BaseSysRoleDepartmentEntity.prototype, "departmentId", void 0);
BaseSysRoleDepartmentEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_role_department')
], BaseSysRoleDepartmentEntity);
exports.BaseSysRoleDepartmentEntity = BaseSysRoleDepartmentEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZV9kZXBhcnRtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL2VudGl0eS9zeXMvcm9sZV9kZXBhcnRtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1Qyw0Q0FBK0M7QUFDL0MscUNBQWlDO0FBRWpDOztHQUVHO0FBRUgsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBNEIsU0FBUSxpQkFBVTtDQU0xRCxDQUFBO0FBSkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkRBQzdCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7aUVBQ3ZCO0FBTFYsMkJBQTJCO0lBRHZDLElBQUEsaUJBQVcsRUFBQywwQkFBMEIsQ0FBQztHQUMzQiwyQkFBMkIsQ0FNdkM7QUFOWSxrRUFBMkIifQ==