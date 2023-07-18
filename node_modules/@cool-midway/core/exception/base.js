"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
/**
 * 异常基类
 */
class BaseException extends Error {
    constructor(name, code, message) {
        super(message);
        this.name = name;
        this.status = code;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=base.js.map