import { BaseController } from '@cool-midway/core';
import { BaseSysDepartmentService } from '../../../service/sys/department';
/**
 * 部門
 */
export declare class BaseDepartmentController extends BaseController {
    baseDepartmentService: BaseSysDepartmentService;
    /**
     * 部門排序
     */
    order(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
