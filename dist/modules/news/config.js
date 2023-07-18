"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NewsContentMiddleware } from './middleware/content-auth';
/**
 * 模块配置
 */
exports.default = () => {
    return {
        // 模块名称
        name: 'news',
        // 模块描述
        description: 'news',
        // 中间件，只对本模块有效
        // middlewares: [NewsContentMiddleware],
        middlewares: [],
        // 中间件，全局有效
        globalMiddlewares: [],
        // 模块加载顺序，默认为0，值越大越优先加载
        order: 0,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9uZXdzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILGtCQUFlLEdBQUcsRUFBRTtJQUNsQixPQUFPO1FBQ0wsT0FBTztRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTztRQUNQLFdBQVcsRUFBRSxNQUFNO1FBQ25CLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsV0FBVyxFQUFFLEVBQUU7UUFDZixXQUFXO1FBQ1gsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQix1QkFBdUI7UUFDdkIsS0FBSyxFQUFFLENBQUM7S0FDTyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyJ9