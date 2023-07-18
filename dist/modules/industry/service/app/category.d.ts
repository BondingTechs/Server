import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { IndustryCategoryEntity } from '../../entity/category';
import { AdminIndustryCategoryService } from '../admin/category';
/**
 * 描述
 */
export declare class AppIndustryCategoryService extends BaseService {
    industryCategoryEntity: Repository<IndustryCategoryEntity>;
    adminIndustryCategoryService: AdminIndustryCategoryService;
    list(): Promise<any[]>;
    info(query: any): Promise<IndustryCategoryEntity>;
}
