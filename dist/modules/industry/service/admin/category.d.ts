import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { IndustryCategoryEntity } from '../../entity/category';
import { NewsArticleCategoryEntity } from '../../../news/entity/articleCategory';
import { AwardTipsCategoryEntity } from '../../../award/entity/tips_category';
/**
 * 描述
 */
export declare class AdminIndustryCategoryService extends BaseService {
    industryCategoryEntity: Repository<IndustryCategoryEntity>;
    awardTipsCategoryEntity: Repository<AwardTipsCategoryEntity>;
    newsArticleCategoryEntity: Repository<NewsArticleCategoryEntity>;
    list(): Promise<any[]>;
}
