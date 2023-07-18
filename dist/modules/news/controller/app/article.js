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
exports.NewsArticleController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const article_1 = require("../../service/app/article");
const validate_1 = require("@midwayjs/validate");
/**
 * 描述
 */
let NewsArticleController = class NewsArticleController extends core_1.BaseController {
    /**
     * 分頁
     * @query query
     */
    async getPage(query) {
        return this.ok(await this.appNewsArticleService.page(query));
    }
    /**
     * 列表
     */
    async getList(query) {
        return this.ok(await this.appNewsArticleService.list(query));
    }
    /**
     * 分類
     * @param param
     */
    async getArticleCategories() {
        return this.ok(await this.appNewsArticleService.getCategories());
    }
    /**
     * 分類
     * @param param
     */
    async getArticle(param) {
        return this.ok(await this.appNewsArticleService.getArticle(param));
    }
    /**
     * 點贊
     * @param param
     */
    async articleLike(param) {
        return this.ok(await this.appNewsArticleService.articleLike(param));
    }
    /**
     * 新增
     * @param article
     */
    async articleNew(article) {
        return this.ok(await this.appNewsArticleService.add(article));
    }
    /**
     * 刪除
     * @param params
     */
    async articleDelete(params) {
        return this.ok(await this.appNewsArticleService.delete(params));
    }
    /**
     * 收藏
     * @param params
     */
    async articleCollection(params) {
        return this.ok(await this.appNewsArticleService.collection(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], NewsArticleController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", article_1.AppNewsArticleService)
], NewsArticleController.prototype, "appNewsArticleService", void 0);
__decorate([
    (0, decorator_1.Post)('/page', { summary: '分頁' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "getPage", null);
__decorate([
    (0, decorator_1.Post)('/list', { summary: '列表' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "getList", null);
__decorate([
    (0, decorator_1.Post)('/categories', { summary: '取得留言' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "getArticleCategories", null);
__decorate([
    (0, decorator_1.Post)('/info', { summary: '文章內容' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "getArticle", null);
__decorate([
    (0, decorator_1.Post)('/like', { summary: '點贊' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "articleLike", null);
__decorate([
    (0, decorator_1.Post)('/create', { summary: '新增' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "articleNew", null);
__decorate([
    (0, decorator_1.Post)('/delete', { summary: '刪除' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "articleDelete", null);
__decorate([
    (0, decorator_1.Post)('/collection', { summary: '收藏' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsArticleController.prototype, "articleCollection", null);
NewsArticleController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)('/app/news/article')
], NewsArticleController);
exports.NewsArticleController = NewsArticleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9jb250cm9sbGVyL2FwcC9hcnRpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsdURBQWtFO0FBRWxFLGlEQUE4QztBQUU5Qzs7R0FFRztBQUdILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEscUJBQWM7SUFPdkQ7OztPQUdHO0lBRUgsS0FBSyxDQUFDLE9BQU8sQ0FBUyxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsT0FBTyxDQUFTLEtBQUs7UUFDekIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7SUFFSCxLQUFLLENBQUMsb0JBQW9CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFFSCxLQUFLLENBQUMsVUFBVSxDQUFTLEtBQUs7UUFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFFSCxLQUFLLENBQUMsV0FBVyxDQUFTLEtBQUs7UUFDN0IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7SUFHSCxLQUFLLENBQUMsVUFBVSxDQUFTLE9BQU87UUFDOUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFHSCxLQUFLLENBQUMsYUFBYSxDQUFTLE1BQU07UUFDaEMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7O09BR0c7SUFFSCxLQUFLLENBQUMsaUJBQWlCLENBQVMsTUFBTTtRQUNwQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUNGLENBQUE7QUE3RUM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7O2tEQUNJO0FBR2I7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ2MsK0JBQXFCO29FQUFDO0FBTzdDO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O29EQUVwQjtBQU1EO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O29EQUVwQjtBQU9EO0lBREMsSUFBQSxnQkFBSSxFQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7OztpRUFHeEM7QUFPRDtJQURDLElBQUEsZ0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDakIsV0FBQSxJQUFBLGdCQUFJLEdBQUUsQ0FBQTs7Ozt1REFFdkI7QUFPRDtJQURDLElBQUEsZ0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDZCxXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O3dEQUV4QjtBQVFEO0lBRkMsSUFBQSxnQkFBSSxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxJQUFBLG1CQUFRLEdBQUU7SUFDTyxXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O3VEQUV2QjtBQVFEO0lBRkMsSUFBQSxnQkFBSSxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxJQUFBLG1CQUFRLEdBQUU7SUFDVSxXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7OzBEQUUxQjtBQU9EO0lBREMsSUFBQSxnQkFBSSxFQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNkLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7OERBRTlCO0FBOUVVLHFCQUFxQjtJQUZqQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUMsbUJBQW1CLENBQUM7R0FDdkIscUJBQXFCLENBK0VqQztBQS9FWSxzREFBcUIifQ==