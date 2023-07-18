import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { NewsArticleCommentEntity } from '../../entity/comment';
/**
 * 描述
 */
export declare class NewsArticleCommentAdminService extends BaseService {
    newsArticleCommentEntity: Repository<NewsArticleCommentEntity>;
    ctx: any;
    add(param: any): Promise<any>;
    update(param: any): Promise<any>;
    page(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
    list(query: any): Promise<any>;
    info(id: any): Promise<NewsArticleCommentEntity>;
}
