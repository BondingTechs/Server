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
exports.BaseUserIdentityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const baseEvent_1 = require("../../../../base/entity/baseEvent");
/**
 * 描述
 */
let BaseUserIdentityEntity = class BaseUserIdentityEntity extends baseEvent_1.BaseEventEntity {
};
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '用戶ID' }),
    __metadata("design:type", Number)
], BaseUserIdentityEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '正面照ID' }),
    __metadata("design:type", Number)
], BaseUserIdentityEntity.prototype, "positiveId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '背面照ID' }),
    __metadata("design:type", Number)
], BaseUserIdentityEntity.prototype, "negativeId", void 0);
BaseUserIdentityEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_user_identity')
], BaseUserIdentityEntity);
exports.BaseUserIdentityEntity = BaseUserIdentityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9pZGVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL3VzZXJfaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLHFDQUF3QztBQUN4QyxpRUFBb0U7QUFFcEU7O0dBRUc7QUFFSCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLDJCQUFlO0NBVTFELENBQUE7QUFQQztJQUZDLElBQUEsZUFBSyxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7c0RBQ2I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7MERBQ1Y7QUFHbkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7OzBEQUNWO0FBVFIsc0JBQXNCO0lBRGxDLElBQUEsaUJBQVcsRUFBQyx3QkFBd0IsQ0FBQztHQUN6QixzQkFBc0IsQ0FVbEM7QUFWWSx3REFBc0IifQ==