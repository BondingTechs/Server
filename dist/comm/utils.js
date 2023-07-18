"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const decorator_1 = require("@midwayjs/decorator");
const ipdb = require("ipip-ipdb");
const _ = require("lodash");
/**
 * 帮助类
 */
let Utils = class Utils {
    /**
     * 获得请求IP
     */
    async getReqIP(ctx) {
        const req = ctx.req;
        return (req.headers['x-forwarded-for'] ||
            req.socket.remoteAddress.replace('::ffff:', ''));
    }
    /**
     * 根据IP获得请求地址
     * @param ip 为空时则为当前请求的IP地址
     */
    async getIpAddr(ctx, ip) {
        try {
            if (!ip) {
                ip = await this.getReqIP(ctx);
            }
            const bst = new ipdb.BaseStation(`${this.baseDir}/comm/ipipfree.ipdb`);
            const result = bst.findInfo(ip, 'CN');
            const addArr = [];
            if (result) {
                addArr.push(result.countryName);
                addArr.push(result.regionName);
                addArr.push(result.cityName);
                return _.uniq(addArr).join('');
            }
        }
        catch (err) {
            return '无法获取地址信息';
        }
    }
    /**
     * 去除对象的空值属性
     * @param obj
     */
    async removeEmptyP(obj) {
        Object.keys(obj).forEach(key => {
            if (obj[key] === null || obj[key] === '' || obj[key] === 'undefined') {
                delete obj[key];
            }
        });
    }
    /**
     * 线程阻塞毫秒数
     * @param ms
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * 隨機字串長度
     * @param len
     */
    randomString(len) {
        let maxLen = 8, min = Math.pow(16, Math.min(len, maxLen) - 1), max = Math.pow(16, Math.min(len, maxLen)) - 1, n = Math.floor(Math.random() * (max - min + 1)) + min, r = n.toString(16);
        while (r.length < len) {
            r = r + this.randomString(len - maxLen);
        }
        return r;
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], Utils.prototype, "baseDir", void 0);
Utils = __decorate([
    (0, decorator_1.Provide)()
], Utils);
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb21tL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUV0RCxrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBRTVCOztHQUVHO0FBRUgsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBSztJQUloQjs7T0FFRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBWTtRQUN6QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLE9BQU8sQ0FDTCxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQ2hELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFZLEVBQUUsRUFBc0I7UUFDbEQsSUFBSTtZQUNGLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1AsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUNELE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixDQUFDLENBQUM7WUFDdkUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1lBQ3ZCLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEM7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxVQUFVLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3BFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEVBQUU7UUFDTixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsR0FBVztRQUN0QixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQ1osR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM3QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQzdDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDckIsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGLENBQUE7QUF2RUM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7O3NDQUNEO0FBRkcsS0FBSztJQURqQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxLQUFLLENBeUVqQjtBQXpFWSxzQkFBSyJ9