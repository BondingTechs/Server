/**
 * 返回码
 */
export declare enum RESCODE {
    SUCCESS = 1000,
    COMMFAIL = 1001,
    VALIDATEFAIL = 1002,
    COREFAIL = 1003
}
/**
 * 返回信息
 */
export declare enum RESMESSAGE {
    SUCCESS = "success",
    COMMFAIL = "comm fail",
    VALIDATEFAIL = "validate fail",
    COREFAIL = "core fail"
}
/**
 * 错误提示
 */
export declare enum ERRINFO {
    NOENTITY = "\u672A\u8BBE\u7F6E\u64CD\u4F5C\u5B9E\u4F53",
    NOID = "\u67E5\u8BE2\u53C2\u6570[id]\u4E0D\u5B58\u5728",
    SORTFIELD = "\u6392\u5E8F\u53C2\u6570\u4E0D\u6B63\u786E"
}
