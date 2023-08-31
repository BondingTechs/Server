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
exports.NewsCommentApiService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const article_1 = require("../../entity/article");
const comment_1 = require("../../entity/comment");
const commentLike_1 = require("../../entity/commentLike");
const _ = require("lodash");
const user_1 = require("../../../base/entity/sys/user");
/**
 * 描述
 */
let NewsCommentApiService = class NewsCommentApiService extends core_1.BaseService {
    /**
     * 分页查询
     * @param query
     */
    async page(query) {
        var _a;
        const { articleId, parentId } = query;
        if (articleId &&
            _.isEmpty(await this.newsArticleEntity.findOne({
                id: articleId,
            })))
            throw new core_1.CoolValidateException('找不到該文章');
        if (parentId &&
            _.isEmpty(await this.newsArticleCommentEntity.findOne({ id: parentId })))
            throw new core_1.CoolValidateException('找不到父評論');
        const userId = ((_a = this.ctx.user) === null || _a === void 0 ? void 0 : _a.userId) || 0;
        const sql = `
      SELECT
          a.id,
          a.content,
          a.parentId,
          a.createTime,

          COUNT(c.id) AS likes,
          COUNT(d.id) AS comments,
          IF(SUM(c.userId = ${userId}), TRUE, FALSE) AS isLike,
          b.username AS author
      FROM
          news_comment a
          LEFT JOIN base_sys_user b ON a.createBy = b.id
          LEFT JOIN news_comment_like c ON a.id = c.commentId
          LEFT JOIN news_comment d ON a.id = d.parentId
      WHERE 1 = 1
          ${this.setSql(articleId, 'and a.articleId = ?', [articleId])}
          AND a.deleteTime IS NULL
          ${this.setSql(parentId, 'and a.parentId = ?', [parentId])}
          ${this.setSql(!parentId, 'and a.parentId IS NULL', [])}
      GROUP BY a.id
      `;
        const data = await this.sqlRenderPage(sql, query);
        if (!parentId)
            await this.detectChild(data.list);
        data.list.forEach(item => (item.isLike = item.isLike === '1'));
        return data;
    }
    async detectChild(list) {
        const fn = async (param) => {
            return new Promise((resolve, reject) => {
                resolve(this.newsArticleCommentEntity.findOne({ parentId: param.id }));
            });
        };
        const promises = list.map(fn);
        return Promise.all(promises).then(result => {
            list.forEach((item, index) => {
                item.hasChild = !_.isEmpty(result[index]);
            });
        });
    }
    /**
     * 取得子項目
     * @param query
     */
    async child(param) {
        const { parentId } = param;
        if (!parentId || !_.isNumber(parentId)) {
            throw new core_1.CoolValidateException('請輸入正確的評論ID');
        }
        const result = await this.nativeQuery(`
        SELECT
            a.id,
            a.content,
            a.likeCount,
            a.parentId,
            a.createTime,

            b.username As author
        FROM
            news_comment a
            LEFT JOIN base_sys_user b ON a.userId = b.id
        WHERE 1 = 1
            and a.isDelete = 0
            and a.parentId = ${parentId}
        GROUP BY a.id
        `);
        return result;
    }
    /**
     * 新增
     * @param query
     */
    async create(query) {
        const { articleId, content, parentId } = query;
        if (_.isEmpty(content))
            throw new core_1.CoolValidateException('內容不能為空');
        if (_.isEmpty(this.ctx.user))
            throw new core_1.CoolCommException('用戶未登入');
        const userId = this.ctx.user.userId;
        const exist = await this.newsArticleEntity.findOne({ id: articleId });
        if (_.isEmpty(exist))
            throw new core_1.CoolValidateException('找不到該文章');
        const { id, createTime } = await this.newsArticleCommentEntity.save({
            articleId,
            content,
            parentId,
            authorId: userId,
            createBy: userId,
            updateBy: userId,
        });
        console.log('article comment create');
        const user = await this.baseSysUserEntity.findOne({
            id: this.ctx.user.userId,
        });
        return {
            id,
            content,
            parentId,
            createTime,
            isLike: false,
            likes: '0',
            comments: '0',
            hasChild: false,
            author: user.username,
        };
    }
    /**
     * 修改
     * @param query
     */
    async update(query) {
        const { id, content } = query;
        if (_.isEmpty(content))
            throw new core_1.CoolValidateException('內容不能為空');
        if (_.isEmpty(this.ctx.user))
            throw new core_1.CoolCommException('用戶未登入');
        const userId = this.ctx.user.userId;
        const exist = await this.newsArticleCommentEntity.findOne({
            id,
            createBy: userId,
        });
        if (_.isEmpty(exist))
            throw new core_1.CoolValidateException('找不到該評論');
        await this.newsArticleCommentEntity.save({
            id,
            content,
        });
    }
    /**
     * 刪除
     * @param ids
     */
    async delete(ids) {
        const deleteIds = [];
        if (!ids)
            throw new core_1.CoolValidateException('請輸入完整的參數');
        if (_.isEmpty(this.ctx.user))
            throw new core_1.CoolCommException('用戶未登入');
        const userId = this.ctx.user.userId;
        const list = await this.nativeQuery(`
      SELECT
          a.id
      FROM
          news_comment a
      WHERE
          a.userId=${userId}
          and a.id in (${ids})
      `);
        if (!_.isEmpty(list)) {
            list.forEach(item => {
                deleteIds.push(item.id);
            });
        }
        if (_.isEmpty(deleteIds))
            throw new core_1.CoolCommException('操作失敗');
        await this.newsArticleCommentEntity.delete(deleteIds);
    }
    async like(params) {
        const { commentId, articleId } = params;
        const user = this.ctx.user;
        if (_.isEmpty(user))
            throw new core_1.CoolCommException('用戶未登入');
        const commentExist = await this.newsArticleCommentEntity.findOne({
            id: commentId,
        });
        if (_.isEmpty(commentExist))
            throw new core_1.CoolCommException('留言不存在');
        const likeExist = await this.newsArticleCommentLikeEntity.findOne({
            commentId,
            userId: user.userId,
        });
        const action = _.isEmpty(likeExist) ? 'save' : 'delete';
        await this.newsArticleCommentLikeEntity[action]({
            articleId,
            commentId,
            userId: user.userId,
        });
        return _.isEmpty(likeExist);
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], NewsCommentApiService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(article_1.NewsArticleEntity),
    __metadata("design:type", typeorm_1.Repository)
], NewsCommentApiService.prototype, "newsArticleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(comment_1.NewsArticleCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], NewsCommentApiService.prototype, "newsArticleCommentEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(commentLike_1.NewsArticleCommentLikeEntity),
    __metadata("design:type", typeorm_1.Repository)
], NewsCommentApiService.prototype, "newsArticleCommentLikeEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], NewsCommentApiService.prototype, "ctx", void 0);
NewsCommentApiService = __decorate([
    (0, decorator_1.Provide)()
], NewsCommentApiService);
exports.NewsCommentApiService = NewsCommentApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9zZXJ2aWNlL2FwcC9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUkyQjtBQUMzQixtREFBc0Q7QUFDdEQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxrREFBeUQ7QUFDekQsa0RBQWdFO0FBQ2hFLDBEQUF3RTtBQUV4RSw0QkFBNEI7QUFDNUIsd0RBQWtFO0FBRWxFOztHQUVHO0FBRUgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxrQkFBVztJQWdCcEQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLOztRQUNkLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQ0UsU0FBUztZQUNULENBQUMsQ0FBQyxPQUFPLENBQ1AsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsU0FBUzthQUNkLENBQUMsQ0FDSDtZQUVELE1BQU0sSUFBSSw0QkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUNFLFFBQVE7WUFDUixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRXhFLE1BQU0sSUFBSSw0QkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxNQUFNLE1BQU0sR0FBRyxDQUFBLE1BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU0sS0FBSSxDQUFDLENBQUM7UUFFMUMsTUFBTSxHQUFHLEdBQUc7Ozs7Ozs7Ozs4QkFTYyxNQUFNOzs7Ozs7OztZQVF4QixJQUFJ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