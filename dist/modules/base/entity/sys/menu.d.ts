import { BaseEntity } from '@cool-midway/core';
/**
 * 菜单
 */
export declare class BaseSysMenuEntity extends BaseEntity {
    parentId: number;
    name: string;
    router: string;
    perms: string;
    type: number;
    icon: string;
    orderNum: number;
    viewPath: string;
    keepAlive: boolean;
    parentName: string;
    isShow: boolean;
}
