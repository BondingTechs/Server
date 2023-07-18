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
exports.NewsArticleCommentEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const baseDelete_1 = require("../../../base/entity/baseDelete");
/**
 * 描述
 */
let NewsArticleCommentEntity = class NewsArticleCommentEntity extends baseDelete_1.BaseDeleteEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '文章ID', type: 'bigint' }),
    __metadata("design:type", Number)
], NewsArticleCommentEntity.prototype, "articleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '內容' }),
    __metadata("design:type", String)
], NewsArticleCommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '父ID', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], NewsArticleCommentEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '用戶ID', type: 'bigint' }),
    __metadata("design:type", Number)
], NewsArticleCommentEntity.prototype, "authorId", void 0);
NewsArticleCommentEntity = __decorate([
    (0, orm_1.EntityModel)('news_comment')
], NewsArticleCommentEntity);
exports.NewsArticleCommentEntity = NewsArticleCommentEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9lbnRpdHkvY29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMscUNBQWlDO0FBQ2pDLGdFQUFtRTtBQUVuRTs7R0FFRztBQUVILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsNkJBQWdCO0NBWTdELENBQUE7QUFWQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzsyREFDMUI7QUFHbEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lEQUNWO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MERBQzFDO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OzBEQUMzQjtBQVhOLHdCQUF3QjtJQURwQyxJQUFBLGlCQUFXLEVBQUMsY0FBYyxDQUFDO0dBQ2Ysd0JBQXdCLENBWXBDO0FBWlksNERBQXdCIn0=