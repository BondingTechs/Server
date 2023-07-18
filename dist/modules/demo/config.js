"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./middleware/demo");
/**
 * 模块配置
 */
exports.default = () => {
    return {
        // 模块名称
        name: 'xxx',
        // 模块描述
        description: 'xxx',
        // 中间件，只对本模块有效
        middlewares: [demo_1.DemoMiddleware],
        // 中间件，全局有效
        globalMiddlewares: [],
        // 模块加载顺序，默认为0，值越大越优先加载
        order: 0,
        // 其他配置
        a: 1,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUFtRDtBQUVuRDs7R0FFRztBQUNILGtCQUFlLEdBQUcsRUFBRTtJQUNsQixPQUFPO1FBQ0wsT0FBTztRQUNQLElBQUksRUFBRSxLQUFLO1FBQ1gsT0FBTztRQUNQLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGNBQWM7UUFDZCxXQUFXLEVBQUUsQ0FBQyxxQkFBYyxDQUFDO1FBQzdCLFdBQVc7UUFDWCxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLHVCQUF1QjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU87UUFDUCxDQUFDLEVBQUUsQ0FBQztLQUNXLENBQUM7QUFDcEIsQ0FBQyxDQUFDIn0=