import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysLogEntity } from '../../entity/sys/log';
import { Utils } from '../../../../comm/utils';
import { BaseSysConfService } from './conf';
import { Context } from '@midwayjs/koa';
/**
 * 描述
 */
export declare class BaseSysLogService extends BaseService {
    ctx: any;
    utils: Utils;
    baseSysLogEntity: Repository<BaseSysLogEntity>;
    baseSysConfService: BaseSysConfService;
    /**
     * 记录
     * @param url URL地址
     * @param params 参数
     * @param userId 用户ID
     */
    record(context: Context, url: any, params: any, userId: any): Promise<void>;
    /**
     * 日志
     * @param isAll 是否清除全部
     */
    clear(isAll?: any): Promise<void>;
}
