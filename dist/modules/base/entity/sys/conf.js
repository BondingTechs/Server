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
exports.BaseSysConfEntity = void 0;
const typeorm_1 = require("typeorm");
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
/**
 * 系统配置
 */
let BaseSysConfEntity = class BaseSysConfEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '配置键' }),
    __metadata("design:type", String)
], BaseSysConfEntity.prototype, "cKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '配置值' }),
    __metadata("design:type", String)
], BaseSysConfEntity.prototype, "cValue", void 0);
BaseSysConfEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_conf')
], BaseSysConfEntity);
exports.BaseSysConfEntity = BaseSysConfEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdDO0FBQ3hDLHVDQUE0QztBQUM1Qyw0Q0FBK0M7QUFFL0M7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFVO0NBT2hELENBQUE7QUFKQztJQUZDLElBQUEsZUFBSyxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7K0NBQ2Q7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7aURBQ1o7QUFOSixpQkFBaUI7SUFEN0IsSUFBQSxpQkFBVyxFQUFDLGVBQWUsQ0FBQztHQUNoQixpQkFBaUIsQ0FPN0I7QUFQWSw4Q0FBaUIifQ==