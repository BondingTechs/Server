import { BaseController } from '@cool-midway/core';
import { AppIndustryCategoryService } from '../../service/app/category';
/**
 * 描述
 */
export declare class AdminIndustryCategoryController extends BaseController {
    appIndustryCategoryService: AppIndustryCategoryService;
    information(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
