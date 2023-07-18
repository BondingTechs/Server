import { CoolUrlTagData } from '@cool-midway/core';
import { IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
export declare class DemoMiddleware implements IMiddleware<Context, NextFunction> {
    tag: CoolUrlTagData;
    resolve(): (ctx: Context, next: NextFunction) => Promise<any>;
}
