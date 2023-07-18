import { BaseEventEntity } from '../../../base/entity/baseEvent';
export declare class AwardTipsEntity extends BaseEventEntity {
    title: string;
    thumbnail: string;
    content: string;
    publishDate: String;
    status: number;
    views: number;
}
