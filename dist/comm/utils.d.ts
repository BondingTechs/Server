import { Context } from '@midwayjs/koa';
/**
 * 帮助类
 */
export declare class Utils {
    baseDir: any;
    /**
     * 获得请求IP
     */
    getReqIP(ctx: Context): Promise<string | string[]>;
    /**
     * 根据IP获得请求地址
     * @param ip 为空时则为当前请求的IP地址
     */
    getIpAddr(ctx: Context, ip?: string | string[]): Promise<any>;
    /**
     * 去除对象的空值属性
     * @param obj
     */
    removeEmptyP(obj: any): Promise<void>;
    /**
     * 线程阻塞毫秒数
     * @param ms
     */
    sleep(ms: any): Promise<unknown>;
    /**
     * 隨機字串長度
     * @param len
     */
    randomString(len: number): string;
}
