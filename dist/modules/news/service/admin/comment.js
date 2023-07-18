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
exports.NewsArticleCommentAdminService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const comment_1 = require("../../entity/comment");
/**
 * 描述
 */
let NewsArticleCommentAdminService = class NewsArticleCommentAdminService extends core_1.BaseService {
    async add(param) {
        const userId = this.ctx.admin.userId;
        return await this.newsArticleCommentEntity.save({
            ...param,
            createBy: userId,
            updateBy: userId,
        });
    }
    async update(param) {
        const { isDelete } = param;
        const userId = this.ctx.admin.userId;
        if (isDelete) {
            param.deleteTime = new Date();
            param.deleteBy = this.ctx.admin.userId;
        }
        else {
            param.deleteTime = null;
            param.deleteBy = null;
        }
        return await this.newsArticleCommentEntity.save({
            ...param,
            updateBy: userId,
        });
    }
    async page(query) {
        const { articleId } = query;
        return this.sqlRenderPage(`
      SELECT
        a.id,
        a.content,
        a.createTime,
        a.updateTime,
        a.deleteTime,
        a.parentId,

        COUNT(b.id) as likeCount,
        CONCAT(c.firstName, c.lastName) as author

      FROM
        news_comment a
        LEFT JOIN news_comment_like b ON a.id = b.commentId
        LEFT JOIN base_sys_user c ON a.authorId = c.id
      WHERE 1=1
      ${this.setSql(articleId, 'and a.articleId = ?', [articleId])}
      GROUP BY a.id
    `, query);
    }
    async list(query) {
        const { articleId, parent } = query;
        return this.nativeQuery(`
      SELECT
        a.id,
        a.content
      FROM
        news_comment a
      WHERE 1=1
        ${this.setSql(articleId, 'and a.articleId = ?', [articleId])}
        ${this.setSql(parent, 'and a.parentId IS NULL', [])}
    `);
    }
    async info(id) {
        return this.newsArticleCommentEntity.findOne({ id }, { withDeleted: true });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(comment_1.NewsArticleCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], NewsArticleCommentAdminService.prototype, "newsArticleCommentEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], NewsArticleCommentAdminService.prototype, "ctx", void 0);
NewsArticleCommentAdminService = __decorate([
    (0, decorator_1.Provide)()
], NewsArticleCommentAdminService);
exports.NewsArticleCommentAdminService = NewsArticleCommentAdminService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9zZXJ2aWNlL2FkbWluL2NvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUFnRDtBQUNoRCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGtEQUFnRTtBQUVoRTs7R0FFRztBQUVILElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQStCLFNBQVEsa0JBQVc7SUFPN0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3JDLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO1lBQzlDLEdBQUcsS0FBSztZQUNSLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDaEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxRQUFRLEVBQUU7WUFDWixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDeEM7YUFBTTtZQUNMLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7WUFDOUMsR0FBRyxLQUFLO1lBQ1IsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7S0FFN0QsRUFDQyxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDZCxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7VUFPbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxFQUFFLENBQUM7S0FDdEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGLENBQUE7QUExRUM7SUFEQyxJQUFBLHVCQUFpQixFQUFDLGtDQUF3QixDQUFDOzhCQUNsQixvQkFBVTtnRkFBMkI7QUFHL0Q7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OzJEQUNMO0FBTE8sOEJBQThCO0lBRDFDLElBQUEsbUJBQU8sR0FBRTtHQUNHLDhCQUE4QixDQTRFMUM7QUE1RVksd0VBQThCIn0=