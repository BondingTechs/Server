import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysMenuEntity } from '../../entity/sys/menu';
import { BaseSysPermsService } from './perms';
import { Context } from '@midwayjs/koa';
/**
 * 菜单
 */
export declare class BaseSysMenuService extends BaseService {
    ctx: Context;
    baseSysMenuEntity: Repository<BaseSysMenuEntity>;
    baseSysPermsService: BaseSysPermsService;
    update(param: any): Promise<void>;
    /**
     * 获得所有菜单
     */
    list(): Promise<any>;
    /**
     * 修改之后
     * @param param
     */
    modifyAfter(param: any): Promise<void>;
    /**
     * 根据角色获得权限信息
     * @param {[]} roleIds 数组
     */
    getPerms(roleIds: any): Promise<any>;
    /**
     * 获得用户菜单信息
     * @param roleIds
     * @param isAdmin 是否是超管
     */
    getMenus(roleIds: any, isAdmin: any): Promise<any>;
    /**
     * 删除
     * @param ids
     */
    delete(ids: any): Promise<void>;
    /**
     * 删除子菜单
     * @param id
     */
    private delChildMenu;
    /**
     * 更新权限
     * @param menuId
     */
    refreshPerms(menuId: any): Promise<void>;
}
