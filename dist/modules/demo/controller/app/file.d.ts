import { BaseController } from '@cool-midway/core';
import { Context } from 'koa';
import { CoolFile } from '@cool-midway/file';
/**
 * 文件上传
 */
export declare class AppDemoFileController extends BaseController {
    ctx: Context;
    file: CoolFile;
    uplod(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    uploadMode(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    downAndUpload(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
