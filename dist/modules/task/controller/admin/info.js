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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInfoController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const info_1 = require("../../entity/info");
const info_2 = require("../../service/info");
/**
 * 任务
 */
let TaskInfoController = class TaskInfoController extends core_1.BaseController {
    /**
     * 手动执行一次
     */
    async once(id) {
        await this.taskInfoService.once(id);
        this.ok();
    }
    /**
     * 暂停任务
     */
    async stop(id) {
        await this.taskInfoService.stop(id);
        this.ok();
    }
    /**
     * 开始任务
     */
    async start(id, type) {
        await this.taskInfoService.start(id, type);
        this.ok();
    }
    /**
     * 日志
     */
    async log(params) {
        return this.ok(await this.taskInfoService.log(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_2.TaskInfoService)
], TaskInfoController.prototype, "taskInfoService", void 0);
__decorate([
    (0, decorator_1.Post)('/once', { summary: '执行一次' }),
    __param(0, (0, decorator_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskInfoController.prototype, "once", null);
__decorate([
    (0, decorator_1.Post)('/stop', { summary: '停止' }),
    __param(0, (0, decorator_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskInfoController.prototype, "stop", null);
__decorate([
    (0, decorator_1.Post)('/start', { summary: '开始' }),
    __param(0, (0, decorator_1.Body)('id')),
    __param(1, (0, decorator_1.Body)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TaskInfoController.prototype, "start", null);
__decorate([
    (0, decorator_1.Get)('/log', { summary: '日志' }),
    __param(0, (0, decorator_1.Query)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskInfoController.prototype, "log", null);
TaskInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'page'],
        entity: info_1.TaskInfoEntity,
        service: info_2.TaskInfoService,
        before: ctx => {
            ctx.request.body.limit = ctx.request.body.repeatCount;
        },
        pageQueryOp: {
            fieldEq: ['status', 'type'],
        },
    })
], TaskInfoController);
exports.TaskInfoController = TaskInfoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFzay9jb250cm9sbGVyL2FkbWluL2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBUTZCO0FBQzdCLDRDQUFtRTtBQUNuRSw0Q0FBbUQ7QUFDbkQsNkNBQXFEO0FBRXJEOztHQUVHO0FBYUgsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxxQkFBYztJQUlwRDs7T0FFRztJQUVILEtBQUssQ0FBQyxJQUFJLENBQWEsRUFBVTtRQUMvQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxJQUFJLENBQWEsRUFBVTtRQUMvQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxLQUFLLENBQWEsRUFBVSxFQUFnQixJQUFZO1FBQzVELE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxHQUFHLENBQWEsTUFBVztRQUMvQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRixDQUFBO0FBcENDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNRLHNCQUFlOzJEQUFDO0FBTWpDO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN2QixXQUFBLElBQUEsZ0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTs7Ozs4Q0FHckI7QUFNRDtJQURDLElBQUEsZ0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckIsV0FBQSxJQUFBLGdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7Ozs7OENBR3JCO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JCLFdBQUEsSUFBQSxnQkFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQWMsV0FBQSxJQUFBLGdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUE7Ozs7K0NBR2hEO0FBTUQ7SUFEQyxJQUFBLGVBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEIsV0FBQSxJQUFBLGlCQUFLLEVBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NkNBRXBCO0FBckNVLGtCQUFrQjtJQVo5QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hELE1BQU0sRUFBRSxxQkFBYztRQUN0QixPQUFPLEVBQUUsc0JBQWU7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1osR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztTQUM1QjtLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0FzQzlCO0FBdENZLGdEQUFrQiJ9