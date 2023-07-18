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
exports.BaseSysLogEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 系统日志
 */
let BaseSysLogEntity = class BaseSysLogEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '用户ID', nullable: true, type: 'bigint' }),
    __metadata("design:type", Number)
], BaseSysLogEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '行为', length: 100 }),
    __metadata("design:type", String)
], BaseSysLogEntity.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: 'ip', nullable: true, length: 50 }),
    __metadata("design:type", String)
], BaseSysLogEntity.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: 'ip地址', nullable: true, length: 50 }),
    __metadata("design:type", String)
], BaseSysLogEntity.prototype, "ipAddr", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '参数', nullable: true, type: 'text' }),
    __metadata("design:type", String)
], BaseSysLogEntity.prototype, "params", void 0);
BaseSysLogEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_log')
], BaseSysLogEntity);
exports.BaseSysLogEntity = BaseSysLogEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL2VudGl0eS9zeXMvbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1Qyw0Q0FBK0M7QUFDL0MscUNBQXdDO0FBRXhDOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxpQkFBVTtDQW1CL0MsQ0FBQTtBQWhCQztJQUZDLElBQUEsZUFBSyxHQUFFO0lBQ1AsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Z0RBQzdDO0FBSWY7SUFGQyxJQUFBLGVBQUssR0FBRTtJQUNQLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOztnREFDeEI7QUFJZjtJQUZDLElBQUEsZUFBSyxHQUFFO0lBQ1AsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7NENBQzNDO0FBSVg7SUFGQyxJQUFBLGVBQUssR0FBRTtJQUNQLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O2dEQUN6QztBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Z0RBQ3pDO0FBbEJKLGdCQUFnQjtJQUQ1QixJQUFBLGlCQUFXLEVBQUMsY0FBYyxDQUFDO0dBQ2YsZ0JBQWdCLENBbUI1QjtBQW5CWSw0Q0FBZ0IifQ==