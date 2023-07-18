import { BaseService } from '@cool-midway/core';
import { BaseSysMenuService } from './menu';
import { BaseSysRoleService } from './role';
import { BaseSysDepartmentService } from './department';
import { Context } from '@midwayjs/koa';
import { CacheManager } from '@midwayjs/cache';
/**
 * 权限
 */
export declare class BaseSysPermsService extends BaseService {
    cacheManager: CacheManager;
    baseSysMenuService: BaseSysMenuService;
    baseSysRoleService: BaseSysRoleService;
    baseSysDepartmentService: BaseSysDepartmentService;
    ctx: Context;
    /**
     * 刷新权限
     * @param userId 用户ID
     */
    refreshPerms(userId: any): Promise<void>;
    /**
     * 获得权限菜单
     * @param roleIds
     */
    permmenu(roleIds: number[]): Promise<{
        perms: any;
        menus: any;
    }>;
    /**
     * 根据用户ID获得部門权限
     * @param userId
     * @return 部門ID数组
     */
    departmentIds(userId: number): Promise<any>;
}
