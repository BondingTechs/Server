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
exports.TaskInfoQueue = void 0;
const decorator_1 = require("@midwayjs/decorator");
const task_1 = require("@cool-midway/task");
const info_1 = require("../service/info");
/**
 * 任务
 */
let TaskInfoQueue = class TaskInfoQueue extends task_1.BaseCoolQueue {
    async data(job, done) {
        try {
            const result = await this.taskInfoService.invokeService(job.data.service);
            this.taskInfoService.record(job.data, 1, JSON.stringify(result));
        }
        catch (error) {
            this.taskInfoService.record(job.data, 0, error.message);
        }
        if (!job.data.isOnce) {
            this.taskInfoService.updateNextRunTime(job.data.id);
            this.taskInfoService.updateStatus(job.data.id);
        }
        done();
    }
};
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], TaskInfoQueue.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_1.TaskInfoService)
], TaskInfoQueue.prototype, "taskInfoService", void 0);
TaskInfoQueue = __decorate([
    (0, task_1.CoolQueue)()
], TaskInfoQueue);
exports.TaskInfoQueue = TaskInfoQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFzay9xdWV1ZS90YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCw0Q0FBNkQ7QUFDN0QsMENBQWtEO0FBSWxEOztHQUVHO0FBRUgsSUFBc0IsYUFBYSxHQUFuQyxNQUFzQixhQUFjLFNBQVEsb0JBQWE7SUFPdkQsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFRLEVBQUUsSUFBUztRQUM1QixJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLElBQUEsZUFBRyxHQUFFOzswQ0FDa0I7QUFHeEI7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esc0JBQWU7c0RBQUM7QUFMYixhQUFhO0lBRGxDLElBQUEsZ0JBQVMsR0FBRTtHQUNVLGFBQWEsQ0FvQmxDO0FBcEJxQixzQ0FBYSJ9