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
exports.AwardTipsCategoryEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let AwardTipsCategoryEntity = class AwardTipsCategoryEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '小知識ID', type: 'bigint' }),
    __metadata("design:type", Number)
], AwardTipsCategoryEntity.prototype, "tipId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分類ID', type: 'bigint' }),
    __metadata("design:type", Number)
], AwardTipsCategoryEntity.prototype, "categoryId", void 0);
AwardTipsCategoryEntity = __decorate([
    (0, orm_1.EntityModel)('award_tips_category')
], AwardTipsCategoryEntity);
exports.AwardTipsCategoryEntity = AwardTipsCategoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwc19jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvZW50aXR5L3RpcHNfY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQStDO0FBQy9DLHVDQUE0QztBQUM1QyxxQ0FBaUM7QUFHakMsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxpQkFBVTtDQU10RCxDQUFBO0FBSkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7c0RBQy9CO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkRBQ3pCO0FBTFIsdUJBQXVCO0lBRG5DLElBQUEsaUJBQVcsRUFBQyxxQkFBcUIsQ0FBQztHQUN0Qix1QkFBdUIsQ0FNbkM7QUFOWSwwREFBdUIifQ==