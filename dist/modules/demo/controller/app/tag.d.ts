import { BaseController, CoolUrlTagData } from '@cool-midway/core';
/**
 * 测试给URL打标签
 */
export declare class DemoAppTagController extends BaseController {
    tag: CoolUrlTagData;
    /**
     * 获得标签数据， 如可以标记忽略token的url，然后在中间件判断
     * @returns
     */
    data(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
