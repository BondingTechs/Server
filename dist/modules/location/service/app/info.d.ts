import { BaseService } from '@cool-midway/core';
import { Context } from 'koa';
import { Repository } from 'typeorm';
import { IPInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class IPInfoService extends BaseService {
    ipInfoEntity: Repository<IPInfoEntity>;
    ctx: Context;
    add(param: any): Promise<any>;
}
