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
exports.AppNewsArticleService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const article_1 = require("../../entity/article");
const _ = require("lodash");
const comment_1 = require("../../entity/comment");
const articleLike_1 = require("../../entity/articleLike");
const articleView_1 = require("../../entity/articleView");
const cache_1 = require("@midwayjs/cache");
const user_1 = require("../../../base/entity/sys/user");
const articleCategory_1 = require("../../entity/articleCategory");
const articleCollection_1 = require("../../entity/articleCollection");
/**
 * 描述
 */
let AppNewsArticleService = class AppNewsArticleService extends core_1.BaseService {
    /**
     * 新增
     * @param article
     */
    async add(article) {
        return await this.newsArticleEntity.save(article);
        // const info = await this.newsArticleEntity
        //   .createQueryBuilder()
        //   .insert()
        //   .values(article)
        //   .execute();
        // return info;
    }
    /**
     * 取得內容
     * @param query
     */
    async getArticle(query) {
        const { slug, client } = query;
        if (_.isEmpty(slug))
            throw new core_1.CoolCommException('請輸入代稱');
        const user = this.ctx.user;
        const userEmpty = _.isEmpty(user);
        const sql = `
      SELECT
        a.id,
        a.title,
        a.slug,
        a.thumbnail,
        a.commentOpen,
        a.publishTime,
        a.metaTitle,
        a.metaDescription,
        a.authorAvatar,
        a.authorName,
        a.authorIntro,
        a.type,
        IF(${userEmpty}=true, contentPreview, a.content) AS content,
        IF(${userEmpty}=true, TRUE, FALSE) AS isPreview,

        SUM(b.count) AS views,
        COUNT(DISTINCT c.id) AS likes,
        COUNT(DISTINCT d.id) AS collections

      FROM
        news_article a
        LEFT JOIN news_article_view b ON a.id = b.articleId
        LEFT JOIN news_article_like c ON a.id = c.articleId
        LEFT JOIN news_article_collection d ON a.id = d.articleId

      WHERE a.status = '9' AND a.slug = '${slug}'
      GROUP BY a.id
      LIMIT 1
    `;
        const [info] = await this.nativeQuery(sql);
        info.isPreview = Boolean(info.isPreview);
        // 判斷文章是否存在
        if (_.isEmpty(info))
            throw new core_1.CoolValidateException('文章不存在');
        const categories = await this.nativeQuery(`
      SELECT
        b.name,
        b.slug,
        b.parentId
      FROM
        news_article_category a
        LEFT JOIN industry_category b ON a.categoryId = b.id
      WHERE a.articleId = ${info.id}
      GROUP BY a.id
    `);
        const other = {
            isLike: false,
            isCollection: false,
        };
        if (!_.isEmpty(user)) {
            other.isLike = !_.isEmpty(await this.newsArticleLikeEntity.findOne({
                articleId: info.id,
                userId: user.userId,
            }));
            other.isCollection = !_.isEmpty(await this.newsArticleCollectionEntity.findOne({
                articleId: info.id,
                userId: user.userId,
            }));
        }
        if (client) {
            this.articleView({ id: info.id });
        }
        return { ...info, categories, ...other };
    }
    /**
     * 分页查询
     * @param query
     */
    async page(query) {
        const { keyWord, order = 'publishTime', sort = 'desc', isHot, isTop, category, type, } = query;
        const sql = `
        SELECT
            a.id,
            a.slug,
            a.title,
            a.thumbnail,
            a.commentOpen,
            a.publishTime,
            a.authorName as author,
            (CASE WHEN LENGTH(a.excerpt) > 0 THEN a.excerpt ELSE LEFT(REGEXP_REPLACE(contentPreview, '<[^>]+>', ''), 80) END) AS excerpt,

            GROUP_CONCAT(DISTINCT c.name) As categories,
            COUNT(DISTINCT(e.id)) as views,
            COUNT(DISTINCT(f.id)) as likes,
            COUNT(DISTINCT(g.id)) as collections
        FROM
            news_article a
            LEFT JOIN news_article_category b ON a.id = b.articleId
            LEFT JOIN industry_category c ON b.categoryId = c.id
            LEFT JOIN news_article_view e ON a.id = e.articleId
            LEFT JOIN news_article_like f ON a.id = f.articleId
            LEFT JOIN news_article_collection g ON a.id = g.articleId
        WHERE a.status = '9'
            ${this.setSql(category, 'AND c.slug = (?)', category)}
            ${this.setSql(type, 'AND a.type = (?)', type)}
            ${this.setSql(isHot, 'AND a.isHot = ?', isHot)}
            ${this.setSql(isTop, 'AND a.isTop = ?', isTop)}
            ${this.setSql(keyWord, 'AND (a.title LIKE ?)', [`%${keyWord}%`])}
        GROUP BY a.id
        `;
        const result = await this.sqlRenderPage(sql, _.assign(query, {
            order,
            sort,
        }));
        return result;
    }
    /**
     * 列表查询
     * @param query
     */
    async list(query) {
        const { keyWord, order = 'publishTime', sort = 'desc', isHot, isTop, size, category, type, } = query;
        const result = await this.nativeQuery(`
        SELECT
          a.id,
          a.title,
          a.excerpt,
          a.thumbnail,
          a.slug,
          a.type,
          a.publishTime,
          (CASE WHEN LENGTH(a.excerpt) > 0 THEN a.excerpt ELSE LEFT(REGEXP_REPLACE(a.content, '<[^>]+>', ''), 80) END) AS excerpt,

          a.authorName,
          GROUP_CONCAT(DISTINCT c.name) AS categories,
          COUNT(DISTINCT(e.id)) as views,
          COUNT(DISTINCT(f.id)) as likes,
          COUNT(DISTINCT(g.id)) as collections
        FROM
          news_article a
          LEFT JOIN news_article_category b ON a.id = b.articleId
          LEFT JOIN industry_category c ON b.categoryId = c.id
          LEFT JOIN news_article_view e ON a.id = e.articleId
          LEFT JOIN news_article_like f ON a.id = f.articleId
          LEFT JOIN news_article_collection g ON a.id = g.articleId
        where 1=1
          ${this.setSql(category, 'and c.slug = (?)', category)}
          ${this.setSql(isTop, 'and a.isTop = (?)', isTop)}
          ${this.setSql(type, 'and a.type = (?)', type)}
          ${this.setSql(isHot, 'and a.isHot = (?)', isHot)}
          ${this.setSql(keyWord, 'and (a.title LIKE ?)', [`%${keyWord}%`])}
        GROUP BY a.id
        ${order ? `ORDER BY ${order} ${sort}` : ''}
        ${this.setSql(size, 'LIMIT ?', size)}
      `);
        return result;
    }
    /**
     * 取得分類
     * @param query
     */
    async getCategories() {
        const result = await this.nativeQuery(`
      SELECT
        a.id,
        a.name,
        a.slug,
        a.icon,
        a.parentId,
        IF(b.id, true, false) as news
      FROM
        industry_category a
        LEFT JOIN news_article_category b ON a.id = b.categoryId
      WHERE 1=1
      GROUP BY a.id
    `);
        return result;
    }
    /**
     * 關聯評論
     * @param ids
     */
    async getCommentByArticle(article) {
        return await this.newsArticleCommentEntity.find({ articleId: article.id });
    }
    /**
     * 按讚
     * @param param
     */
    async articleLike(param) {
        const user = this.ctx.user;
        if (_.isEmpty(user))
            throw new core_1.CoolCommException('請登入帳號');
        const { id } = param;
        if (!id)
            throw new core_1.CoolValidateException('請輸入完整的參數');
        const likeExist = await this.newsArticleLikeEntity.findOne({
            articleId: id,
            userId: this.ctx.user.userId,
        });
        const action = _.isEmpty(likeExist) ? 'save' : 'delete';
        await this.newsArticleLikeEntity[action]({
            articleId: id,
            userId: user.userId,
        });
        return { id, status: _.isEmpty(likeExist) };
    }
    /**
     * 觀看
     * @param param
     */
    async articleView({ id }) {
        const user = this.ctx.user;
        if (_.isEmpty(user))
            return;
        const viewExist = await this.newsArticleViewEntity.findOne({
            articleId: id,
            userId: (user === null || user === void 0 ? void 0 : user.userId) || 0,
        });
        if (_.isEmpty(viewExist)) {
            await this.newsArticleViewEntity.save({
                articleId: id,
                userId: (user === null || user === void 0 ? void 0 : user.userId) || 0,
                count: 1,
            });
        }
        else {
            if (_.isEmpty(user)) {
                await this.newsArticleViewEntity.save({
                    id: viewExist.id,
                    articleId: id,
                    userId: 0,
                    count: +viewExist.count + 1,
                });
            }
        }
    }
    async collection({ id }) {
        const user = this.ctx.user;
        if (_.isEmpty(user))
            throw new core_1.CoolCommException('請登入帳號');
        if (!id)
            throw new core_1.CoolCommException('請輸入ID');
        const articleExist = await this.newsArticleEntity.findOne({ id });
        if (_.isEmpty(articleExist))
            throw new core_1.CoolCommException('找不到該文章');
        const collectionExist = await this.newsArticleCollectionEntity.findOne({
            articleId: id,
            userId: user.userId,
        });
        const action = _.isEmpty(collectionExist) ? 'save' : 'delete';
        await this.newsArticleCollectionEntity[action]({
            articleId: id,
            userId: user.userId,
        });
        return { id, status: _.isEmpty(collectionExist) };
    }
    async viewHistory(query) {
        const userId = this.ctx.user.userId;
        const { keyWord, order = 'publishTime', sort = 'desc', category } = query;
        const sql = `
        SELECT
            b.id,
            b.slug,
            b.title,
            b.thumbnail,
            b.status,
            b.commentOpen,
            b.publishTime,

            b.authorName,
            GROUP_CONCAT(DISTINCT e.name) As categories,
            COUNT(DISTINCT(f.id)) as likes,
            COUNT(DISTINCT(g.id)) as collections,
            COUNT(DISTINCT(h.id)) as views
        FROM
            news_article_view a
            LEFT JOIN news_article b ON a.articleId = b.id
            LEFT JOIN news_article_category c ON b.id = c.articleId
            LEFT JOIN industry_category e ON c.categoryId = e.id
            LEFT JOIN news_article_like f ON b.id = f.articleId
            LEFT JOIN news_article_collection g ON b.id = g.articleId
            LEFT JOIN news_article_view h ON b.id = h.articleId

        WHERE b.status = '9'
            AND a.userId = ${userId}
            ${this.setSql(category, 'AND e.slug = (?)', category)}
            ${this.setSql(keyWord, 'AND (b.title LIKE ?)', [`%${keyWord}%`])}
        GROUP BY a.id
        `;
        const result = await this.sqlRenderPage(sql, _.assign(query, {
            order,
            sort,
        }));
        return result;
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(article_1.NewsArticleEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleCategory_1.NewsArticleCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleCategoryEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(comment_1.NewsArticleCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleCommentEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleLike_1.NewsArticleLikeEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleLikeEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleView_1.NewsArticleViewEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleViewEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleCollection_1.NewsArticleCollectionEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppNewsArticleService.prototype, "newsArticleCollectionEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AppNewsArticleService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], AppNewsArticleService.prototype, "cacheManager", void 0);
AppNewsArticleService = __decorate([
    (0, decorator_1.Provide)()
], AppNewsArticleService);
exports.AppNewsArticleService = AppNewsArticleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9zZXJ2aWNlL2FwcC9hcnRpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FJMkI7QUFDM0IsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxrREFBeUQ7QUFFekQsNEJBQTRCO0FBQzVCLGtEQUFnRTtBQUNoRSwwREFBaUU7QUFDakUsMERBQWlFO0FBQ2pFLDJDQUErQztBQUMvQyx3REFBa0U7QUFDbEUsa0VBQXlFO0FBQ3pFLHNFQUE2RTtBQUU3RTs7R0FFRztBQUVILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsa0JBQVc7SUE0QnBEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBWTtRQUNwQixPQUFPLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCw0Q0FBNEM7UUFDNUMsMEJBQTBCO1FBQzFCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSztRQUNwQixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxJQUFJLHdCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzNCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsTUFBTSxHQUFHLEdBQUc7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