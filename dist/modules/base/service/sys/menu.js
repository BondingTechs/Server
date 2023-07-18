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
exports.BaseSysMenuService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const menu_1 = require("../../entity/sys/menu");
const _ = require("lodash");
const perms_1 = require("./perms");
/**
 * 菜单
 */
let BaseSysMenuService = class BaseSysMenuService extends core_1.BaseService {
    async update(param) {
        const { parentId } = param;
        await this.baseSysMenuEntity.save(Object.assign(param, { parentId: parentId !== null && parentId !== void 0 ? parentId : null }));
    }
    /**
     * 获得所有菜单
     */
    async list() {
        const menus = await this.getMenus(this.ctx.admin.roleIds, this.ctx.admin.username === 'admin');
        if (!_.isEmpty(menus)) {
            menus.forEach(e => {
                const parentMenu = menus.filter(m => {
                    e.parentId = parseInt(e.parentId);
                    if (e.parentId == m.id) {
                        return m.name;
                    }
                });
                if (!_.isEmpty(parentMenu)) {
                    e.parentName = parentMenu[0].name;
                }
            });
        }
        return menus;
    }
    /**
     * 修改之后
     * @param param
     */
    async modifyAfter(param) {
        if (param.id) {
            await this.refreshPerms(param.id);
        }
    }
    /**
     * 根据角色获得权限信息
     * @param {[]} roleIds 数组
     */
    async getPerms(roleIds) {
        let perms = [];
        if (!_.isEmpty(roleIds)) {
            const result = await this.nativeQuery(`SELECT a.perms FROM base_sys_menu a ${this.setSql(!roleIds.includes('1'), 'JOIN base_sys_role_menu b on a.id = b.menuId AND b.roleId in (?)', [roleIds])}
            where 1=1 and a.perms is not NULL
            `, [roleIds]);
            if (result) {
                result.forEach(d => {
                    if (d.perms) {
                        perms = perms.concat(d.perms.split(','));
                    }
                });
            }
            perms = _.uniq(perms);
            perms = _.remove(perms, n => {
                return !_.isEmpty(n);
            });
        }
        return _.uniq(perms);
    }
    /**
     * 获得用户菜单信息
     * @param roleIds
     * @param isAdmin 是否是超管
     */
    async getMenus(roleIds, isAdmin) {
        return await this.nativeQuery(`
        SELECT
            a.*
        FROM
            base_sys_menu a
        ${this.setSql(!isAdmin, 'JOIN base_sys_role_menu b on a.id = b.menuId AND b.roleId in (?)', [roleIds])}
        GROUP BY a.id
        ORDER BY
            orderNum ASC`);
    }
    /**
     * 删除
     * @param ids
     */
    async delete(ids) {
        let idArr;
        if (ids instanceof Array) {
            idArr = ids;
        }
        else {
            idArr = ids.split(',');
        }
        for (const id of idArr) {
            await this.baseSysMenuEntity.delete({ id });
            await this.delChildMenu(id);
        }
    }
    /**
     * 删除子菜单
     * @param id
     */
    async delChildMenu(id) {
        await this.refreshPerms(id);
        const delMenu = await this.baseSysMenuEntity.find({ parentId: id });
        if (_.isEmpty(delMenu)) {
            return;
        }
        const delMenuIds = delMenu.map(e => {
            return e.id;
        });
        await this.baseSysMenuEntity.delete(delMenuIds);
        for (const menuId of delMenuIds) {
            await this.delChildMenu(menuId);
        }
    }
    /**
     * 更新权限
     * @param menuId
     */
    async refreshPerms(menuId) {
        const users = await this.nativeQuery('select b.userId from base_sys_role_menu a left join base_sys_user_role b on a.roleId = b.roleId where a.menuId = ? group by b.userId', [menuId]);
        // 刷新admin权限
        await this.baseSysPermsService.refreshPerms(1);
        if (!_.isEmpty(users)) {
            // 刷新其他权限
            for (const user of users) {
                await this.baseSysPermsService.refreshPerms(user.userId);
            }
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysMenuService.prototype, "ctx", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(menu_1.BaseSysMenuEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysMenuService.prototype, "baseSysMenuEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysMenuService.prototype, "baseSysPermsService", void 0);
BaseSysMenuService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysMenuService);
exports.BaseSysMenuService = BaseSysMenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL3N5cy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBZ0Q7QUFDaEQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnREFBMEQ7QUFDMUQsNEJBQTRCO0FBQzVCLG1DQUE4QztBQUc5Qzs7R0FFRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0JBQVc7SUFVakQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDM0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxJQUFJLEVBQUUsQ0FBQyxDQUNyRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FDcEMsQ0FBQztRQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xDLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFB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