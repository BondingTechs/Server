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
exports.AdminNewsArticleService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const article_1 = require("../../entity/article");
const articleCategory_1 = require("../../entity/articleCategory");
const articleLike_1 = require("../../entity/articleLike");
const articleView_1 = require("../../entity/articleView");
const comment_1 = require("../../entity/comment");
const commentLike_1 = require("../../entity/commentLike");
/**
 * 描述
 */
let AdminNewsArticleService = class AdminNewsArticleService extends core_1.BaseService {
    async page(query) {
        const { keyWord, type, status, categoryId } = query;
        const result = await this.sqlRenderPage(`
      SELECT
        a.id,
        a.authorName,
        a.thumbnail,
        a.title,
        a.type,
        a.isHot,
        a.isTop,
        a.commentOpen,
        a.status,
        a.updateTime,
        a.publishTime,
        a.createTime,

        GROUP_CONCAT(DISTINCT f.categoryId) as categories,
        COUNT(DISTINCT b.id) as viewCount,
        COUNT(DISTINCT c.id) as likeCount,
        COUNT(DISTINCT d.id) as commentCount,
        COUNT(DISTINCT e.id) as collectionCount
      FROM
        news_article a
        LEFT JOIN news_article_view b ON a.id = b.articleId
        LEFT JOIN news_article_like c ON a.id = c.articleId
        LEFT JOIN news_comment d ON a.id = d.articleId
        LEFT JOIN news_article_collection e ON a.id = e.articleId
        LEFT JOIN news_article_category f ON a.id = f.articleId
      WHERE 1=1
        ${this.setSql(categoryId, 'AND f.categoryId = (?)', categoryId)}
        ${this.setSql(status, 'AND a.status = (?)', status)}
        ${this.setSql(type, 'AND a.type = (?)', type)}
        ${this.setSql(keyWord, 'and (a.title LIKE ? or a.authorName LIKE ?)', [
            `%${keyWord}%`,
            `%${keyWord}%`,
        ])}
        GROUP BY a.id
    `, query);
        return result;
    }
    /**
     * 刪除文章
     * @param articleId
     */
    async delete(ids) {
        let idArr;
        if (ids instanceof Array) {
            idArr = ids;
        }
        else {
            idArr = ids.split(',');
        }
        for (const id of idArr) {
            await this.newsArticleEntity.delete({ id });
            await this.newsArticleCategoryEntity.delete({ articleId: id });
            await this.newsArticleViewEntity.delete({ articleId: id });
            await this.newsArticleLikeEntity.delete({ articleId: id });
            await this.newsArticleCommentEntity.delete({ articleId: id });
            await this.newsArticleCommentLikeEntity.delete({ articleId: id });
        }
    }
    async add(params) {
        const { categories } = params;
        if (!categories)
            throw new core_1.CoolCommException('請選擇分類');
        if (params.status === 9) {
            params.publishTime = new Date();
        }
        const article = await this.newsArticleEntity.save({
            ...params,
            createBy: this.ctx.admin.userId,
            updateBy: this.ctx.admin.userId,
        });
        await this.updateCategories({ ...params, id: article.id });
        return article;
    }
    async update(params) {
        const tip = await this.newsArticleEntity.save({
            ...params,
            updateBy: this.ctx.admin.userId,
        });
        await this.updateCategories(params);
        return tip;
    }
    async info(id) {
        const info = await this.newsArticleEntity.findOne({ id });
        if (!info.authorIntro)
            info.authorIntro = '';
        const categories = await this.nativeQuery(`
      SELECT
        categoryId
      FROM news_article_category
      WHERE articleId = ${id}
    `);
        return {
            ...info,
            categories: categories === null || categories === void 0 ? void 0 : categories.map(e => parseInt(e.categoryId)),
        };
    }
    /**
     * 更新分類关系
     * @param user
     */
    async updateCategories(article) {
        await this.newsArticleCategoryEntity.delete({ articleId: article.id });
        if (article.categories) {
            for (const category of article.categories) {
                await this.newsArticleCategoryEntity.save({
                    articleId: article.id,
                    categoryId: category,
                });
            }
        }
    }
    /**
     * 閱讀紀錄
     * @param articleId
     */
    async viewLogs(query) {
        const { articleId } = query;
        if (!articleId)
            throw new core_1.CoolCommException('請輸入articleId');
        return await this.sqlRenderPage(`
      SELECT
        a.id,
        a.createTime,
        concat(b.firstName, ' ', b.lastName) As name
      FROM
        news_article_view a
        LEFT JOIN base_sys_user b ON a.userId = b.id
      WHERE 1=1
      ${this.setSql(articleId, 'and a.articleId = ?', [articleId])}
      GROUP BY a.id
    `, query);
    }
    /**
     * 點贊紀錄
     * @param articleId
     */
    async likeLogs(query) {
        const { articleId } = query;
        return await this.sqlRenderPage(`
      SELECT
        a.id,
        a.createTime,
        concat(b.firstName, ' ', b.lastName) As name
      FROM
        news_article_like a
        LEFT JOIN base_sys_user b ON a.userId = b.id
      WHERE 1=1
      ${this.setSql(articleId, 'and a.articleId in (?)', [articleId])}
      GROUP BY a.id
    `, query);
    }
    /**
     * 收藏紀錄
     * @param articleId
     */
    async collectionLogs(query) {
        const { articleId } = query;
        return await this.sqlRenderPage(`
      SELECT
        a.id,
        a.createTime,
        concat(b.firstName, ' ', b.lastName) As name
      FROM
        news_article_collection a
        LEFT JOIN base_sys_user b ON a.userId = b.id
      WHERE 1=1
      ${this.setSql(articleId, 'and a.articleId in (?)', [articleId])}
      GROUP BY a.id
    `, query);
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(article_1.NewsArticleEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleCategory_1.NewsArticleCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleCategoryEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleView_1.NewsArticleViewEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleViewEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleLike_1.NewsArticleLikeEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleLikeEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(comment_1.NewsArticleCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleCommentEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(commentLike_1.NewsArticleCommentLikeEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminNewsArticleService.prototype, "newsArticleCommentLikeEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AdminNewsArticleService.prototype, "ctx", void 0);
AdminNewsArticleService = __decorate([
    (0, decorator_1.Provide)()
], AdminNewsArticleService);
exports.AdminNewsArticleService = AdminNewsArticleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9zZXJ2aWNlL2FkbWluL2FydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGtEQUF5RDtBQUN6RCxrRUFBeUU7QUFDekUsMERBQWlFO0FBQ2pFLDBEQUFpRTtBQUNqRSxrREFBZ0U7QUFDaEUsMERBQXdFO0FBRXhFOztHQUVHO0FBRUgsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxrQkFBVztJQXNCdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2QsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNwRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNEJJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLHdCQUF3QixFQUFFLFVBQVUsQ0FBQztVQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLENBQUM7VUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO1VBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLDZDQUE2QyxFQUFFO1lBQ3RFLElBQUksT0FBTyxHQUFHO1lBQ2QsSUFBSSxPQUFPLEdBQUc7U0FDZixDQUFDOztLQUVILEVBQ0MsS0FBSyxDQUNOLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO1FBQ2QsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDeEIsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNiO2FBQU07WUFDTCxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNELEtBQUssTUFBTSxFQUFFLElBQUksS0FBSyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUMsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0QsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUQsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNO1FBQ2QsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU0sSUFBSSx3QkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNqQztRQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNoRCxHQUFHLE1BQU07WUFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUNoQyxDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUM1QyxHQUFHLE1BQU07WUFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUNoQyxDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRTdDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FDdkM7Ozs7MEJBSW9CLEVBQUU7S0FDdkIsQ0FDQSxDQUFDO1FBQ0YsT0FBTztZQUNMLEdBQUcsSUFBSTtZQUNQLFVBQVUsRUFBRSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzVCLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2RSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN6QyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtvQkFDckIsVUFBVSxFQUFFLFFBQVE7aUJBQ3JCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLO1FBQ2xCLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVM7WUFBRSxNQUFNLElBQUksd0JBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQzdCOzs7Ozs7Ozs7UUFTRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztLQUU3RCxFQUNDLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSztRQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUM3Qjs7Ozs7Ozs7O1FBU0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7S0FFaEUsRUFDQyxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUs7UUFDeEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUM1QixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FDN0I7Ozs7Ozs7OztRQVNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7O0tBRWhFLEVBQ0MsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTNOQztJQURDLElBQUEsdUJBQWlCLEVBQUMsMkJBQWlCLENBQUM7OEJBQ2xCLG9CQUFVO2tFQUFvQjtBQUdqRDtJQURDLElBQUEsdUJBQWlCLEVBQUMsMkNBQXlCLENBQUM7OEJBQ2xCLG9CQUFVOzBFQUE0QjtBQUdqRTtJQURDLElBQUEsdUJBQWlCLEVBQUMsbUNBQXFCLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF3QjtBQUd6RDtJQURDLElBQUEsdUJBQWlCLEVBQUMsbUNBQXFCLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF3QjtBQUd6RDtJQURDLElBQUEsdUJBQWlCLEVBQUMsa0NBQXdCLENBQUM7OEJBQ2xCLG9CQUFVO3lFQUEyQjtBQUcvRDtJQURDLElBQUEsdUJBQWlCLEVBQUMsMENBQTRCLENBQUM7OEJBQ2xCLG9CQUFVOzZFQUErQjtBQUd2RTtJQURDLElBQUEsa0JBQU0sR0FBRTs7b0RBQ0w7QUFwQk8sdUJBQXVCO0lBRG5DLElBQUEsbUJBQU8sR0FBRTtHQUNHLHVCQUF1QixDQTZObkM7QUE3TlksMERBQXVCIn0=