import { BaseEntity } from '@cool-midway/core';
/**
 * 任务日志
 */
export declare class TaskLogEntity extends BaseEntity {
    taskId: number;
    status: number;
    detail: string;
}
