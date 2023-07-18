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
exports.BaseLogSchedule = void 0;
const decorator_1 = require("@midwayjs/decorator");
const log_1 = require("../service/sys/log");
/**
 * 日志定时任务
 */
let BaseLogSchedule = class BaseLogSchedule {
    // 定时执行的具体任务
    async exec() {
        this.logger.info('清除日志定时任务开始执行');
        const startTime = Date.now();
        await this.baseSysLogService.clear();
        this.logger.info(`清除日志定时任务结束，耗时:${Date.now() - startTime}ms`);
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", log_1.BaseSysLogService)
], BaseLogSchedule.prototype, "baseSysLogService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseLogSchedule.prototype, "logger", void 0);
__decorate([
    (0, decorator_1.TaskLocal)(decorator_1.FORMAT.CRONTAB.EVERY_DAY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseLogSchedule.prototype, "exec", null);
BaseLogSchedule = __decorate([
    (0, decorator_1.Provide)()
], BaseLogSchedule);
exports.BaseLogSchedule = BaseLogSchedule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL3NjaGVkdWxlL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFNNkI7QUFDN0IsNENBQXVEO0FBR3ZEOztHQUVHO0FBRUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQU8xQixZQUFZO0lBRVosS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRixDQUFBO0FBYkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1UsdUJBQWlCOzBEQUFDO0FBR3JDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzsrQ0FDTztBQUloQjtJQURDLElBQUEscUJBQVMsRUFBQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7MkNBTW5DO0FBZFUsZUFBZTtJQUQzQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxlQUFlLENBZTNCO0FBZlksMENBQWUifQ==