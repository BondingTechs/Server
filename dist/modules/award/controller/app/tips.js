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
exports.TipAppController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const tips_1 = require("../../service/app/tips");
const tips_2 = require("../../entity/tips");
/**
 * 描述
 */
let TipAppController = class TipAppController extends core_1.BaseController {
    /**
     * 小知識信息
     */
    async getInfo(param) {
        return this.ok(await this.tipAppService.getInfo(param));
    }
    /**
     * 今日小知識
     */
    async today() {
        return this.ok(await this.tipAppService.today());
    }
    /**
     * 今日小之日
     */
    async collection(params) {
        return this.ok(await this.tipAppService.collection(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", tips_1.TipAppService)
], TipAppController.prototype, "tipAppService", void 0);
__decorate([
    (0, decorator_1.Post)('/getInfo', { summary: '小知識信息' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipAppController.prototype, "getInfo", null);
__decorate([
    (0, decorator_1.Post)('/today', { summary: '今日小知識' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipAppController.prototype, "today", null);
__decorate([
    (0, decorator_1.Post)('/collection', { summary: '收藏登入賞' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipAppController.prototype, "collection", null);
TipAppController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        prefix: '/app/tip',
        api: ['page'],
        entity: tips_2.AwardTipsEntity,
        service: tips_1.TipAppService,
    })
], TipAppController);
exports.TipAppController = TipAppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvY29udHJvbGxlci9hcHAvdGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0U7QUFDbEUsNENBQW1FO0FBQ25FLGlEQUF1RDtBQUN2RCw0Q0FBb0Q7QUFFcEQ7O0dBRUc7QUFRSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLHFCQUFjO0lBSWxEOztPQUVHO0lBRUgsS0FBSyxDQUFDLE9BQU8sQ0FBUyxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLEtBQUs7UUFDVCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLFVBQVUsQ0FBUyxNQUFNO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUF6QkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ00sb0JBQWE7dURBQUM7QUFNN0I7SUFEQyxJQUFBLGdCQUFJLEVBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7K0NBRXBCO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7OzZDQUdwQztBQU1EO0lBREMsSUFBQSxnQkFBSSxFQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN4QixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O2tEQUV2QjtBQTFCVSxnQkFBZ0I7SUFQNUIsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsTUFBTSxFQUFFLFVBQVU7UUFDbEIsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2IsTUFBTSxFQUFFLHNCQUFlO1FBQ3ZCLE9BQU8sRUFBRSxvQkFBYTtLQUN2QixDQUFDO0dBQ1csZ0JBQWdCLENBMkI1QjtBQTNCWSw0Q0FBZ0IifQ==