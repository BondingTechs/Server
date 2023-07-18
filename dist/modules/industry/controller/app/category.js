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
exports.AdminIndustryCategoryController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const category_1 = require("../../entity/category");
const category_2 = require("../../service/app/category");
/**
 * 描述
 */
let AdminIndustryCategoryController = class AdminIndustryCategoryController extends core_1.BaseController {
    async information(query) {
        return this.ok(await this.appIndustryCategoryService.info(query));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", category_2.AppIndustryCategoryService)
], AdminIndustryCategoryController.prototype, "appIndustryCategoryService", void 0);
__decorate([
    (0, decorator_1.Post)('/info', { summary: '退出' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminIndustryCategoryController.prototype, "information", null);
AdminIndustryCategoryController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['list'],
        entity: category_1.IndustryCategoryEntity,
        service: category_2.AppIndustryCategoryService,
    })
], AdminIndustryCategoryController);
exports.AdminIndustryCategoryController = AdminIndustryCategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2luZHVzdHJ5L2NvbnRyb2xsZXIvYXBwL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsb0RBQStEO0FBQy9ELHlEQUF3RTtBQUV4RTs7R0FFRztBQU9ILElBQWEsK0JBQStCLEdBQTVDLE1BQWEsK0JBQWdDLFNBQVEscUJBQWM7SUFLakUsS0FBSyxDQUFDLFdBQVcsQ0FBUyxLQUFLO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTtBQU5DO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNtQixxQ0FBMEI7bUZBQUM7QUFHdkQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2QsV0FBQSxJQUFBLGdCQUFJLEdBQUUsQ0FBQTs7OztrRUFFeEI7QUFQVSwrQkFBK0I7SUFOM0MsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2IsTUFBTSxFQUFFLGlDQUFzQjtRQUM5QixPQUFPLEVBQUUscUNBQTBCO0tBQ3BDLENBQUM7R0FDVywrQkFBK0IsQ0FRM0M7QUFSWSwwRUFBK0IifQ==