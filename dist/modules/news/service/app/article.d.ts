import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { NewsArticleEntity } from '../../entity/article';
import { NewsArticleCommentEntity } from '../../entity/comment';
import { NewsArticleLikeEntity } from '../../entity/articleLike';
import { NewsArticleViewEntity } from '../../entity/articleView';
import { CacheManager } from '@midwayjs/cache';
import { BaseSysUserEntity } from '../../../base/entity/sys/user';
import { NewsArticleCategoryEntity } from '../../entity/articleCategory';
import { NewsArticleCollectionEntity } from '../../entity/articleCollection';
/**
 * 描述
 */
export declare class AppNewsArticleService extends BaseService {
    newsArticleEntity: Repository<NewsArticleEntity>;
    newsArticleCategoryEntity: Repository<NewsArticleCategoryEntity>;
    newsArticleCommentEntity: Repository<NewsArticleCommentEntity>;
    newsArticleLikeEntity: Repository<NewsArticleLikeEntity>;
    newsArticleViewEntity: Repository<NewsArticleViewEntity>;
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    newsArticleCollectionEntity: Repository<NewsArticleCollectionEntity>;
    ctx: any;
    cacheManager: CacheManager;
    /**
     * 新增
     * @param article
     */
    add(article: any): Promise<any>;
    /**
     * 取得內容
     * @param query
     */
    getArticle(query: any): Promise<any>;
    /**
     * 分页查询
     * @param query
     */
    page(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
    /**
     * 列表查询
     * @param query
     */
    list(query: any): Promise<any>;
    /**
     * 取得分類
     * @param query
     */
    getCategories(): Promise<any>;
    /**
     * 關聯評論
     * @param ids
     */
    getCommentByArticle(article: any): Promise<NewsArticleCommentEntity[]>;
    /**
     * 按讚
     * @param param
     */
    articleLike(param: any): Promise<{
        id: any;
        status: any;
    }>;
    /**
     * 觀看
     * @param param
     */
    articleView({ id }: {
        id: any;
    }): Promise<void>;
    collection({ id }: {
        id: any;
    }): Promise<{
        id: any;
        status: any;
    }>;
    viewHistory(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
}
