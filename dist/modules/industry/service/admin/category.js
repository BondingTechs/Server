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
exports.AdminIndustryCategoryService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const category_1 = require("../../entity/category");
const _ = require("lodash");
const articleCategory_1 = require("../../../news/entity/articleCategory");
const tips_category_1 = require("../../../award/entity/tips_category");
/**
 * 描述
 */
let AdminIndustryCategoryService = class AdminIndustryCategoryService extends core_1.BaseService {
    async list() {
        const data = await this.industryCategoryEntity
            .createQueryBuilder()
            .getMany();
        const fn = async (e) => {
            e.tipCount = await this.awardTipsCategoryEntity
                .createQueryBuilder()
                .where(new typeorm_1.Brackets(qb => {
                qb.where('categoryId = :id', { id: e.id });
            }))
                .getCount();
            e.articleCount = await this.newsArticleCategoryEntity
                .createQueryBuilder()
                .where(new typeorm_1.Brackets(qb => {
                qb.where('categoryId = :id', { id: e.id });
            }))
                .getCount();
            return e;
        };
        const result = await Promise.all(data.map(e => fn(e)));
        const resultWithChildCount = result.map(e => {
            if (e.parentId === null) {
                e.tipCount = data
                    .filter(child => child.parentId === e.id)
                    .reduce((a, b) => _.add(a, b.tipCount), 0);
                e.articleCount = data
                    .filter(child => child.parentId === e.id)
                    .reduce((a, b) => _.add(a, b.articleCount), 0);
            }
            return e;
        });
        return resultWithChildCount;
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(category_1.IndustryCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminIndustryCategoryService.prototype, "industryCategoryEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(tips_category_1.AwardTipsCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminIndustryCategoryService.prototype, "awardTipsCategoryEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleCategory_1.NewsArticleCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminIndustryCategoryService.prototype, "newsArticleCategoryEntity", void 0);
AdminIndustryCategoryService = __decorate([
    (0, decorator_1.Provide)()
], AdminIndustryCategoryService);
exports.AdminIndustryCategoryService = AdminIndustryCategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L3NlcnZpY2UvYWRtaW4vY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDRDQUFnRDtBQUNoRCx1Q0FBa0Q7QUFDbEQscUNBQStDO0FBQy9DLG9EQUErRDtBQUMvRCw0QkFBNEI7QUFDNUIsMEVBQWlGO0FBQ2pGLHVFQUE4RTtBQUU5RTs7R0FFRztBQUVILElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTZCLFNBQVEsa0JBQVc7SUFVM0QsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDM0Msa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7UUFFYixNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7aUJBQzVDLGtCQUFrQixFQUFFO2lCQUNwQixLQUFLLENBQ0osSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFFBQVEsRUFBRSxDQUFDO1lBRWQsQ0FBQyxDQUFDLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUI7aUJBQ2xELGtCQUFrQixFQUFFO2lCQUNwQixLQUFLLENBQ0osSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFFBQVEsRUFBRSxDQUFDO1lBRWQsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSTtxQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJO3FCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsRDtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBbERDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxpQ0FBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7NEVBQXlCO0FBRzNEO0lBREMsSUFBQSx1QkFBaUIsRUFBQyx1Q0FBdUIsQ0FBQzs4QkFDbEIsb0JBQVU7NkVBQTBCO0FBRzdEO0lBREMsSUFBQSx1QkFBaUIsRUFBQywyQ0FBeUIsQ0FBQzs4QkFDbEIsb0JBQVU7K0VBQTRCO0FBUnRELDRCQUE0QjtJQUR4QyxJQUFBLG1CQUFPLEdBQUU7R0FDRyw0QkFBNEIsQ0FvRHhDO0FBcERZLG9FQUE0QiJ9