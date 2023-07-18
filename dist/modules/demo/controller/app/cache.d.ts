import { DemoCacheService } from './../../service/cache';
import { BaseController } from '@cool-midway/core';
import { CacheManager } from '@midwayjs/cache';
/**
 * 缓存
 */
export declare class AppDemoCacheController extends BaseController {
    cacheManager: CacheManager;
    demoCacheService: DemoCacheService;
    /**
     * 设置缓存
     * @returns
     */
    set(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 获得缓存
     * @returns
     */
    get(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
