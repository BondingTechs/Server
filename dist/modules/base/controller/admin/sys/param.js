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
exports.BaseSysParamController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const param_1 = require("../../../entity/sys/param");
const param_2 = require("../../../service/sys/param");
/**
 * 参数配置
 */
let BaseSysParamController = class BaseSysParamController extends core_1.BaseController {
    /**
     * 根据配置参数key获得网页内容(富文本)
     */
    async htmlByKey(key) {
        this.ctx.body = await this.baseSysParamService.htmlByKey(key);
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", param_2.BaseSysParamService)
], BaseSysParamController.prototype, "baseSysParamService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysParamController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Get)('/html', { summary: '获得网页内容的参数值' }),
    __param(0, (0, decorator_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseSysParamController.prototype, "htmlByKey", null);
BaseSysParamController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'page'],
        entity: param_1.BaseSysParamEntity,
        pageQueryOp: {
            keyWordLikeFields: ['name', 'keyName'],
        },
    })
], BaseSysParamController);
exports.BaseSysParamController = BaseSysParamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2UvY29udHJvbGxlci9hZG1pbi9zeXMvcGFyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtFO0FBQ2xFLDRDQUFtRTtBQUNuRSxxREFBK0Q7QUFDL0Qsc0RBQWlFO0FBR2pFOztHQUVHO0FBU0gsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxxQkFBYztJQU94RDs7T0FFRztJQUVILEtBQUssQ0FBQyxTQUFTLENBQWUsR0FBVztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7QUFaQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDWSwyQkFBbUI7bUVBQUM7QUFHekM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7O21EQUNJO0FBTWI7SUFEQyxJQUFBLGVBQUcsRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDdkIsV0FBQSxJQUFBLGlCQUFLLEVBQUMsS0FBSyxDQUFDLENBQUE7Ozs7dURBRTVCO0FBYlUsc0JBQXNCO0lBUmxDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEQsTUFBTSxFQUFFLDBCQUFrQjtRQUMxQixXQUFXLEVBQUU7WUFDWCxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7U0FDdkM7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBY2xDO0FBZFksd0RBQXNCIn0=