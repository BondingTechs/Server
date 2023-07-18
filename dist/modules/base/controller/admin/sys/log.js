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
exports.BaseSysLogController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const log_1 = require("../../../entity/sys/log");
const user_1 = require("../../../entity/sys/user");
const conf_1 = require("../../../service/sys/conf");
const log_2 = require("../../../service/sys/log");
/**
 * 系统日志
 */
let BaseSysLogController = class BaseSysLogController extends core_1.BaseController {
    /**
     * 清空日志
     */
    async clear() {
        await this.baseSysLogService.clear(true);
        return this.ok();
    }
    /**
     * 设置日志保存时间
     */
    async setKeep(value) {
        await this.baseSysConfService.updateVaule('logKeep', value);
        return this.ok();
    }
    /**
     * 获得日志保存时间
     */
    async getKeep() {
        return this.ok(await this.baseSysConfService.getValue('logKeep'));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", log_2.BaseSysLogService)
], BaseSysLogController.prototype, "baseSysLogService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", conf_1.BaseSysConfService)
], BaseSysLogController.prototype, "baseSysConfService", void 0);
__decorate([
    (0, decorator_1.Post)('/clear', { summary: '清理' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseSysLogController.prototype, "clear", null);
__decorate([
    (0, decorator_1.Post)('/setKeep', { summary: '日志保存时间' }),
    __param(0, (0, decorator_1.Body)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseSysLogController.prototype, "setKeep", null);
__decorate([
    (0, decorator_1.Get)('/getKeep', { summary: '获得日志保存时间' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseSysLogController.prototype, "getKeep", null);
BaseSysLogController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['page'],
        entity: log_1.BaseSysLogEntity,
        urlTag: {
            name: 'a',
            url: ['add'],
        },
        pageQueryOp: {
            keyWordLikeFields: ['b.name', 'a.params', 'a.ipAddr'],
            select: ['a.*', 'CONCAT(b.firstName, b.lastName) as name'],
            join: [
                {
                    entity: user_1.BaseSysUserEntity,
                    alias: 'b',
                    condition: 'a.userId = b.id',
                    type: 'leftJoin',
                },
            ],
        },
    })
], BaseSysLogController);
exports.BaseSysLogController = BaseSysLogController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL2NvbnRyb2xsZXIvYWRtaW4vc3lzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBdUU7QUFDdkUsNENBQW1FO0FBQ25FLGlEQUEyRDtBQUMzRCxtREFBNkQ7QUFDN0Qsb0RBQStEO0FBQy9ELGtEQUE2RDtBQUU3RDs7R0FFRztBQXNCSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLHFCQUFjO0lBT3REOztPQUVHO0lBRUksS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUVJLEtBQUssQ0FBQyxPQUFPLENBQWdCLEtBQWE7UUFDL0MsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFFSSxLQUFLLENBQUMsT0FBTztRQUNsQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGLENBQUE7QUE5QkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1UsdUJBQWlCOytEQUFDO0FBR3JDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNXLHlCQUFrQjtnRUFBQztBQU12QztJQURDLElBQUEsZ0JBQUksRUFBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7aURBSWpDO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLFdBQUEsSUFBQSxnQkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFBOzs7O21EQUdsQztBQU1EO0lBREMsSUFBQSxlQUFHLEVBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDOzs7O21EQUd4QztBQS9CVSxvQkFBb0I7SUFyQmhDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNiLE1BQU0sRUFBRSxzQkFBZ0I7UUFDeEIsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLEdBQUc7WUFDVCxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDYjtRQUNELFdBQVcsRUFBRTtZQUNYLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7WUFDckQsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLHlDQUF5QyxDQUFDO1lBQzFELElBQUksRUFBRTtnQkFDSjtvQkFDRSxNQUFNLEVBQUUsd0JBQWlCO29CQUN6QixLQUFLLEVBQUUsR0FBRztvQkFDVixTQUFTLEVBQUUsaUJBQWlCO29CQUM1QixJQUFJLEVBQUUsVUFBVTtpQkFDakI7YUFDRjtTQUNGO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQWdDaEM7QUFoQ1ksb0RBQW9CIn0=