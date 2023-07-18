import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { NewsArticleCommentEntity } from '../../entity/comment';
import { NewsArticleEntity } from '../../entity/article';
import { NewsArticleCommentLikeEntity } from '../../entity/commentLike';
import { BaseSysUserEntity } from '../../../base/entity/sys/user';
/**
 * 描述
 */
export declare class NewsCommentApiService extends BaseService {
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    newsArticleEntity: Repository<NewsArticleEntity>;
    newsArticleCommentEntity: Repository<NewsArticleCommentEntity>;
    newsArticleCommentLikeEntity: Repository<NewsArticleCommentLikeEntity>;
    ctx: any;
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
    detectChild(list: any): Promise<void>;
    /**
     * 取得子項目
     * @param query
     */
    child(param: any): Promise<any>;
    /**
     * 新增
     * @param query
     */
    create(query: any): Promise<{
        id: number;
        content: any;
        parentId: any;
        createTime: Date;
        isLike: boolean;
        likes: string;
        comments: string;
        hasChild: boolean;
        author: string;
    }>;
    /**
     * 修改
     * @param query
     */
    update(query: any): Promise<void>;
    /**
     * 刪除
     * @param ids
     */
    delete(ids: any): Promise<void>;
    like(params: any): Promise<any>;
}
