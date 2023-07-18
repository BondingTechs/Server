import { BaseController } from '@cool-midway/core';
import { CollectionService } from '../../service';
/**
 * 描述
 */
export declare class CollectionController extends BaseController {
    collectionService: CollectionService;
    /**
     * 分頁
     * @param param
     */
    getPage(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 分頁
     * @param param
     */
    deleteItem(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
