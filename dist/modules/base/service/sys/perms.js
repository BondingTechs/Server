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
exports.BaseSysPermsService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const menu_1 = require("./menu");
const role_1 = require("./role");
const department_1 = require("./department");
const cache_1 = require("@midwayjs/cache");
/**
 * 权限
 */
let BaseSysPermsService = class BaseSysPermsService extends core_1.BaseService {
    /**
     * 刷新权限
     * @param userId 用户ID
     */
    async refreshPerms(userId) {
        var _a;
        const roleIds = await this.baseSysRoleService.getByUser(userId);
        const perms = await this.baseSysMenuService.getPerms(roleIds);
        await this.cacheManager.set(`admin:perms:${userId}`, perms);
        // 更新部門权限
        const departments = await this.baseSysDepartmentService.getByRoleIds(roleIds, ((_a = this.ctx.admin) === null || _a === void 0 ? void 0 : _a.username) === 'admin');
        await this.cacheManager.set(`admin:department:${userId}`, departments);
    }
    /**
     * 获得权限菜单
     * @param roleIds
     */
    async permmenu(roleIds) {
        const perms = await this.baseSysMenuService.getPerms(roleIds);
        const menus = await this.baseSysMenuService.getMenus(roleIds, this.ctx.admin.username === 'admin');
        return { perms, menus };
    }
    /**
     * 根据用户ID获得部門权限
     * @param userId
     * @return 部門ID数组
     */
    async departmentIds(userId) {
        const department = await this.cacheManager.get(`admin:department:${userId}`);
        if (department) {
            return department;
        }
        else {
            return [];
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseSysPermsService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", menu_1.BaseSysMenuService)
], BaseSysPermsService.prototype, "baseSysMenuService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", role_1.BaseSysRoleService)
], BaseSysPermsService.prototype, "baseSysRoleService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", department_1.BaseSysDepartmentService)
], BaseSysPermsService.prototype, "baseSysDepartmentService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysPermsService.prototype, "ctx", void 0);
BaseSysPermsService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysPermsService);
exports.BaseSysPermsService = BaseSysPermsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvcGVybXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUFnRDtBQUNoRCxpQ0FBNEM7QUFDNUMsaUNBQTRDO0FBQzVDLDZDQUF3RDtBQUV4RCwyQ0FBK0M7QUFFL0M7O0dBRUc7QUFFSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGtCQUFXO0lBZ0JsRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07O1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFlLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELFNBQVM7UUFDVCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQ2xFLE9BQU8sRUFDUCxDQUFBLE1BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLFFBQVEsTUFBSyxPQUFPLENBQ3JDLENBQUM7UUFDRixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixNQUFNLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFpQjtRQUM5QixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUNsRCxPQUFPLEVBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FDcEMsQ0FBQztRQUNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxVQUFVLEdBQVEsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDakQsb0JBQW9CLE1BQU0sRUFBRSxDQUM3QixDQUFDO1FBQ0YsSUFBSSxVQUFVLEVBQUU7WUFDZCxPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Q0FDRixDQUFBO0FBMURDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNLLG9CQUFZO3lEQUFDO0FBRzNCO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNXLHlCQUFrQjsrREFBQztBQUd2QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7K0RBQUM7QUFHdkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ2lCLHFDQUF3QjtxRUFBQztBQUduRDtJQURDLElBQUEsa0JBQU0sR0FBRTs7Z0RBQ0k7QUFkRixtQkFBbUI7SUFEL0IsSUFBQSxtQkFBTyxHQUFFO0dBQ0csbUJBQW1CLENBNEQvQjtBQTVEWSxrREFBbUIifQ==