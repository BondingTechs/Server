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
exports.NewsArticleEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const baseDelete_1 = require("../../../base/entity/baseDelete");
let NewsArticleEntity = class NewsArticleEntity extends baseDelete_1.BaseDeleteEntity {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '標題' }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'meta標題', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "metaTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: 'meta描述', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "metaDescription", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ comment: '代稱' }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '完整文章', type: 'mediumtext' }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '預覽內容', type: 'mediumtext' }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "contentPreview", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '摘錄', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "excerpt", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '縮圖', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '開啟評論', default: true }),
    __metadata("design:type", Boolean)
], NewsArticleEntity.prototype, "commentOpen", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '置頂新聞', default: false }),
    __metadata("design:type", Boolean)
], NewsArticleEntity.prototype, "isTop", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '熱門新聞', default: false }),
    __metadata("design:type", Boolean)
], NewsArticleEntity.prototype, "isHot", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '狀態', type: 'tinyint' }),
    __metadata("design:type", Number)
], NewsArticleEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '發布時間', nullable: true }),
    __metadata("design:type", Date)
], NewsArticleEntity.prototype, "publishTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '類型', type: 'tinyint' }),
    __metadata("design:type", Number)
], NewsArticleEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '影片網址', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "videoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '作者頭像', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "authorAvatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '作者姓名' }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "authorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '作者簡介', type: 'mediumtext', nullable: true }),
    __metadata("design:type", String)
], NewsArticleEntity.prototype, "authorIntro", void 0);
NewsArticleEntity = __decorate([
    (0, orm_1.EntityModel)('news_article')
], NewsArticleEntity);
exports.NewsArticleEntity = NewsArticleEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbmV3cy9lbnRpdHkvYXJ0aWNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMscUNBQXdDO0FBQ3hDLGdFQUFtRTtBQUduRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLDZCQUFnQjtDQThEdEQsQ0FBQTtBQTNEQztJQUZDLElBQUEsZUFBSyxHQUFFO0lBQ1AsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDWjtBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O29EQUM1QjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswREFDdEI7QUFJeEI7SUFGQyxJQUFBLGVBQUssRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUNiO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzs7a0RBQ2hDO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7O3lEQUN6QjtBQUd2QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztrREFDMUI7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0RBQ3hCO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NEQUN0QjtBQUdyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztnREFDN0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztnREFDN0I7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztpREFDNUI7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUMvQixJQUFJO3NEQUFDO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7OytDQUM5QjtBQUdiO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUMzQjtBQUlqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1REFDdkI7QUFJckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7O3FEQUNUO0FBSW5CO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0RBQzVDO0FBMURULGlCQUFpQjtJQUQ3QixJQUFBLGlCQUFXLEVBQUMsY0FBYyxDQUFDO0dBQ2YsaUJBQWlCLENBOEQ3QjtBQTlEWSw4Q0FBaUIifQ==