"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLogMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
const log_1 = require("../service/sys/log");
/**
 * 日志中间件
 */
let BaseLogMiddleware = class BaseLogMiddleware {
    resolve() {
        return async (ctx, next) => {
            const baseSysLogService = await ctx.requestContext.getAsync(log_1.BaseSysLogService);
            baseSysLogService.record(ctx, ctx.url.split('?')[0], ctx.req.method === 'GET' ? ctx.request.query : ctx.request.body, ctx.admin ? ctx.admin.userId : null);
            await next();
        };
    }
};
BaseLogMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], BaseLogMiddleware);
exports.BaseLogMiddleware = BaseLogMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL21pZGRsZXdhcmUvbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUFpRDtBQUlqRCw0Q0FBdUQ7QUFFdkQ7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixPQUFPO1FBQ0wsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQWtCLEVBQUUsRUFBRTtZQUNoRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQ3pELHVCQUFpQixDQUNsQixDQUFDO1lBQ0YsaUJBQWlCLENBQUMsTUFBTSxDQUN0QixHQUFHLEVBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUMvRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNwQyxDQUFDO1lBQ0YsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBZlksaUJBQWlCO0lBRDdCLElBQUEsc0JBQVUsR0FBRTtHQUNBLGlCQUFpQixDQWU3QjtBQWZZLDhDQUFpQiJ9