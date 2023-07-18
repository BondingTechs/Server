import { BaseController } from '@cool-midway/core';
import { TaskInfoService } from '../../service/info';
/**
 * 任务
 */
export declare class TaskInfoController extends BaseController {
    taskInfoService: TaskInfoService;
    /**
     * 手动执行一次
     */
    once(id: number): Promise<void>;
    /**
     * 暂停任务
     */
    stop(id: number): Promise<void>;
    /**
     * 开始任务
     */
    start(id: number, type: number): Promise<void>;
    /**
     * 日志
     */
    log(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
