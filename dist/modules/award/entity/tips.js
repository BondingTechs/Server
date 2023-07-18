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
exports.AwardTipsEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const baseEvent_1 = require("../../../base/entity/baseEvent");
let AwardTipsEntity = class AwardTipsEntity extends baseEvent_1.BaseEventEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '標題' }),
    __metadata("design:type", String)
], AwardTipsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '縮圖', nullable: true, type: 'text' }),
    __metadata("design:type", String)
], AwardTipsEntity.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '內容', type: 'mediumtext' }),
    __metadata("design:type", String)
], AwardTipsEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '發布日期', nullable: true }),
    __metadata("design:type", String)
], AwardTipsEntity.prototype, "publishDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '狀態', type: 'tinyint' }),
    __metadata("design:type", Number)
], AwardTipsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '觀看次數', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], AwardTipsEntity.prototype, "views", void 0);
AwardTipsEntity = __decorate([
    (0, orm_1.EntityModel)('award_tips')
], AwardTipsEntity);
exports.AwardTipsEntity = AwardTipsEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvZW50aXR5L3RpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLHFDQUFpQztBQUNqQyw4REFBaUU7QUFHakUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSwyQkFBZTtDQWtCbkQsQ0FBQTtBQWhCQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ1o7QUFHZDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O2tEQUN0QztBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOztnREFDOUI7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFDL0IsTUFBTTtvREFBQztBQUdwQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzsrQ0FDNUI7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzhDQUN2QztBQWpCSCxlQUFlO0lBRDNCLElBQUEsaUJBQVcsRUFBQyxZQUFZLENBQUM7R0FDYixlQUFlLENBa0IzQjtBQWxCWSwwQ0FBZSJ9