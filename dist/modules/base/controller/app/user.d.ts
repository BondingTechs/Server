import { BaseController, CoolEps } from '@cool-midway/core';
import { BaseApiUserService } from '../../service/app/user';
import { BaseSysParamService } from '../../service/sys/param';
import { Context } from '@midwayjs/koa';
import { UserIdentityService } from '../../service/app/identity';
/**
 * 不需要登錄的後台接口
 */
export declare class BaseAppUserController extends BaseController {
    baseApiUserService: BaseApiUserService;
    baseSysParamService: BaseSysParamService;
    userIdentityService: UserIdentityService;
    ctx: Context;
    eps: CoolEps;
    /**
     * 取得個人資料
     */
    person(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 修改個人資料
     */
    personUpdate(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 重設密碼
     */
    resetPassword(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 綁定Email
     */
    changePhone(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 綁定Email
     */
    emailBinding(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 退出
     */
    logout(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    identityCert(param: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 身份驗證
     */
    identityVerify(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
