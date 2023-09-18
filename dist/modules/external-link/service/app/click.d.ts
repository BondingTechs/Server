import { BaseService } from '@cool-midway/core';
import { Context } from 'koa';
import { Repository } from 'typeorm';
import { LinkClickEntity } from '../../entity/click';
import { LinkInfoEntity } from '../../entity/info';
/**
 * 描述
 */
export declare class LinkClickService extends BaseService {
    linkInfoEntity: Repository<LinkInfoEntity>;
    linkClickEntity: Repository<LinkClickEntity>;
    ctx: Context;
    add(param: any): Promise<({
        infoId: number;
        userId: any;
    } & LinkClickEntity) | ({
        infoId: number;
        userId: any;
    } & LinkClickEntity)>;
}
