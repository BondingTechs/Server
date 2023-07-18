"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminIndustryCategoryController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const category_1 = require("../../entity/category");
const articleCategory_1 = require("../../../news/entity/articleCategory");
const tips_category_1 = require("../../../award/entity/tips_category");
const category_2 = require("../../service/admin/category");
/**
 * 描述
 */
let AdminIndustryCategoryController = class AdminIndustryCategoryController extends core_1.BaseController {
};
AdminIndustryCategoryController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: category_1.IndustryCategoryEntity,
        service: category_2.AdminIndustryCategoryService,
        pageQueryOp: {
            select: ['a.*', 'count(b.id) as tipCount', 'count(c.id) as articleCount'],
            keyWordLikeFields: ['name', 'slug'],
            join: [
                {
                    entity: tips_category_1.AwardTipsCategoryEntity,
                    alias: 'b',
                    condition: 'a.id = b.categoryId',
                    type: 'leftJoin',
                },
                {
                    entity: articleCategory_1.NewsArticleCategoryEntity,
                    alias: 'c',
                    condition: 'a.id = c.categoryId',
                    type: 'leftJoin',
                },
            ],
            extend: async (find) => {
                find.groupBy('a.id');
            },
        },
    })
], AdminIndustryCategoryController);
exports.AdminIndustryCategoryController = AdminIndustryCategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L2NvbnRyb2xsZXIvYWRtaW4vY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDRDQUFtRTtBQUNuRSxvREFBK0Q7QUFFL0QsMEVBQWlGO0FBQ2pGLHVFQUE4RTtBQUM5RSwyREFBNEU7QUFFNUU7O0dBRUc7QUE0QkgsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBZ0MsU0FBUSxxQkFBYztDQUFJLENBQUE7QUFBMUQsK0JBQStCO0lBM0IzQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxNQUFNLEVBQUUsaUNBQXNCO1FBQzlCLE9BQU8sRUFBRSx1Q0FBNEI7UUFDckMsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLHlCQUF5QixFQUFFLDZCQUE2QixDQUFDO1lBQ3pFLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUNuQyxJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsTUFBTSxFQUFFLHVDQUF1QjtvQkFDL0IsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsU0FBUyxFQUFFLHFCQUFxQjtvQkFDaEMsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCO2dCQUNEO29CQUNFLE1BQU0sRUFBRSwyQ0FBeUI7b0JBQ2pDLEtBQUssRUFBRSxHQUFHO29CQUNWLFNBQVMsRUFBRSxxQkFBcUI7b0JBQ2hDLElBQUksRUFBRSxVQUFVO2lCQUNqQjthQUNGO1lBQ0QsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFnRCxFQUFFLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsQ0FBQztTQUNGO0tBQ0YsQ0FBQztHQUNXLCtCQUErQixDQUEyQjtBQUExRCwwRUFBK0IifQ==