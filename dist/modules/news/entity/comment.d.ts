import { BaseDeleteEntity } from '../../../base/entity/baseDelete';
/**
 * 描述
 */
export declare class NewsArticleCommentEntity extends BaseDeleteEntity {
    articleId: number;
    content: string;
    parentId: number;
    authorId: number;
}
