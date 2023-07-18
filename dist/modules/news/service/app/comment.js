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
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const comment_1 = require("../../entity/comment");
const article_1 = require("../../entity/article");
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
        const sql = {
            article: `
        SELECT
            a.id,
            a.content,
            a.parentId,
            a.createTime,

            if(e.id, true, false) AS isLike,
            COUNT(DISTINCT c.id) AS likes,
            COUNT(DISTINCT d.id) AS comments,
            concat(b.firstName, ' ', b.lastName) As author,
            b.firstName
        FROM
            news_comment a
            LEFT JOIN base_sys_user b ON a.createBy = b.id
            LEFT JOIN news_comment_like c ON a.id = c.commentId
            LEFT JOIN news_comment d ON a.id = d.parentId
            LEFT JOIN base_sys_user e ON c.userId = ${userId}
        WHERE 1 = 1
            and a.deleteTime IS NULL
            and a.articleId = ${articleId}
            and a.parentId IS NULL
        GROUP BY a.id
        `,
            parent: `
        SELECT
            a.id,
            a.content,
            a.parentId,
            a.createTime,

            if(e.id, true, false) AS isLike,
            COUNT(DISTINCT c.id) AS likes,
            COUNT(DISTINCT d.id) AS comments,
            concat(b.firstName, ' ', b.lastName) As author
        FROM
            news_comment a
            LEFT JOIN base_sys_user b ON a.createBy = b.id
            LEFT JOIN news_comment_like c ON a.id = c.commentId
            LEFT JOIN news_comment d ON a.id = d.parentId
            LEFT JOIN base_sys_user e ON c.userId = ${userId}
        WHERE 1 = 1
            and a.deleteTime IS NULL
            and a.parentId = ${parentId}
        GROUP BY a.id
        `,
        };
        const type = parentId ? 'parent' : 'article';
        const data = await this.sqlRenderPage(sql[type], query);
        if (type === 'article')
            await this.detectChild(data.list);
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

            concat(b.firstName, b.lastName) As author
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
            author: user.firstName + user.lastName,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9zZXJ2aWNlL2FwcC9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FJMkI7QUFDM0IsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxrREFBZ0U7QUFDaEUsa0RBQXlEO0FBQ3pELDBEQUF3RTtBQUV4RSw0QkFBNEI7QUFDNUIsd0RBQWtFO0FBRWxFOztHQUVHO0FBRUgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxrQkFBVztJQWdCcEQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLOztRQUNkLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQ0UsU0FBUztZQUNULENBQUMsQ0FBQyxPQUFPLENBQ1AsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsU0FBUzthQUNkLENBQUMsQ0FDSDtZQUVELE1BQU0sSUFBSSw0QkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUNFLFFBQVE7WUFDUixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRXhFLE1BQU0sSUFBSSw0QkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxNQUFNLE1BQU0sR0FBRyxDQUFBLE1BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU0sS0FBSSxDQUFDLENBQUM7UUFFMUMsTUFBTSxHQUFHLEdBQUc7WUFDVixPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQWlC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