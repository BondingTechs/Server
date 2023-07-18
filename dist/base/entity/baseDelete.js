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
exports.BaseDeleteEntity = void 0;
const typeorm_1 = require("typeorm");
const baseEvent_1 = require("./baseEvent");
class BaseDeleteEntity extends baseEvent_1.BaseEventEntity {
}
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '刪除用戶ID', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], BaseDeleteEntity.prototype, "deleteBy", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ comment: '刪除時間' }),
    __metadata("design:type", Date)
], BaseDeleteEntity.prototype, "deleteTime", void 0);
exports.BaseDeleteEntity = BaseDeleteEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZURlbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImJhc2UvZW50aXR5L2Jhc2VEZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTBEO0FBQzFELDJDQUE4QztBQUU5QyxNQUFhLGdCQUFpQixTQUFRLDJCQUFlO0NBT3BEO0FBSkM7SUFGQyxJQUFBLGVBQUssR0FBRTtJQUNQLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2tEQUM3QztBQUdqQjtJQURDLElBQUEsMEJBQWdCLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OEJBQzFCLElBQUk7b0RBQUM7QUFObkIsNENBT0MifQ==