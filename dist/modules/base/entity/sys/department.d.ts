import { BaseEntity } from '@cool-midway/core';
/**
 * 部門
 */
export declare class BaseSysDepartmentEntity extends BaseEntity {
    name: string;
    parentId: number;
    orderNum: number;
    parentName: string;
}
