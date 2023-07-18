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
exports.AdminNewsArticleController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const article_1 = require("../../entity/article");
const articleCategory_1 = require("../../entity/articleCategory");
const category_1 = require("../../../industry/entity/category");
const comment_1 = require("../../entity/comment");
const articleView_1 = require("../../entity/articleView");
const articleLike_1 = require("../../entity/articleLike");
const articleCollection_1 = require("../../entity/articleCollection");
const article_2 = require("../../service/admin/article");
/**
 * 描述
 */
let AdminNewsArticleController = class AdminNewsArticleController extends core_1.BaseController {
    /**
     * 瀏覽閱讀紀錄
     */
    async views(query) {
        return this.ok(await this.adminNewsArticleService.viewLogs(query));
    }
    /**
     * 瀏覽閱讀紀錄
     */
    async likes(query) {
        return this.ok(await this.adminNewsArticleService.likeLogs(query));
    }
    /**
     * 瀏覽閱讀紀錄
     */
    async collections(query) {
        return this.ok(await this.adminNewsArticleService.collectionLogs(query));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", article_2.AdminNewsArticleService)
], AdminNewsArticleController.prototype, "adminNewsArticleService", void 0);
__decorate([
    (0, decorator_1.Post)('/views', { summary: '閱讀紀錄' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminNewsArticleController.prototype, "views", null);
__decorate([
    (0, decorator_1.Post)('/likes', { summary: '閱讀紀錄' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminNewsArticleController.prototype, "likes", null);
__decorate([
    (0, decorator_1.Post)('/collections', { summary: '閱讀紀錄' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminNewsArticleController.prototype, "collections", null);
AdminNewsArticleController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: article_1.NewsArticleEntity,
        service: article_2.AdminNewsArticleService,
        pageQueryOp: {
            select: [
                'a.id',
                'a.authorName',
                'a.thumbnail',
                'a.title',
                'a.type',
                'a.isHot',
                'a.isTop',
                'a.commentOpen',
                'a.status',
                'a.updateTime',
                'a.publishTime',
                'a.createTime',
                'GROUP_CONCAT(DISTINCT c.id) as categories',
                'count(d.id) as commentCount',
                'count(e.id) as viewCount',
                'count(f.id) as likeCount',
                'count(g.id) as collectionCount',
            ],
            keyWordLikeFields: ['title', 'authorName'],
            fieldEq: [
                { column: 'a.type', requestParam: 'type' },
                { column: 'a.status', requestParam: 'status' },
                { column: 'b.categoryId', requestParam: 'categoryId' },
                { column: 'c.parentId', requestParam: 'categoryParentId' },
            ],
            join: [
                {
                    entity: articleCategory_1.NewsArticleCategoryEntity,
                    alias: 'b',
                    condition: 'a.id = b.articleId',
                    type: 'leftJoin',
                },
                {
                    entity: category_1.IndustryCategoryEntity,
                    alias: 'c',
                    condition: 'b.categoryId = c.id',
                    type: 'leftJoin',
                },
                {
                    entity: comment_1.NewsArticleCommentEntity,
                    alias: 'd',
                    condition: 'a.id = d.articleId',
                    type: 'leftJoin',
                },
                {
                    entity: articleView_1.NewsArticleViewEntity,
                    alias: 'e',
                    condition: 'a.id = e.articleId',
                    type: 'leftJoin',
                },
                {
                    entity: articleLike_1.NewsArticleLikeEntity,
                    alias: 'f',
                    condition: 'a.id = f.articleId',
                    type: 'leftJoin',
                },
                {
                    entity: articleCollection_1.NewsArticleCollectionEntity,
                    alias: 'g',
                    condition: 'a.id = g.articleId',
                    type: 'leftJoin',
                },
            ],
            extend: async (find) => {
                find.groupBy('a.id');
            },
        },
    })
], AdminNewsArticleController);
exports.AdminNewsArticleController = AdminNewsArticleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9jb250cm9sbGVyL2FkbWluL2FydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUNuRSxrREFBeUQ7QUFDekQsa0VBQXlFO0FBRXpFLGdFQUEyRTtBQUMzRSxrREFBZ0U7QUFDaEUsMERBQWlFO0FBQ2pFLDBEQUFpRTtBQUNqRSxzRUFBNkU7QUFDN0UseURBQXNFO0FBRXRFOztHQUVHO0FBNEVILElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTJCLFNBQVEscUJBQWM7SUFJNUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsS0FBSyxDQUFTLEtBQUs7UUFDdkIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxLQUFLLENBQVMsS0FBSztRQUN2QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBUyxLQUFLO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0NBQ0YsQ0FBQTtBQXpCQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDZ0IsaUNBQXVCOzJFQUFDO0FBTWpEO0lBREMsSUFBQSxnQkFBSSxFQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8s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