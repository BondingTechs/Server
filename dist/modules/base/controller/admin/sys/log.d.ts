import { BaseController } from '@cool-midway/core';
import { BaseSysConfService } from '../../../service/sys/conf';
import { BaseSysLogService } from '../../../service/sys/log';
/**
 * 系统日志
 */
export declare class BaseSysLogController extends BaseController {
    baseSysLogService: BaseSysLogService;
    baseSysConfService: BaseSysConfService;
    /**
     * 清空日志
     */
    clear(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 设置日志保存时间
     */
    setKeep(value: number): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 获得日志保存时间
     */
    getKeep(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
