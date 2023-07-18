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
exports.NewsCommentApiController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const comment_1 = require("../../entity/comment");
const comment_2 = require("../../service/app/comment");
/**
 * 描述
 */
let NewsCommentApiController = class NewsCommentApiController extends core_1.BaseController {
    /**
     * 分頁
     * @param param
     */
    async getPage(query) {
        return this.ok(await this.newsCommentService.page(query));
    }
    /**
     * 新增
     * @param param
     */
    async create(query) {
        return this.ok(await this.newsCommentService.create(query));
    }
    /**
     * 點讚
     * @param param
     */
    async like(params) {
        return this.ok(await this.newsCommentService.like(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", comment_2.NewsCommentApiService)
], NewsCommentApiController.prototype, "newsCommentService", void 0);
__decorate([
    (0, decorator_1.Post)('/page', { summary: '取得留言列表' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsCommentApiController.prototype, "getPage", null);
__decorate([
    (0, decorator_1.Post)('/create', { summary: '創建留言' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsCommentApiController.prototype, "create", null);
__decorate([
    (0, decorator_1.Post)('/like', { summary: '留言點讚' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsCommentApiController.prototype, "like", null);
NewsCommentApiController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        prefix: '/app/news/article/comment',
        api: ['delete', 'update'],
        entity: comment_1.NewsArticleCommentEntity,
        service: comment_2.NewsCommentApiService,
    })
], NewsCommentApiController);
exports.NewsCommentApiController = NewsCommentApiController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9jb250cm9sbGVyL2FwcC9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsa0RBQWdFO0FBQ2hFLHVEQUFrRTtBQUVsRTs7R0FFRztBQVFILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEscUJBQWM7SUFJMUQ7OztPQUdHO0lBRUgsS0FBSyxDQUFDLE9BQU8sQ0FBUyxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBRUgsS0FBSyxDQUFDLE1BQU0sQ0FBUyxLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBRUgsS0FBSyxDQUFDLElBQUksQ0FBUyxNQUFNO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0YsQ0FBQTtBQTVCQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVywrQkFBcUI7b0VBQUM7QUFPMUM7SUFEQyxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3RCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7dURBRXBCO0FBT0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7c0RBRW5CO0FBT0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7b0RBRWpCO0FBN0JVLHdCQUF3QjtJQVBwQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxNQUFNLEVBQUUsMkJBQTJCO1FBQ25DLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDekIsTUFBTSxFQUFFLGtDQUF3QjtRQUNoQyxPQUFPLEVBQUUsK0JBQXFCO0tBQy9CLENBQUM7R0FDVyx3QkFBd0IsQ0E4QnBDO0FBOUJZLDREQUF3QiJ9