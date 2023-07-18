import { NextFunction, Context } from '@midwayjs/koa';
import { IMiddleware } from '@midwayjs/core';
/**
 * 日志中间件
 */
export declare class BaseLogMiddleware implements IMiddleware<Context, NextFunction> {
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
