import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { AwardTipsCategoryEntity } from '../../../award/entity/tips_category';
import { NewsArticleCategoryEntity } from '../../../news/entity/articleCategory';
import { IndustryCategoryEntity } from '../../entity/category';
import { AdminIndustryCategoryService } from '../admin/category';
/**
 * 描述
 */
export declare class AppIndustryCategoryService extends BaseService {
    industryCategoryEntity: Repository<IndustryCategoryEntity>;
    adminIndustryCategoryService: AdminIndustryCategoryService;
    awardTipsCategoryEntity: Repository<AwardTipsCategoryEntity>;
    newsArticleCategoryEntity: Repository<NewsArticleCategoryEntity>;
    list(): Promise<any[]>;
    info(query: any): Promise<IndustryCategoryEntity>;
}
