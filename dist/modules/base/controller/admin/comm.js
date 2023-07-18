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
exports.BaseCommController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const user_1 = require("../../entity/sys/user");
const login_1 = require("../../service/sys/login");
const perms_1 = require("../../service/sys/perms");
const user_2 = require("../../service/sys/user");
const file_1 = require("@cool-midway/file");
/**
 * Base 通用接口 一般写不需要权限过滤的接口
 */
let BaseCommController = class BaseCommController extends core_1.BaseController {
    /**
     * 获得个人信息
     */
    async person() {
        return this.ok(await this.baseSysUserService.person());
    }
    /**
     * 修改个人信息
     */
    async personUpdate(user) {
        await this.baseSysUserService.personUpdate(user);
        return this.ok();
    }
    /**
     * 权限菜单
     */
    async permmenu() {
        return this.ok(await this.baseSysPermsService.permmenu(this.ctx.admin.roleIds));
    }
    /**
     * 文件上传
     */
    async upload() {
        return this.ok(await this.coolFile.upload(this.ctx));
    }
    /**
     * 文件上传模式，本地或者云存储
     */
    async uploadMode() {
        return this.ok(await this.coolFile.getMode());
    }
    /**
     * 退出
     */
    async logout() {
        await this.baseSysLoginService.logout();
        return this.ok();
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_2.BaseSysUserService)
], BaseCommController.prototype, "baseSysUserService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseCommController.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", login_1.BaseSysLoginService)
], BaseCommController.prototype, "baseSysLoginService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseCommController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], BaseCommController.prototype, "coolFile", void 0);
__decorate([
    (0, decorator_1.Get)('/person', { summary: '个人信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "person", null);
__decorate([
    (0, decorator_1.Post)('/personUpdate', { summary: '修改个人信息' }),
    __param(0, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.BaseSysUserEntity]),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "personUpdate", null);
__decorate([
    (0, decorator_1.Get)('/permmenu', { summary: '权限与菜单' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "permmenu", null);
__decorate([
    (0, decorator_1.Post)('/upload', { summary: '文件上传' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "upload", null);
__decorate([
    (0, decorator_1.Get)('/uploadMode', { summary: '文件上传模式' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "uploadMode", null);
__decorate([
    (0, decorator_1.Post)('/logout', { summary: '退出' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseCommController.prototype, "logout", null);
BaseCommController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], BaseCommController);
exports.BaseCommController = BaseCommController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9jb250cm9sbGVyL2FkbWluL2NvbW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTRFO0FBQzVFLDRDQUFtRTtBQUNuRSxnREFBMEQ7QUFDMUQsbURBQThEO0FBQzlELG1EQUE4RDtBQUM5RCxpREFBNEQ7QUFFNUQsNENBQTZDO0FBRTdDOztHQUVHO0FBR0gsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxxQkFBYztJQWdCcEQ7O09BRUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxZQUFZLENBQVksSUFBdUI7UUFDbkQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxRQUFRO1FBQ1osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUNaLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLFVBQVU7UUFDZCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTtBQWpFQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7OERBQUM7QUFHdkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1ksMkJBQW1COytEQUFDO0FBR3pDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNZLDJCQUFtQjsrREFBQztBQUd6QztJQURDLElBQUEsa0JBQU0sR0FBRTs7K0NBQ0k7QUFHYjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDQyxlQUFRO29EQUFDO0FBTW5CO0lBREMsSUFBQSxlQUFHLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7O2dEQUduQztBQU1EO0lBREMsSUFBQSxnQkFBSSxFQUFDLGVBQWUsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN6QixXQUFBLElBQUEsZ0JBQUksRUFBQyxlQUFHLENBQUMsQ0FBQTs7cUNBQU8sd0JBQWlCOztzREFHcEQ7QUFNRDtJQURDLElBQUEsZUFBRyxFQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7OztrREFLdEM7QUFNRDtJQURDLElBQUEsZ0JBQUksRUFBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7Ozs7Z0RBR3BDO0FBTUQ7SUFEQyxJQUFBLGVBQUcsRUFBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Ozs7b0RBR3pDO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs7O2dEQUlsQztBQWxFVSxrQkFBa0I7SUFGOUIsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osa0JBQWtCLENBbUU5QjtBQW5FWSxnREFBa0IifQ==