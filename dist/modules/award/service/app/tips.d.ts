import { BaseService } from '@cool-midway/core';
import { Context } from 'koa';
import { Repository } from 'typeorm';
import { AwardTipsEntity } from '../../entity/tips';
import { AwardTipsUserEntity } from '../../entity/tips_user';
import { AwardTipsCollectionEntity } from '../../entity/tips_collection';
/**
 * 描述
 */
export declare class TipAppService extends BaseService {
    tipEntity: Repository<AwardTipsEntity>;
    tipViewEntity: Repository<AwardTipsUserEntity>;
    tipCollectionEntity: Repository<AwardTipsCollectionEntity>;
    ctx: Context;
    /**
     * 根据ID获得信息
     * @param id
     */
    getInfo({ id }: {
        id: any;
    }): Promise<any>;
    /**
     * 取得小知識分頁
     *
     */
    page({ page, size }: {
        page?: number;
        size?: number;
    }): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            /**
             * 根据ID获得信息
             * @param id
             */
            total: number;
        };
    }>;
    /**
     * 取得今日小知識
     *
     */
    today(): Promise<AwardTipsEntity>;
    formatDateInGMT8(date: any): Promise<string>;
    collection({ id }: {
        id: any;
    }): Promise<{
        id: any;
        status: any;
    }>;
    viewHistory(params: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            /**
             * 根据ID获得信息
             * @param id
             */
            total: number;
        };
    }>;
}
