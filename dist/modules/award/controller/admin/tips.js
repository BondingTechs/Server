"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAwardTipsController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const tips_1 = require("../../entity/tips");
const tips_user_1 = require("../../entity/tips_user");
const tips_category_1 = require("../../entity/tips_category");
const tips_collection_1 = require("../../entity/tips_collection");
const category_1 = require("../../../industry/entity/category");
const tips_2 = require("../../service/admin/tips");
/**
 * 描述
 */
let AdminAwardTipsController = class AdminAwardTipsController extends core_1.BaseController {
};
AdminAwardTipsController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: tips_1.AwardTipsEntity,
        service: tips_2.AdminAwardTipsService,
        pageQueryOp: {
            keyWordLikeFields: ['title'],
            fieldEq: ['status'],
            select: [
                'a.*',
                'count(b.id) as receives',
                'count(c.id) as collections',
                'GROUP_CONCAT(DISTINCT e.name) as categories',
            ],
            join: [
                {
                    entity: tips_user_1.AwardTipsUserEntity,
                    alias: 'b',
                    condition: 'a.id = b.tipId',
                    type: 'leftJoin',
                },
                {
                    entity: tips_collection_1.AwardTipsCollectionEntity,
                    alias: 'c',
                    condition: 'a.id = c.tipId',
                    type: 'leftJoin',
                },
                {
                    entity: tips_category_1.AwardTipsCategoryEntity,
                    alias: 'd',
                    condition: 'a.id = d.tipId',
                    type: 'leftJoin',
                },
                {
                    entity: category_1.IndustryCategoryEntity,
                    alias: 'e',
                    condition: 'd.categoryId = e.id',
                    type: 'leftJoin',
                },
            ],
            extend: async (find) => {
                find.groupBy('a.id');
            },
        },
    })
], AdminAwardTipsController);
exports.AdminAwardTipsController = AdminAwardTipsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvY29udHJvbGxlci9hZG1pbi90aXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyw0Q0FBbUU7QUFDbkUsNENBQW9EO0FBQ3BELHNEQUE2RDtBQUU3RCw4REFBcUU7QUFDckUsa0VBQXlFO0FBQ3pFLGdFQUEyRTtBQUMzRSxtREFBaUU7QUFFakU7O0dBRUc7QUE4Q0gsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBeUIsU0FBUSxxQkFBYztDQUFJLENBQUE7QUFBbkQsd0JBQXdCO0lBN0NwQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxNQUFNLEVBQUUsc0JBQWU7UUFDdkIsT0FBTyxFQUFFLDRCQUFxQjtRQUM5QixXQUFXLEVBQUU7WUFDWCxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsTUFBTSxFQUFFO2dCQUNOLEtBQUs7Z0JBQ0wseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Z0JBQzVCLDZDQUE2QzthQUM5QztZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxNQUFNLEVBQUUsK0JBQW1CO29CQUMzQixLQUFLLEVBQUUsR0FBRztvQkFDVixTQUFTLEVBQUUsZ0JBQWdCO29CQUMzQixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLDJDQUF5QjtvQkFDakMsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCO2dCQUNEO29CQUNFLE1BQU0sRUFBRSx1Q0FBdUI7b0JBQy9CLEtBQUssRUFBRSxHQUFHO29CQUNWLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLElBQUksRUFBRSxVQUFVO2lCQUNqQjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsaUNBQXNCO29CQUM5QixLQUFLLEVBQUUsR0FBRztvQkFDVixTQUFTLEVBQUUscUJBQXFCO29CQUNoQyxJQUFJLEVBQUUsVUFBVTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBeUMsRUFBRSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7U0FDRjtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBMkI7QUFBbkQsNERBQXdCIn0=