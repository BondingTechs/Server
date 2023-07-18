import { BaseEntity } from '@cool-midway/core';
/**
 * 角色
 */
export declare class BaseSysRoleEntity extends BaseEntity {
    userId: string;
    name: string;
    label: string;
    remark: string;
    relevance: number;
}
