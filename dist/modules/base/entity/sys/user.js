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
exports.BaseSysUserEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
/**
 * 系統用戶
 */
let BaseSysUserEntity = class BaseSysUserEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '部門ID', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'socketId', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "socketId", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '用戶名', length: 100 }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '密碼' }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: '密碼版本, 作用是改完密碼，讓原來的token失效',
        default: 1,
    }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "passwordV", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '頭像', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '姓氏' }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '名字' }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '性別 0:男 1:女', default: 1, type: 'tinyint' }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '生日', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '區碼', default: '+886', length: 20 }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '手機', nullable: true, length: 20 }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: 'Email', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '身分證字號', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "idCard", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '身份驗證 dict:審核中.駁回.通過', type: 'tinyint' }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "identityStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '駁回原因', nullable: true, type: 'text' }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "rejectReason", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '簡介', nullable: true, type: 'mediumtext' }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "intro", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '備註', nullable: true }),
    __metadata("design:type", String)
], BaseSysUserEntity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Email驗證',
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "emailStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '狀態 0:禁用 1:啟用', default: 1, type: 'tinyint' }),
    __metadata("design:type", Number)
], BaseSysUserEntity.prototype, "status", void 0);
BaseSysUserEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_user')
], BaseSysUserEntity);
exports.BaseSysUserEntity = BaseSysUserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHVDQUE0QztBQUM1QyxxQ0FBd0M7QUFFeEM7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFVO0NBNkVoRCxDQUFBO0FBMUVDO0lBRkMsSUFBQSxlQUFLLEdBQUU7SUFDUCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1REFDdkM7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQy9CO0FBSWpCO0lBRkMsSUFBQSxlQUFLLEVBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7O21EQUN2QjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQ1Q7QUFNakI7SUFKQyxJQUFBLGdCQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQzs7b0RBQ2dCO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUMzQjtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDUjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQ1Q7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztpREFDaEQ7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDekI7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzsrQ0FDMUM7QUFJYjtJQUZDLElBQUEsZUFBSyxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O2dEQUN4QztBQUlkO0lBRkMsSUFBQSxlQUFLLEVBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUMvQjtBQUlkO0lBRkMsSUFBQSxlQUFLLEVBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUM5QjtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7eURBQ3JDO0FBR3ZCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7dURBQ3JDO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzs7Z0RBQ2hEO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQzNCO0FBTWY7SUFKQyxJQUFBLGdCQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDOztzREFDa0I7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztpREFDbEQ7QUF0RUosaUJBQWlCO0lBRDdCLElBQUEsaUJBQVcsRUFBQyxlQUFlLENBQUM7R0FDaEIsaUJBQWlCLENBNkU3QjtBQTdFWSw4Q0FBaUIifQ==