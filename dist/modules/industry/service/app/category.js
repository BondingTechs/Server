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
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const category_1 = require("../../entity/category");
const category_2 = require("../admin/category");
/**
 * 描述
 */
let AppIndustryCategoryService = class AppIndustryCategoryService extends core_1.BaseService {
    async list() {
        return await this.adminIndustryCategoryService.list();
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
AppIndustryCategoryService = __decorate([
    (0, decorator_1.Provide)()
], AppIndustryCategoryService);
exports.AppIndustryCategoryService = AppIndustryCategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L3NlcnZpY2UvYXBwL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBZ0Q7QUFDaEQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxvREFBK0Q7QUFDL0QsZ0RBQWlFO0FBRWpFOztHQUVHO0FBRUgsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMkIsU0FBUSxrQkFBVztJQU96RCxLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBO0FBYkM7SUFEQyxJQUFBLHVCQUFpQixFQUFDLGlDQUFzQixDQUFDOzhCQUNsQixvQkFBVTswRUFBeUI7QUFHM0Q7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ3FCLHVDQUE0QjtnRkFBQztBQUxoRCwwQkFBMEI7SUFEdEMsSUFBQSxtQkFBTyxHQUFFO0dBQ0csMEJBQTBCLENBZXRDO0FBZlksZ0VBQTBCIn0=