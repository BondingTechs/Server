import { BaseEntity } from '@cool-midway/core';
/**
 * 任务信息
 */
export declare class TaskInfoEntity extends BaseEntity {
    jobId: string;
    repeatConf: string;
    name: string;
    cron: string;
    limit: number;
    every: number;
    remark: string;
    status: number;
    startDate: Date;
    endDate: Date;
    data: string;
    service: string;
    type: number;
    nextRunTime: Date;
    taskType: number;
}
