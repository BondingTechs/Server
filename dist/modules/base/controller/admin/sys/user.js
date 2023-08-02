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
exports.BaseSysUserController = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../../../entity/sys/user");
const user_2 = require("../../../service/sys/user");
/**
 * 系统用户
 */
let BaseSysUserController = class BaseSysUserController extends core_1.BaseController {
    /**
     * 移动部門
     */
    async move(departmentId, userIds) {
        await this.baseSysUserService.move(departmentId, userIds);
        return this.ok();
    }
    /**
     * 查看身份驗證
     */
    async getIdentity(userId) {
        return this.ok(await this.baseSysUserService.getIdentity(userId));
    }
    /**
     * 身份驗證通過
     */
    async identityAgree(userId) {
        return this.ok(await this.baseSysUserService.identityAgree(userId));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_2.BaseSysUserService)
], BaseSysUserController.prototype, "baseSysUserService", void 0);
__decorate([
    (0, decorator_1.Post)('/move', { summary: '移动部門' }),
    __param(0, (0, decorator_1.Body)('departmentId')),
    __param(1, (0, decorator_1.Body)('userIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], BaseSysUserController.prototype, "move", null);
__decorate([
    (0, decorator_1.Post)('/getIdentity', { summary: '查看身份驗證' }),
    __param(0, (0, decorator_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseSysUserController.prototype, "getIdentity", null);
__decorate([
    (0, decorator_1.Post)('/identityAgree', { summary: '查看身份驗證' }),
    __param(0, (0, decorator_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseSysUserController.prototype, "identityAgree", null);
BaseSysUserController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: user_1.BaseSysUserEntity,
        service: user_2.BaseSysUserService,
        listQueryOp: {
            select: ['a.id', 'CONCAT(a.firstName, a.lastName) AS name'],
            where: () => {
                return [['a.id > :id', { id: 1 }]];
            },
        },
    })
], BaseSysUserController);
exports.BaseSysUserController = BaseSysUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9jb250cm9sbGVyL2FkbWluL3N5cy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSxtREFBa0U7QUFDbEUsbURBQTZEO0FBQzdELG9EQUErRDtBQUUvRDs7R0FFRztBQWFILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEscUJBQWM7SUFJdkQ7O09BRUc7SUFFSCxLQUFLLENBQUMsSUFBSSxDQUNjLFlBQW9CLEVBQ3pCLE9BQVc7UUFFNUIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsV0FBVyxDQUFpQixNQUFjO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsYUFBYSxDQUFpQixNQUFjO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0YsQ0FBQTtBQTdCQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7aUVBQUM7QUFNdkM7SUFEQyxJQUFBLGdCQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRWhDLFdBQUEsSUFBQSxnQkFBSSxFQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3BCLFdBQUEsSUFBQSxnQkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFBOzs7O2lEQUlqQjtBQU1EO0lBREMsSUFBQSxnQkFBSSxFQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN6QixXQUFBLElBQUEsZ0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQTs7Ozt3REFFaEM7QUFNRDtJQURDLElBQUEsZ0JBQUksRUFBQyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN6QixXQUFBLElBQUEsZ0JBQUksRUFBQyxRQUFRLENBQUMsQ0FBQTs7OzswREFFbEM7QUE5QlUscUJBQXFCO0lBWmpDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSx3QkFBaUI7UUFDekIsT0FBTyxFQUFFLHlCQUFrQjtRQUMzQixXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUseUNBQXlDLENBQUM7WUFDM0QsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7U0FDRjtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0ErQmpDO0FBL0JZLHNEQUFxQiJ9