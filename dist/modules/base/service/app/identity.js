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
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
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
        const { idCard, positiveId } = params;
        if (_.isEmpty(idCard) || !positiveId)
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
                // negativeId,
                createBy: userId,
                updateBy: userId,
            });
        }
        else {
            await this.userIdentityEntity.save({
                userId,
                idCard,
                positiveId,
                // negativeId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2Uvc2VydmljZS9hcHAvaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFDbEQsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyx3REFBa0U7QUFDbEUsa0VBQXdFO0FBQ3hFOztHQUVHO0FBRUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxrQkFBVztJQVVsRDs7T0FFRztJQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxNQUFNO2dCQUNOLEdBQUcsS0FBSztnQkFDUixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDakMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNaLEdBQUcsS0FBSztnQkFDUixRQUFRLEVBQUUsTUFBTTthQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ2xDLE1BQU0sSUFBSSx3QkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDdkQsTUFBTTtZQUNOLGNBQWMsRUFBRSxFQUFFO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN6QixNQUFNLElBQUksd0JBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLEVBQUUsRUFBRSxhQUFhLENBQUMsRUFBRTtnQkFDcEIsTUFBTTtnQkFDTixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsY0FBYztnQkFDZCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDakMsTUFBTTtnQkFDTixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsY0FBYztnQkFDZCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDaEMsRUFBRSxFQUFFLE1BQU07WUFDVixNQUFNO1lBQ04sY0FBYyxFQUFFLEVBQUU7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUF6RUM7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHNDQUFzQixDQUFDOzhCQUN0QixvQkFBVTsrREFBeUI7QUFHdkQ7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHdCQUFpQixDQUFDOzhCQUNsQixvQkFBVTs4REFBb0I7QUFHakQ7SUFEQyxJQUFBLGtCQUFNLEdBQUU7O2dEQUNMO0FBUk8sbUJBQW1CO0lBRC9CLElBQUEsbUJBQU8sR0FBRTtHQUNHLG1CQUFtQixDQTJFL0I7QUEzRVksa0RBQW1CIn0=