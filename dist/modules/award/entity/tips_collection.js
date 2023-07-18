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
exports.AwardTipsCollectionEntity = void 0;
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let AwardTipsCollectionEntity = class AwardTipsCollectionEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '小知識ID', type: 'bigint' }),
    __metadata("design:type", Number)
], AwardTipsCollectionEntity.prototype, "tipId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用戶ID', type: 'bigint' }),
    __metadata("design:type", Number)
], AwardTipsCollectionEntity.prototype, "userId", void 0);
AwardTipsCollectionEntity = __decorate([
    (0, orm_1.EntityModel)('award_tips_collection')
], AwardTipsCollectionEntity);
exports.AwardTipsCollectionEntity = AwardTipsCollectionEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwc19jb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hd2FyZC9lbnRpdHkvdGlwc19jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUErQztBQUMvQyx1Q0FBNEM7QUFDNUMscUNBQWlDO0FBR2pDLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsaUJBQVU7Q0FNeEQsQ0FBQTtBQUpDO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O3dEQUMvQjtBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O3lEQUM3QjtBQUxKLHlCQUF5QjtJQURyQyxJQUFBLGlCQUFXLEVBQUMsdUJBQXVCLENBQUM7R0FDeEIseUJBQXlCLENBTXJDO0FBTlksOERBQXlCIn0=