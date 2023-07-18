import { BaseEntity } from '@cool-midway/core';
/**
 * 描述
 */
export declare class IndustryCategoryEntity extends BaseEntity {
    name: string;
    slug: string;
    description: string;
    parentId: number;
    icon: string;
    orderNum: number;
    tipCount: number;
    articleCount: number;
}
