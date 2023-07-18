import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { AwardTipsEntity } from '../../entity/tips';
import { AwardTipsCategoryEntity } from '../../entity/tips_category';
/**
 * 描述
 */
export declare class AdminAwardTipsService extends BaseService {
    awardTipsEntity: Repository<AwardTipsEntity>;
    awardTipsCategoryEntity: Repository<AwardTipsCategoryEntity>;
    ctx: any;
    add(param: any): Promise<any>;
    update(param: any): Promise<any>;
    info(id: any): Promise<{
        categories: any;
        title: string;
        thumbnail: string;
        content: string;
        publishDate: String;
        status: number;
        views: number;
        createBy: number;
        updateBy: number;
        id: number;
        createTime: Date;
        updateTime: Date;
    }>;
    /**
     * 更新分類关系
     * @param user
     */
    updateCategories(tip: any): Promise<void>;
}
