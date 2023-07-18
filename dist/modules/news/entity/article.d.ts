import { BaseDeleteEntity } from '../../../base/entity/baseDelete';
export declare class NewsArticleEntity extends BaseDeleteEntity {
    title: string;
    metaTitle: string;
    metaDescription: string;
    slug: string;
    content: string;
    contentPreview: string;
    excerpt: string;
    thumbnail: string;
    commentOpen: boolean;
    isTop: boolean;
    isHot: boolean;
    status: number;
    publishTime: Date;
    type: number;
    videoUrl: string;
    authorAvatar: string;
    authorName: string;
    authorIntro: string;
    categories: number[];
}
