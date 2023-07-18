import { BaseEntity } from '@cool-midway/core';
/**
 * 字典信息
 */
export declare class DictInfoEntity extends BaseEntity {
    typeId: number;
    name: string;
    orderNum: number;
    type: string;
    remark: string;
    parentId: number;
}
