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
exports.AppIndustryCategoryService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
const tips_category_1 = require("../../../award/entity/tips_category");
const articleCategory_1 = require("../../../news/entity/articleCategory");
const category_1 = require("../../entity/category");
const category_2 = require("../admin/category");
/**
 * 描述
 */
let AppIndustryCategoryService = class AppIndustryCategoryService extends core_1.BaseService {
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
    async info(query) {
        const { slug } = query;
        return await this.industryCategoryEntity.findOne({ slug });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(category_1.IndustryCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppIndustryCategoryService.prototype, "industryCategoryEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", category_2.AdminIndustryCategoryService)
], AppIndustryCategoryService.prototype, "adminIndustryCategoryService", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(tips_category_1.AwardTipsCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppIndustryCategoryService.prototype, "awardTipsCategoryEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(articleCategory_1.NewsArticleCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AppIndustryCategoryService.prototype, "newsArticleCategoryEntity", void 0);
AppIndustryCategoryService = __decorate([
    (0, decorator_1.Provide)()
], AppIndustryCategoryService);
exports.AppIndustryCategoryService = AppIndustryCategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L3NlcnZpY2UvYXBwL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBc0Q7QUFDdEQsdUNBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixxQ0FBK0M7QUFDL0MsdUVBQThFO0FBQzlFLDBFQUFpRjtBQUNqRixvREFBK0Q7QUFDL0QsZ0RBQWlFO0FBRWpFOztHQUVHO0FBRUgsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMkIsU0FBUSxrQkFBVztJQWF6RCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUMzQyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztRQUViLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtZQUNuQixDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjtpQkFDNUMsa0JBQWtCLEVBQUU7aUJBQ3BCLEtBQUssQ0FDSixJQUFJLGtCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsUUFBUSxFQUFFLENBQUM7WUFFZCxDQUFDLENBQUMsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QjtpQkFDbEQsa0JBQWtCLEVBQUU7aUJBQ3BCLEtBQUssQ0FDSixJQUFJLGtCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsUUFBUSxFQUFFLENBQUM7WUFFZCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJO3FCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUk7cUJBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBO0FBMURDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxpQ0FBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7MEVBQXlCO0FBRzNEO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNxQix1Q0FBNEI7Z0ZBQUM7QUFHM0Q7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHVDQUF1QixDQUFDOzhCQUNsQixvQkFBVTsyRUFBMEI7QUFHN0Q7SUFEQyxJQUFBLHVCQUFpQixFQUFDLDJDQUF5QixDQUFDOzhCQUNsQixvQkFBVTs2RUFBNEI7QUFYdEQsMEJBQTBCO0lBRHRDLElBQUEsbUJBQU8sR0FBRTtHQUNHLDBCQUEwQixDQTREdEM7QUE1RFksZ0VBQTBCIn0=