import { BaseController } from '@cool-midway/core';
/**
 * swagger 文档
 */
export declare class AppSwaggerController extends BaseController {
    create(id: number): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
