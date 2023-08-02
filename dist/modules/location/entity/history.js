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
exports.IPHistoryEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
/**
 * 字典信息
 */
let IPHistoryEntity = class IPHistoryEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '設備ID' }),
    __metadata("design:type", Number)
], IPHistoryEntity.prototype, "agentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '頁面路由' }),
    __metadata("design:type", String)
], IPHistoryEntity.prototype, "routeFrom", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '頁面路由' }),
    __metadata("design:type", String)
], IPHistoryEntity.prototype, "routeTo", void 0);
IPHistoryEntity = __decorate([
    (0, orm_1.EntityModel)('ip_history')
], IPHistoryEntity);
exports.IPHistoryEntity = IPHistoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9jYXRpb24vZW50aXR5L2hpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHVDQUE0QztBQUM1QyxxQ0FBaUM7QUFFakM7O0dBRUc7QUFFSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGlCQUFVO0NBUzlDLENBQUE7QUFQQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Z0RBQ1o7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O2tEQUNWO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOztnREFDWjtBQVJMLGVBQWU7SUFEM0IsSUFBQSxpQkFBVyxFQUFDLFlBQVksQ0FBQztHQUNiLGVBQWUsQ0FTM0I7QUFUWSwwQ0FBZSJ9