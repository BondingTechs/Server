/**
 * 异常基类
 */
export declare class BaseException extends Error {
    status: number;
    constructor(name: string, code: number, message: string);
}
