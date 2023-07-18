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
exports.AdminAwardTipsService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const tips_1 = require("../../entity/tips");
const tips_category_1 = require("../../entity/tips_category");
/**
 * 描述
 */
let AdminAwardTipsService = class AdminAwardTipsService extends core_1.BaseService {
    async add(param) {
        const { categories } = param;
        if (!categories)
            throw new core_1.CoolCommException('請選擇分類');
        const tip = await this.awardTipsEntity.save({
            ...param,
            createBy: this.ctx.admin.userId,
            updateBy: this.ctx.admin.userId,
        });
        await this.updateCategories({
            ...param,
            id: tip.id,
        });
        return tip;
    }
    async update(param) {
        const tip = await this.awardTipsEntity.save({
            ...param,
            updateBy: this.ctx.admin.userId,
        });
        await this.updateCategories({
            categories: param.categories,
            id: tip.id,
        });
        return tip;
    }
    async info(id) {
        const info = await this.awardTipsEntity.findOne({ id });
        const categories = await this.nativeQuery(`
      SELECT 
        categoryId
      FROM award_tips_category
      WHERE tipId = ${id}
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
    async updateCategories(tip) {
        await this.awardTipsCategoryEntity.delete({ tipId: tip.id });
        if (tip.categories) {
            for (const category of tip.categories) {
                await this.awardTipsCategoryEntity.save({
                    tipId: tip.id,
                    categoryId: category,
                });
            }
        }
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(tips_1.AwardTipsEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminAwardTipsService.prototype, "awardTipsEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(tips_category_1.AwardTipsCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], AdminAwardTipsService.prototype, "awardTipsCategoryEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AdminAwardTipsService.prototype, "ctx", void 0);
AdminAwardTipsService = __decorate([
    (0, decorator_1.Provide)()
], AdminAwardTipsService);
exports.AdminAwardTipsService = AdminAwardTipsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvc2VydmljZS9hZG1pbi90aXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBbUU7QUFDbkUsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyw0Q0FBb0Q7QUFDcEQsOERBQXFFO0FBRXJFOztHQUVHO0FBRUgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxrQkFBVztJQVVwRCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7UUFDYixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTSxJQUFJLHdCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDMUMsR0FBRyxLQUFLO1lBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU07U0FDaEMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUIsR0FBRyxLQUFLO1lBQ1IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDMUMsR0FBRyxLQUFLO1lBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU07U0FDaEMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtTQUNYLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FDdkM7Ozs7c0JBSWdCLEVBQUU7S0FDbkIsQ0FDQSxDQUFDO1FBQ0YsT0FBTztZQUNMLEdBQUcsSUFBSTtZQUNQLFVBQVUsRUFBRSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7b0JBQ3RDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDYixVQUFVLEVBQUUsUUFBUTtpQkFDckIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBO0FBdkVDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxzQkFBZSxDQUFDOzhCQUNsQixvQkFBVTs4REFBa0I7QUFHN0M7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHVDQUF1QixDQUFDOzhCQUNsQixvQkFBVTtzRUFBMEI7QUFHN0Q7SUFEQyxJQUFBLGtCQUFNLEdBQUU7O2tEQUNMO0FBUk8scUJBQXFCO0lBRGpDLElBQUEsbUJBQU8sR0FBRTtHQUNHLHFCQUFxQixDQXlFakM7QUF6RVksc0RBQXFCIn0=