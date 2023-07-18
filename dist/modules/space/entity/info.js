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
exports.SpaceInfoEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 文件空間信息
 */
let SpaceInfoEntity = class SpaceInfoEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '地址' }),
    __metadata("design:type", String)
], SpaceInfoEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '類型' }),
    __metadata("design:type", String)
], SpaceInfoEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分類ID', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SpaceInfoEntity.prototype, "classifyId", void 0);
SpaceInfoEntity = __decorate([
    (0, orm_1.EntityModel)('space_info')
], SpaceInfoEntity);
exports.SpaceInfoEntity = SpaceInfoEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3BhY2UvZW50aXR5L2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxxQ0FBaUM7QUFFakM7O0dBRUc7QUFFSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGlCQUFVO0NBUzlDLENBQUE7QUFQQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ2Q7QUFHWjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ2I7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUN6QztBQVJSLGVBQWU7SUFEM0IsSUFBQSxpQkFBVyxFQUFDLFlBQVksQ0FBQztHQUNiLGVBQWUsQ0FTM0I7QUFUWSwwQ0FBZSJ9