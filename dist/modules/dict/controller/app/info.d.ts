import { BaseController } from '@cool-midway/core';
import { DictInfoService } from '../../service/info';
/**
 * 字典信息
 */
export declare class AppDictInfoController extends BaseController {
    dictInfoService: DictInfoService;
    data(types?: string[]): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
