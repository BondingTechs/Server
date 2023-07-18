import { BaseController } from '@cool-midway/core';
import { BaseAppAuthService } from '../../service/app/auth';
import { BaseApiUserService } from '../../service/app/user';
/**
 * 商品
 */
export declare class AppAuthController extends BaseController {
    baseAppAuthService: BaseAppAuthService;
    baseApiUserService: BaseApiUserService;
    /**
     * 登錄
     * @param login
     */
    login(login: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 註冊
     * @param register
     */
    register(register: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 註冊
     * @param forgot
     */
    forgot(forgot: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 獲得驗證碼
     * @param captcha
     */
    captcha(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 刷新token
     */
    refreshToken(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    /**
     * 驗證Email
     */
    emailVerify(params: any): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
