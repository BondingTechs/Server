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
exports.BaseAdminAuthMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const _ = require("lodash");
const core_1 = require("@cool-midway/core");
const jwt = require("jsonwebtoken");
const cache_1 = require("@midwayjs/cache");
/**
 * 權限校驗
 */
let BaseAdminAuthMiddleware = class BaseAdminAuthMiddleware {
    resolve() {
        return async (ctx, next) => {
            let statusCode = 200;
            let { url } = ctx;
            url = url.replace(this.prefix, '');
            const token = ctx.get('Authorization');
            const adminUrl = '/admin/';
            // 路由地址為 admin前綴的 需要權限校驗
            if (_.startsWith(url, adminUrl)) {
                try {
                    ctx.admin = jwt.verify(token, this.jwtConfig.jwt.secret);
                }
                catch (err) { }
                // 不需要登錄 無需權限校驗
                if (new RegExp(`^${adminUrl}?.*/open/`).test(url)) {
                    await next();
                    return;
                }
                if (ctx.admin) {
                    // 超管擁有所有權限
                    if (ctx.admin.username == 'admin' && !ctx.admin.isRefresh) {
                        await next();
                        return;
                    }
                    // 要登錄每個人都有權限的接口
                    if (new RegExp(`^${adminUrl}?.*/comm/`).test(url)) {
                        await next();
                        return;
                    }
                    // 如果傳的token是refreshToken則校驗失敗
                    if (ctx.admin.isRefresh) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登錄失效',
                        };
                        return;
                    }
                    // 判斷密碼版本是否正確
                    const passwordV = await this.cacheManager.get(`admin:passwordVersion:${ctx.admin.userId}`);
                    if (passwordV != ctx.admin.passwordVersion) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登錄失效',
                        };
                        return;
                    }
                    const rToken = await this.cacheManager.get(`admin:token:${ctx.admin.userId}`);
                    if (!rToken) {
                        ctx.status = 401;
                        ctx.body = {
                            code: core_1.RESCODE.COMMFAIL,
                            message: '登錄失效或無權限訪問',
                        };
                        return;
                    }
                    if (rToken !== token && this.jwtConfig.sso) {
                        statusCode = 401;
                    }
                    else {
                        let perms = await this.cacheManager.get(`admin:perms:${ctx.admin.userId}`);
                        if (!_.isEmpty(perms)) {
                            perms = perms.map(e => {
                                return e.replace(/:/g, '/');
                            });
                            if (!perms.includes(url.split('?')[0].replace('/admin/', ''))) {
                                statusCode = 403;
                            }
                        }
                        else {
                            statusCode = 403;
                        }
                    }
                }
                else {
                    statusCode = 401;
                }
                if (statusCode > 200) {
                    ctx.status = statusCode;
                    ctx.body = {
                        code: core_1.RESCODE.COMMFAIL,
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
], BaseAdminAuthMiddleware.prototype, "prefix", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseAdminAuthMiddleware.prototype, "jwtConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseAdminAuthMiddleware.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], BaseAdminAuthMiddleware.prototype, "app", void 0);
BaseAdminAuthMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], BaseAdminAuthMiddleware);
exports.BaseAdminAuthMiddleware = BaseAdminAuthMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9taWRkbGV3YXJlL2FkbWluLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNFO0FBQ3RFLDRCQUE0QjtBQUM1Qiw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBR3BDLDJDQUErQztBQUUvQzs7R0FFRztBQUVILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBZWxDLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDM0Isd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLElBQUk7b0JBQ0YsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRTtnQkFDaEIsZUFBZTtnQkFDZixJQUFJLElBQUksTUFBTSxDQUFDLElBQUksUUFBUSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pELE1BQU0sSUFB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