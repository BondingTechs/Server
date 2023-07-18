import { BaseController } from '@cool-midway/core';
import { DemoCommQueue } from '../../queue/comm';
import { DemoGetterQueue } from '../../queue/getter';
/**
 * 队列
 */
export declare class DemoQueueController extends BaseController {
    demoCommQueue: DemoCommQueue;
    demoGetterQueue: DemoGetterQueue;
    /**
     * 发送数据到队列
     */
    queue(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    addGetter(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 获得队列中的数据，只有当队列类型为getter时有效
     */
    getter(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
