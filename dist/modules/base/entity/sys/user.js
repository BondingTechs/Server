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
    (0, typeorm_1.Column)({ comment: '部門ID', type: 'bigint', default: 1, nullable: true }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHVDQUE0QztBQUM1QyxxQ0FBd0M7QUFFeEM7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFVO0NBNkVoRCxDQUFBO0FBMUVDO0lBRkMsSUFBQSxlQUFLLEdBQUU7SUFDUCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VEQUNuRDtBQUdyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDL0I7QUFJakI7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7bURBQ3ZCO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDVDtBQU1qQjtJQUpDLElBQUEsZ0JBQU0sRUFBQztRQUNOLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDOztvREFDZ0I7QUFHbEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQzNCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O29EQUNSO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDVDtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O2lEQUNoRDtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUN6QjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OytDQUMxQztBQUliO0lBRkMsSUFBQSxlQUFLLEVBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Z0RBQ3hDO0FBSWQ7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0RBQy9CO0FBSWQ7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQzlCO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzt5REFDckM7QUFHdkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzt1REFDckM7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOztnREFDaEQ7QUFHZDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztpREFDM0I7QUFNZjtJQUpDLElBQUEsZ0JBQU0sRUFBQztRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7O3NEQUNrQjtBQUdwQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O2lEQUNsRDtBQXRFSixpQkFBaUI7SUFEN0IsSUFBQSxpQkFBVyxFQUFDLGVBQWUsQ0FBQztHQUNoQixpQkFBaUIsQ0E2RTdCO0FBN0VZLDhDQUFpQiJ9