import { BaseController } from '@cool-midway/core';
import { BaseSysParamService } from '../../../service/sys/param';
import { Context } from '@midwayjs/koa';
/**
 * 参数配置
 */
export declare class BaseSysParamController extends BaseController {
    baseSysParamService: BaseSysParamService;
    ctx: Context;
    /**
     * 根据配置参数key获得网页内容(富文本)
     */
    htmlByKey(key: string): Promise<void>;
}
