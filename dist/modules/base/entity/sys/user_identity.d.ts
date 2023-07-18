import { BaseEventEntity } from '../../../../base/entity/baseEvent';
/**
 * 描述
 */
export declare class BaseUserIdentityEntity extends BaseEventEntity {
    userId: number;
    positiveId: number;
    negativeId: number;
}
