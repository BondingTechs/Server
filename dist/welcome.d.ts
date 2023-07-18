import { Context } from '@midwayjs/koa';
/**
 * 欢迎界面
 */
export declare class WelcomeController {
    ctx: Context;
    welcome(): Promise<void>;
}
