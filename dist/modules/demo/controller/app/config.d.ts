import { BaseController } from '@cool-midway/core';
/**
 * 配置
 */
export declare class DemoConfigController extends BaseController {
    demoConfig: any;
    get(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
