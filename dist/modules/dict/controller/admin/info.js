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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDictInfoController = void 0;
const info_1 = require("./../../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const info_2 = require("../../service/info");
/**
 * 字典信息
 */
let AdminDictInfoController = class AdminDictInfoController extends core_1.BaseController {
    async data(types = []) {
        return this.ok(await this.dictInfoService.data(types));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_2.DictInfoService)
], AdminDictInfoController.prototype, "dictInfoService", void 0);
__decorate([
    (0, decorator_1.Post)('/data', { summary: '获得字典数据' }),
    __param(0, (0, decorator_1.Body)('types')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminDictInfoController.prototype, "data", null);
AdminDictInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: info_1.DictInfoEntity,
        service: info_2.DictInfoService,
        listQueryOp: {
            fieldEq: ['typeId'],
            keyWordLikeFields: ['name'],
            addOrderBy: {
                createTime: 'ASC',
            },
        },
    })
], AdminDictInfoController);
exports.AdminDictInfoController = AdminDictInfoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGljdC9jb250cm9sbGVyL2FkbWluL2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXFEO0FBQ3JELG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsNkNBQXFEO0FBRXJEOztHQUVHO0FBY0gsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxxQkFBYztJQUt6RCxLQUFLLENBQUMsSUFBSSxDQUFnQixRQUFrQixFQUFFO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFOQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDUSxzQkFBZTtnRUFBQztBQUdqQztJQURDLElBQUEsZ0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDekIsV0FBQSxJQUFBLGdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUE7Ozs7bURBRXhCO0FBUFUsdUJBQXVCO0lBYm5DLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxxQkFBYztRQUN0QixPQUFPLEVBQUUsc0JBQWU7UUFDeEIsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzNCLFVBQVUsRUFBRTtnQkFDVixVQUFVLEVBQUUsS0FBSzthQUNsQjtTQUNGO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQVFuQztBQVJZLDBEQUF1QiJ9