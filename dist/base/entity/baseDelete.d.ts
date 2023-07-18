import { BaseEventEntity } from './baseEvent';
export declare class BaseDeleteEntity extends BaseEventEntity {
    deleteBy: number;
    deleteTime: Date;
}
