import { BaseEntity } from '@cool-midway/core';
/**
 * 参数配置
 */
export declare class BaseSysParamEntity extends BaseEntity {
    keyName: string;
    name: string;
    data: string;
    dataType: number;
    remark: string;
}
