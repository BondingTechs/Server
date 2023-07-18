import { NextFunction, Context } from '@midwayjs/koa';
import { IMiddleware } from '@midwayjs/core';
import { TaskInfoQueue } from '../queue/task';
/**
 * 任務中間件
 */
export declare class TaskMiddleware implements IMiddleware<Context, NextFunction> {
    taskInfoQueue: TaskInfoQueue;
    resolve(): (ctx: Context, next: NextFunction) => Promise<void>;
}
