import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { IPAgentEntity } from '../../entity/agent';
/**
 * 描述
 */
export declare class IpAgentService extends BaseService {
    ipAgentEntity: Repository<IPAgentEntity>;
    add(param: any): Promise<any>;
}
