import { CommonSchedule } from '@midwayjs/decorator';
import { BaseSysLogService } from '../service/sys/log';
import { ILogger } from '@midwayjs/logger';
/**
 * 日志定时任务
 */
export declare class BaseLogSchedule implements CommonSchedule {
    baseSysLogService: BaseSysLogService;
    logger: ILogger;
    exec(): Promise<void>;
}
