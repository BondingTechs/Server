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
exports.NewsArticleCommentLikeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let NewsArticleCommentLikeEntity = class NewsArticleCommentLikeEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '文章ID', type: 'bigint' }),
    __metadata("design:type", Number)
], NewsArticleCommentLikeEntity.prototype, "articleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '留言ID', type: 'bigint' }),
    __metadata("design:type", Number)
], NewsArticleCommentLikeEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用戶ID', type: 'bigint' }),
    __metadata("design:type", Number)
], NewsArticleCommentLikeEntity.prototype, "userId", void 0);
NewsArticleCommentLikeEntity = __decorate([
    (0, orm_1.EntityModel)('news_comment_like')
], NewsArticleCommentLikeEntity);
exports.NewsArticleCommentLikeEntity = NewsArticleCommentLikeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudExpa2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL25ld3MvZW50aXR5L2NvbW1lbnRMaWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1Qyw0Q0FBK0M7QUFDL0MscUNBQWlDO0FBRWpDOztHQUVHO0FBRUgsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNkIsU0FBUSxpQkFBVTtDQVMzRCxDQUFBO0FBUEM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7K0RBQzFCO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OytEQUMxQjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzs0REFDN0I7QUFSSiw0QkFBNEI7SUFEeEMsSUFBQSxpQkFBVyxFQUFDLG1CQUFtQixDQUFDO0dBQ3BCLDRCQUE0QixDQVN4QztBQVRZLG9FQUE0QiJ9