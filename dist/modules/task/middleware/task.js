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
exports.TaskMiddleware = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const task_1 = require("../queue/task");
/**
 * 任務中間件
 */
let TaskMiddleware = class TaskMiddleware {
    resolve() {
        return async (ctx, next) => {
            const urls = ctx.url.split('/');
            if (['add', 'update', 'once', 'stop', 'start'].includes(urls[urls.length - 1])) {
                if (!this.taskInfoQueue.metaQueue) {
                    throw new core_1.CoolCommException('task插件未啟用或redis配置錯誤或redis版本過低(>=6.x)');
                }
            }
            await next();
        };
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", task_1.TaskInfoQueue)
], TaskMiddleware.prototype, "taskInfoQueue", void 0);
TaskMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], TaskMiddleware);
exports.TaskMiddleware = TaskMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFzay9taWRkbGV3YXJlL3Rhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXNEO0FBQ3RELG1EQUF5RDtBQUd6RCx3Q0FBOEM7QUFFOUM7O0dBRUc7QUFFSCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR3pCLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQ0UsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDdEIsRUFDRDtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7b0JBQ2pDLE1BQU0sSUFBSSx3QkFBaUIsQ0FDekIsc0NBQXNDLENBQ3ZDLENBQUM7aUJBQ0g7YUFDRjtZQUNELE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTSxvQkFBYTtxREFBQztBQUZsQixjQUFjO0lBRDFCLElBQUEsc0JBQVUsR0FBRTtHQUNBLGNBQWMsQ0FvQjFCO0FBcEJZLHdDQUFjIn0=