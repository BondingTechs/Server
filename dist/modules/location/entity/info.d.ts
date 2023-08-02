import { BaseEntity } from '@cool-midway/core';
/**
 * 字典信息
 */
export declare class IPInfoEntity extends BaseEntity {
    ip: string;
    country: string;
    city: string;
    district: string;
    latitude: string;
    longitude: string;
    timezone: string;
}
