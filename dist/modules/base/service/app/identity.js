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
exports.UserIdentityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const _ = require("lodash");
const user_1 = require("../../../base/entity/sys/user");
const user_identity_1 = require("../../entity/sys/user_identity");
/**
 * 描述
 */
let UserIdentityService = class UserIdentityService extends core_1.BaseService {
    /**
     * 描述
     */
    async identityCert(param) {
        const userId = this.ctx.user.userId;
        const exist = await this.userIdentityEntity.findOne({ userId });
        if (_.isEmpty(exist)) {
            await this.userIdentityEntity.save({
                userId,
                ...param,
                createBy: userId,
                updateBy: userId,
            });
        }
        else {
            await this.userIdentityEntity.save({
                id: exist.id,
                ...param,
                updateBy: userId,
            });
        }
    }
    /**
     * 身份驗證
     */
    async identityVerify(params) {
        const { idCard, positiveId, negativeId } = params;
        if (_.isEmpty(idCard) || !positiveId || !negativeId)
            throw new core_1.CoolCommException('請輸入完整參數');
        const idCardExist = await this.baseSysUserEntity.findOne({
            idCard,
            identityStatus: 23,
        });
        if (!_.isEmpty(idCardExist))
            throw new core_1.CoolCommException('該身份證已被使用，請聯絡管理員');
        const userId = this.ctx.user.userId;
        const identityExist = await this.userIdentityEntity.findOne({ userId });
        if (!_.isEmpty(identityExist)) {
            await this.userIdentityEntity.save({
                id: identityExist.id,
                userId,
                idCard,
                positiveId,
                negativeId,
                createBy: userId,
                updateBy: userId,
            });
        }
        else {
            await this.userIdentityEntity.save({
                userId,
                idCard,
                positiveId,
                negativeId,
                createBy: userId,
                updateBy: userId,
            });
        }
        await this.baseSysUserEntity.save({
            id: userId,
            idCard,
            identityStatus: 21,
        });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(user_identity_1.BaseUserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserIdentityService.prototype, "userIdentityEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserIdentityService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], UserIdentityService.prototype, "ctx", void 0);
UserIdentityService = __decorate([
    (0, decorator_1.Provide)()
], UserIdentityService);
exports.UserIdentityService = UserIdentityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2Uvc2VydmljZS9hcHAvaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUFtRTtBQUNuRSx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUM1Qix3REFBa0U7QUFDbEUsa0VBQXdFO0FBQ3hFOztHQUVHO0FBRUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxrQkFBVztJQVVsRDs7T0FFRztJQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxNQUFNO2dCQUNOLEdBQUcsS0FBSztnQkFDUixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDakMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNaLEdBQUcsS0FBSztnQkFDUixRQUFRLEVBQUUsTUFBTTthQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVTtZQUNqRCxNQUFNLElBQUksd0JBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ3ZELE1BQU07WUFDTixjQUFjLEVBQUUsRUFBRTtTQUNuQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekIsTUFBTSxJQUFJLHdCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BCLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxNQUFNO1lBQ1YsTUFBTTtZQUNOLGNBQWMsRUFBRSxFQUFFO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBekVDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxzQ0FBc0IsQ0FBQzs4QkFDdEIsb0JBQVU7K0RBQXlCO0FBR3ZEO0lBREMsSUFBQSx1QkFBaUIsRUFBQyx3QkFBaUIsQ0FBQzs4QkFDbEIsb0JBQVU7OERBQW9CO0FBR2pEO0lBREMsSUFBQSxrQkFBTSxHQUFFOztnREFDTDtBQVJPLG1CQUFtQjtJQUQvQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxtQkFBbUIsQ0EyRS9CO0FBM0VZLGtEQUFtQiJ9