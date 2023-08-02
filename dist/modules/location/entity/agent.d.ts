import { BaseEntity } from '@cool-midway/core';
/**
 * 字典信息
 */
export declare class IPAgentEntity extends BaseEntity {
    infoId: number;
    userAgentString: string;
    name: string;
    type: string;
    version: string;
    versionMajor: string;
    device: string;
    engine: string;
    operatingSystem: string;
}
