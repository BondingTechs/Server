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
exports.BaseSysRoleService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const role_1 = require("../../entity/sys/role");
const user_role_1 = require("../../entity/sys/user_role");
const _ = require("lodash");
const role_menu_1 = require("../../entity/sys/role_menu");
const role_department_1 = require("../../entity/sys/role_department");
const perms_1 = require("./perms");
const typeorm_2 = require("typeorm");
/**
 * 角色
 */
let BaseSysRoleService = class BaseSysRoleService extends core_1.BaseService {
    /**
     * 根据用户ID获得所有用户角色
     * @param userId
     */
    async getByUser(userId) {
        const userRole = await this.baseSysUserRoleEntity.find({ userId });
        if (!_.isEmpty(userRole)) {
            return userRole.map(e => {
                return e.roleId;
            });
        }
        return [];
    }
    /**
     *
     * @param param
     */
    async modifyAfter(param) {
        if (param.id) {
            this.updatePerms(param.id, param.menuIdList, param.departmentIdList);
        }
    }
    /**
     * 更新权限
     * @param roleId
     * @param menuIdList
     * @param departmentIds
     */
    async updatePerms(roleId, menuIdList, departmentIds = []) {
        // 更新菜单权限
        await this.baseSysRoleMenuEntity.delete({ roleId });
        for (const e of menuIdList) {
            await this.baseSysRoleMenuEntity.save({ roleId, menuId: e });
        }
        // 更新部門权限
        await this.baseSysRoleDepartmentEntity.delete({ roleId });
        for (const departmentId of departmentIds) {
            await this.baseSysRoleDepartmentEntity.save({ roleId, departmentId });
        }
        // 刷新权限
        const userRoles = await this.baseSysUserRoleEntity.find({ roleId });
        for (const userRole of userRoles) {
            await this.baseSysPermsService.refreshPerms(userRole.userId);
        }
    }
    /**
     * 角色信息
     * @param id
     */
    async info(id) {
        const info = await this.baseSysRoleEntity.findOne({ id });
        if (info) {
            const menus = await this.baseSysRoleMenuEntity.find(id !== 1 ? { roleId: id } : {});
            const menuIdList = menus.map(e => {
                return parseInt(e.menuId + '');
            });
            const departments = await this.baseSysRoleDepartmentEntity.find(id !== 1 ? { roleId: id } : {});
            const departmentIdList = departments.map(e => {
                return parseInt(e.departmentId + '');
            });
            return {
                ...info,
                menuIdList,
                departmentIdList,
            };
        }
        return {};
    }
    async list() {
        return this.baseSysRoleEntity
            .createQueryBuilder()
            .where(new typeorm_2.Brackets(qb => {
            qb.where('id !=:id', { id: 1 }); // 超级管理员的角色不展示
            // 如果不是超管，只能看到自己新建的或者自己有的角色
            // if (this.ctx.admin.username !== 'admin') {
            //   qb.andWhere('(userId=:userId or id in (:roleId))', {
            //     userId: this.ctx.admin.userId,
            //     roleId: this.ctx.admin.roleIds,
            //   });
            // }
        }))
            .getMany();
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(role_1.BaseSysRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysRoleService.prototype, "baseSysRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_role_1.BaseSysUserRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysRoleService.prototype, "baseSysUserRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(role_menu_1.BaseSysRoleMenuEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysRoleService.prototype, "baseSysRoleMenuEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(role_department_1.BaseSysRoleDepartmentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysRoleService.prototype, "baseSysRoleDepartmentEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysRoleService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysRoleService.prototype, "ctx", void 0);
BaseSysRoleService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysRoleService);
exports.BaseSysRoleService = BaseSysRoleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL3N5cy9yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBZ0Q7QUFDaEQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnREFBMEQ7QUFDMUQsMERBQW1FO0FBQ25FLDRCQUE0QjtBQUM1QiwwREFBbUU7QUFDbkUsc0VBQStFO0FBQy9FLG1DQUE4QztBQUM5QyxxQ0FBbUM7QUFFbkM7O0dBRUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFXO0lBbUJqRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDNUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLO1FBQ3JCLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLFdBQVcs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