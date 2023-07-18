import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysConfEntity } from '../../entity/sys/conf';
/**
 * 系统配置
 */
export declare class BaseSysConfService extends BaseService {
    baseSysConfEntity: Repository<BaseSysConfEntity>;
    /**
     * 获得配置参数值
     * @param key
     */
    getValue(key: any): Promise<string>;
    /**
     * 更新配置参数
     * @param cKey
     * @param cValue
     */
    updateVaule(cKey: any, cValue: any): Promise<void>;
}
