import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysDepartmentEntity } from '../../entity/sys/department';
import { BaseSysRoleDepartmentEntity } from '../../entity/sys/role_department';
import { BaseSysPermsService } from './perms';
/**
 * 描述
 */
export declare class BaseSysDepartmentService extends BaseService {
    baseSysDepartmentEntity: Repository<BaseSysDepartmentEntity>;
    baseSysRoleDepartmentEntity: Repository<BaseSysRoleDepartmentEntity>;
    baseSysPermsService: BaseSysPermsService;
    ctx: any;
    /**
     * 获得部門菜单
     */
    list(): Promise<BaseSysDepartmentEntity[]>;
    /**
     * 根据多个ID获得部門权限信息
     * @param {[]} roleIds 数组
     * @param isAdmin 是否超管
     */
    getByRoleIds(roleIds: number[], isAdmin: any): Promise<any>;
    /**
     * 部門排序
     * @param params
     */
    order(params: any): Promise<void>;
    /**
     * 删除
     */
    delete(ids: number[]): Promise<void>;
}
