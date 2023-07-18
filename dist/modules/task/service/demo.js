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
exports.TaskDemoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 描述
 */
let TaskDemoService = class TaskDemoService extends core_1.BaseService {
    /**
     * 描述
     */
    async test() {
        this.logger.info('我被调用了');
        return '任务执行成功';
    }
};
__decorate([
    (0, decorator_1.Logger)(),
    __metadata("design:type", Object)
], TaskDemoService.prototype, "logger", void 0);
TaskDemoService = __decorate([
    (0, decorator_1.Provide)()
], TaskDemoService);
exports.TaskDemoService = TaskDemoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFzay9zZXJ2aWNlL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUFnRDtBQUdoRDs7R0FFRztBQUVILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWdCLFNBQVEsa0JBQVc7SUFHOUM7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBUkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OytDQUNPO0FBRkwsZUFBZTtJQUQzQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxlQUFlLENBVTNCO0FBVlksMENBQWUifQ==