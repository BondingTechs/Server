import { BaseController } from '@cool-midway/core';
import { NewsCommentApiService } from '../../service/app/comment';
/**
 * 描述
 */
export declare class NewsCommentApiController extends BaseController {
    newsCommentService: NewsCommentApiService;
    /**
     * 新增
     * @param param
     */
    create(query: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 點讚
     * @param param
     */
    like(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
