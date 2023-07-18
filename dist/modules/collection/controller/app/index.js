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
exports.CollectionController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const service_1 = require("../../service");
/**
 * 描述
 */
let CollectionController = class CollectionController extends core_1.BaseController {
    /**
     * 分頁
     * @param param
     */
    async getPage(query) {
        return this.ok(await this.collectionService.page(query));
    }
    /**
     * 分頁
     * @param param
     */
    async deleteItem(query) {
        return this.ok(await this.collectionService.delete(query));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", service_1.CollectionService)
], CollectionController.prototype, "collectionService", void 0);
__decorate([
    (0, decorator_1.Post)('/page', { summary: '取得收藏列表' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "getPage", null);
__decorate([
    (0, decorator_1.Post)('/delete', { summary: '刪除收藏項目' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "deleteItem", null);
CollectionController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)('/app/collection')
], CollectionController);
exports.CollectionController = CollectionController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbGxlY3Rpb24vY29udHJvbGxlci9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUNuRSwyQ0FBa0Q7QUFFbEQ7O0dBRUc7QUFHSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLHFCQUFjO0lBSXREOzs7T0FHRztJQUVILEtBQUssQ0FBQyxPQUFPLENBQVMsS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUVILEtBQUssQ0FBQyxVQUFVLENBQVMsS0FBSztRQUM1QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGLENBQUE7QUFuQkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1UsMkJBQWlCOytEQUFDO0FBT3JDO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN0QixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O21EQUVwQjtBQU9EO0lBREMsSUFBQSxnQkFBSSxFQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUNyQixXQUFBLElBQUEsZ0JBQUksR0FBRSxDQUFBOzs7O3NEQUV2QjtBQXBCVSxvQkFBb0I7SUFGaEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDLGlCQUFpQixDQUFDO0dBQ3JCLG9CQUFvQixDQXFCaEM7QUFyQlksb0RBQW9CIn0=