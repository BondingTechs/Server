"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./middleware/task");
/**
 * 模块配置
 */
exports.default = () => {
    return {
        // 模块名称
        name: '任务调度',
        // 模块描述
        description: '任务调度模块，支持分布式任务，由redis整个集群的任务',
        // 中间件
        middlewares: [task_1.TaskMiddleware],
        // 模块加载顺序，默认为0，值越大越优先加载
        order: 0,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YXNrL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUFtRDtBQUVuRDs7R0FFRztBQUNILGtCQUFlLEdBQUcsRUFBRTtJQUNsQixPQUFPO1FBQ0wsT0FBTztRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTztRQUNQLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsTUFBTTtRQUNOLFdBQVcsRUFBRSxDQUFDLHFCQUFjLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO0tBQ08sQ0FBQztBQUNwQixDQUFDLENBQUMifQ==