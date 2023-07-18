import { BaseService } from '@cool-midway/core';
import { ILogger } from '@midwayjs/logger';
/**
 * 描述
 */
export declare class TaskDemoService extends BaseService {
    logger: ILogger;
    /**
     * 描述
     */
    test(): Promise<string>;
}
