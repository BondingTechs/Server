import { BaseController, CoolEps } from '@cool-midway/core';
import { BaseApiUserService } from '../../service/app/user';
import { BaseSysParamService } from '../../service/sys/param';
import { Context } from '@midwayjs/koa';
import { AppNewsArticleService } from '../../../news/service/app/article';
import { CollectionService } from '../../../collection/service';
import { TipAppService } from '../../../award/service/app/tips';
/**
 * 不需要登錄的後台接口
 */
export declare class BaseAppUserController extends BaseController {
    newsArticleApiService: AppNewsArticleService;
    collectionService: CollectionService;
    baseApiUserService: BaseApiUserService;
    baseSysParamService: BaseSysParamService;
    tipAppService: TipAppService;
    ctx: Context;
    eps: CoolEps;
    /**
     * 收藏
     * @param params
     */
    /**
     * 瀏覽紀錄
     * @param params
     */
    articleViewHistory(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 收藏
     * @param params
     */
    myCollections(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 小知識
     * @param params
     */
    myTips(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
