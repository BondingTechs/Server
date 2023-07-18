"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERRINFO = exports.RESMESSAGE = exports.RESCODE = void 0;
/**
 * 返回码
 */
var RESCODE;
(function (RESCODE) {
    // 成功
    RESCODE[RESCODE["SUCCESS"] = 1000] = "SUCCESS";
    // 失败
    RESCODE[RESCODE["COMMFAIL"] = 1001] = "COMMFAIL";
    // 参数验证失败
    RESCODE[RESCODE["VALIDATEFAIL"] = 1002] = "VALIDATEFAIL";
    // 参数验证失败
    RESCODE[RESCODE["COREFAIL"] = 1003] = "COREFAIL";
})(RESCODE = exports.RESCODE || (exports.RESCODE = {}));
/**
 * 返回信息
 */
var RESMESSAGE;
(function (RESMESSAGE) {
    // 成功
    RESMESSAGE["SUCCESS"] = "success";
    // 失败
    RESMESSAGE["COMMFAIL"] = "comm fail";
    // 参数验证失败
    RESMESSAGE["VALIDATEFAIL"] = "validate fail";
    // 核心异常
    RESMESSAGE["COREFAIL"] = "core fail";
})(RESMESSAGE = exports.RESMESSAGE || (exports.RESMESSAGE = {}));
/**
 * 错误提示
 */
var ERRINFO;
(function (ERRINFO) {
    ERRINFO["NOENTITY"] = "\u672A\u8BBE\u7F6E\u64CD\u4F5C\u5B9E\u4F53";
    ERRINFO["NOID"] = "\u67E5\u8BE2\u53C2\u6570[id]\u4E0D\u5B58\u5728";
    ERRINFO["SORTFIELD"] = "\u6392\u5E8F\u53C2\u6570\u4E0D\u6B63\u786E";
})(ERRINFO = exports.ERRINFO || (exports.ERRINFO = {}));
//# sourceMappingURL=global.js.map