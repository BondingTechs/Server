import { BaseEntity } from '@cool-midway/core';
/**
 * 系统日志
 */
export declare class BaseSysLogEntity extends BaseEntity {
    userId: number;
    action: string;
    ip: string;
    ipAddr: string;
    params: string;
}
