import { BaseController } from '@cool-midway/core';
import { AdminNewsArticleService } from '../../service/admin/article';
/**
 * 描述
 */
export declare class AdminNewsArticleController extends BaseController {
    adminNewsArticleService: AdminNewsArticleService;
    /**
     * 瀏覽閱讀紀錄
     */
    views(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 瀏覽閱讀紀錄
     */
    likes(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 瀏覽閱讀紀錄
     */
    collections(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
