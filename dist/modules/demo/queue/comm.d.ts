import { BaseCoolQueue } from '@cool-midway/task';
import { IMidwayApplication } from '@midwayjs/core';
/**
 * 普通队列
 */
export declare class DemoCommQueue extends BaseCoolQueue {
    app: IMidwayApplication;
    data(job: any, done: any): Promise<void>;
}
