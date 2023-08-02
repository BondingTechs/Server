import { BaseService } from '@cool-midway/core';
import { Context } from '@midwayjs/socketio';
import { Repository } from 'typeorm';
import { IPHistoryEntity } from '../../entity/history';
/**
 * 描述
 */
export declare class IPHistoryService extends BaseService {
    ipHistoryEntity: Repository<IPHistoryEntity>;
    ctx: Context;
}
