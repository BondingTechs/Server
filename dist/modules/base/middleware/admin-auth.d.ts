import { NextFunction, Context } from '@midwayjs/koa';
import { IMiddleware, IMidwayApplication } from '@midwayjs/core';
import { CacheManager } from '@midwayjs/cache';
/**
 * 權限校驗
 */
export declare class BaseAdminAuthMiddleware implements IMiddleware<Context, NextFunction> {
    prefix: any;
    jwtConfig: any;
    cacheManager: CacheManager;
    app: IMidwayApplication;
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
