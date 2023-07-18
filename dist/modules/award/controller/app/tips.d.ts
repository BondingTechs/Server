import { BaseController } from '@cool-midway/core';
import { TipAppService } from '../../service/app/tips';
/**
 * 描述
 */
export declare class TipAppController extends BaseController {
    tipAppService: TipAppService;
    /**
     * 小知識信息
     */
    getInfo(param: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 今日小知識
     */
    today(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 今日小之日
     */
    collection(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
