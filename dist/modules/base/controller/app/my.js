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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAppUserController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const user_1 = require("../../entity/sys/user");
const user_2 = require("../../service/app/user");
const param_1 = require("../../service/sys/param");
const article_1 = require("../../../news/service/app/article");
const service_1 = require("../../../collection/service");
const tips_1 = require("../../../award/service/app/tips");
/**
 * 不需要登錄的後台接口
 */
let BaseAppUserController = class BaseAppUserController extends core_1.BaseController {
    /**
     * 收藏
     * @param params
     */
    // @Post('/articles', { summary: '發布項目' })
    // async myArticle(@Body() params) {
    //   return this.ok(await this.newsArticleApiService.myArticle(params));
    // }
    /**
     * 瀏覽紀錄
     * @param params
     */
    async articleViewHistory(params) {
        const { type } = params;
        if (type === 'article') {
            return this.ok(await this.newsArticleApiService.viewHistory(params));
        }
        else if (type === 'tip') {
            return this.ok(await this.tipAppService.viewHistory(params));
        }
        else {
            throw new core_1.CoolCommException('不允許的參數內容');
        }
    }
    /**
     * 收藏
     * @param params
     */
    async myCollections(params) {
        return this.ok(await this.collectionService.my(params));
    }
    /**
     * 小知識
     * @param params
     */
    async myTips(params) {
        return this.ok(await this.tipAppService.page(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", article_1.AppNewsArticleService)
], BaseAppUserController.prototype, "newsArticleApiService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", service_1.CollectionService)
], BaseAppUserController.prototype, "collectionService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_2.BaseApiUserService)
], BaseAppUserController.prototype, "baseApiUserService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", param_1.BaseSysParamService)
], BaseAppUserController.prototype, "baseSysParamService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", tips_1.TipAppService)
], BaseAppUserController.prototype, "tipAppService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseAppUserController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolEps)
], BaseAppUserController.prototype, "eps", void 0);
__decorate([
    (0, decorator_1.Post)('/history', { summary: '瀏覽紀錄' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseAppUserController.prototype, "articleViewHistory", null);
__decorate([
    (0, decorator_1.Post)('/collections', { summary: '收藏項目' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseAppUserController.prototype, "myCollections", null);
__decorate([
    (0, decorator_1.Post)('/tips', { summary: '小知識' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseAppUserController.prototype, "myTips", null);
BaseAppUserController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        prefix: '/app/my',
        api: ['delete', 'info'],
        entity: user_1.BaseSysUserEntity,
        service: user_2.BaseApiUserService,
    })
], BaseAppUserController);
exports.BaseAppUserController = BaseAppUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2UvY29udHJvbGxlci9hcHAvbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtFO0FBQ2xFLDRDQUsyQjtBQUMzQixnREFBMEQ7QUFDMUQsaURBQTREO0FBQzVELG1EQUE4RDtBQUU5RCwrREFBMEU7QUFDMUUseURBQWdFO0FBQ2hFLDBEQUFnRTtBQUVoRTs7R0FFRztBQVFILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEscUJBQWM7SUFzQnZEOzs7T0FHRztJQUNILDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsd0VBQXdFO0lBQ3hFLElBQUk7SUFFSjs7O09BR0c7SUFFSCxLQUFLLENBQUMsa0JBQWtCLENBQVMsTUFBTTtRQUNyQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0wsTUFBTSxJQUFJLHdCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUVILEtBQUssQ0FBQyxhQUFhLENBQVMsTUFBTTtRQUNoQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUVILEtBQUssQ0FBQyxNQUFNLENBQVMsTUFBTTtRQUN6QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFBO0FBOURDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNjLCtCQUFxQjtvRUFBQztBQUc3QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVSwyQkFBaUI7Z0VBQUM7QUFHckM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1cseUJBQWtCO2lFQUFDO0FBR3ZDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNZLDJCQUFtQjtrRUFBQztBQUd6QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTSxvQkFBYTs0REFBQztBQUc3QjtJQURDLElBQUEsa0JBQU0sR0FBRTs7a0RBQ0k7QUFHYjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDSixjQUFPO2tEQUFDO0FBZ0JiO0lBREMsSUFBQSxnQkFBSSxFQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNaLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7K0RBUy9CO0FBT0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7MERBRTFCO0FBT0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3BCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7bURBRW5CO0FBL0RVLHFCQUFxQjtJQVBqQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSx3QkFBaUI7UUFDekIsT0FBTyxFQUFFLHlCQUFrQjtLQUM1QixDQUFDO0dBQ1cscUJBQXFCLENBZ0VqQztBQWhFWSxzREFBcUIifQ==