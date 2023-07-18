import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysRoleEntity } from '../../entity/sys/role';
import { BaseSysUserRoleEntity } from '../../entity/sys/user_role';
import { BaseSysRoleMenuEntity } from '../../entity/sys/role_menu';
import { BaseSysRoleDepartmentEntity } from '../../entity/sys/role_department';
import { BaseSysPermsService } from './perms';
/**
 * 角色
 */
export declare class BaseSysRoleService extends BaseService {
    baseSysRoleEntity: Repository<BaseSysRoleEntity>;
    baseSysUserRoleEntity: Repository<BaseSysUserRoleEntity>;
    baseSysRoleMenuEntity: Repository<BaseSysRoleMenuEntity>;
    baseSysRoleDepartmentEntity: Repository<BaseSysRoleDepartmentEntity>;
    baseSysPermsService: BaseSysPermsService;
    ctx: any;
    /**
     * 根据用户ID获得所有用户角色
     * @param userId
     */
    getByUser(userId: number): Promise<number[]>;
    /**
     *
     * @param param
     */
    modifyAfter(param: any): Promise<void>;
    /**
     * 更新权限
     * @param roleId
     * @param menuIdList
     * @param departmentIds
     */
    updatePerms(roleId: any, menuIdList?: any, departmentIds?: any[]): Promise<void>;
    /**
     * 角色信息
     * @param id
     */
    info(id: any): Promise<{}>;
    list(): Promise<BaseSysRoleEntity[]>;
}
