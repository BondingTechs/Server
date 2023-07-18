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
exports.BaseAppAuthMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const cache_1 = require("@midwayjs/cache");
/**
 * 權限校驗
 */
let BaseAppAuthMiddleware = class BaseAppAuthMiddleware {
    resolve() {
        return async (ctx, next) => {
            let statusCode = 200;
            let { url } = ctx;
            url = url.replace(this.prefix, '');
            const token = ctx.get('Authorization');
            const appUrl = '/app/';
            // 需驗證的路徑
            const authList = ['user', 'collection', 'tip', 'my'];
            const module = url.replace(appUrl, '').split('/')[0];
            const moduleAuth = _.some(authList, x => x === module);
            try {
                ctx.user = jwt.verify(token, this.jwtConfig.jwt.secret);
            }
            catch (err) { }
            // 路由地址為 app前綴的 權限校驗
            if (_.startsWith(url, appUrl)) {
                if (ctx.user) {
                    // 不需要登錄 無需權限校驗
                    if (new RegExp(`^${appUrl}?.*/auth/`).test(url)) {
                        await next();
                        return;
                    }
                    await next();
                    return;
                    // 如果傳的token是refreshToken則校驗失敗
                    if (ctx.user.isRefresh) {
                        ctx.status = 401;
                        ctx.body = {
                            code: 1005,
                            message: '登錄失效',
                        };
                        return;
                    }
                    // 判斷密碼版本是否正確
                    const passwordV = await this.cacheManager.get(`user:passwordVersion:${ctx.user.userId}`);
                    if (passwordV != ctx.user.passwordVersion) {
                        ctx.status = 401;
                        ctx.body = {
                            code: 1005,
                            message: '登錄失效',
                        };
                        return;
                    }
                    const rToken = await this.cacheManager.get(`user:token:${ctx.user.userId}`);
                    if (!rToken) {
                        ctx.status = 401;
                        ctx.body = {
                            code: 1005,
                            message: '登錄失效或無權限訪問',
                        };
                        return;
                    }
                    if (rToken !== token && this.jwtConfig.sso) {
                        statusCode = 401;
                    }
                    else {
                        // 角色權限校驗 - 待處理
                        // let perms: string[] = await this.cacheManager.get(
                        //   `user:perms:${ctx.user.userId}`
                        // );
                        // if (!_.isEmpty(perms)) {
                        //   perms = perms.map(e => {
                        //     return e.replace(/:/g, '/');
                        //   });
                        //   return perms;
                        //   if (!perms.includes(url.split('?')[0].replace('/api/', ''))) {
                        //     statusCode = 403;
                        //   }
                        // } else {
                        //   statusCode = 403;
                        // }
                    }
                }
                else if (moduleAuth) {
                    // 需要驗證且未登入
                    ctx.status = 401;
                    ctx.body = {
                        code: 1005,
                        message: '登錄失效或無權限訪問',
                    };
                    return;
                }
                if (statusCode > 200) {
                    ctx.status = statusCode;
                    ctx.body = {
                        code: 1005,
                        message: '登錄失效或無權限訪問',
                    };
                    return;
                }
            }
            await next();
        };
    }
};
__decorate([
    (0, decorator_1.Config)('koa.globalPrefix'),
    __metadata("design:type", Object)
], BaseAppAuthMiddleware.prototype, "prefix", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseAppAuthMiddleware.prototype, "jwtConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseAppAuthMiddleware.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], BaseAppAuthMiddleware.prototype, "app", void 0);
BaseAppAuthMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], BaseAppAuthMiddleware);
exports.BaseAppAuthMiddleware = BaseAppAuthMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2UvbWlkZGxld2FyZS9hcHAtYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0U7QUFDdEUsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUdwQywyQ0FBK0M7QUFFL0M7O0dBRUc7QUFFSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWVoQyxPQUFPO1FBQ0wsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQWtCLEVBQUUsRUFBRTtZQUNoRCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFNBQVM7WUFDVCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUN2RCxJQUFJO2dCQUNGLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0s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