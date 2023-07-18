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
exports.DemoQueueController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const comm_1 = require("../../queue/comm");
const getter_1 = require("../../queue/getter");
/**
 * 队列
 */
let DemoQueueController = class DemoQueueController extends core_1.BaseController {
    /**
     * 发送数据到队列
     */
    async queue() {
        this.demoCommQueue.add({ a: 2 });
        return this.ok();
    }
    async addGetter() {
        await this.demoGetterQueue.add({ a: new Date() });
        return this.ok();
    }
    /**
     * 获得队列中的数据，只有当队列类型为getter时有效
     */
    async getter() {
        var _a, _b;
        const job = await this.demoGetterQueue.getters.getJobs(['wait'], 0, 0, true);
        // 获得完将数据从队列移除
        await ((_a = job[0]) === null || _a === void 0 ? void 0 : _a.remove());
        return this.ok((_b = job[0]) === null || _b === void 0 ? void 0 : _b.data);
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", comm_1.DemoCommQueue)
], DemoQueueController.prototype, "demoCommQueue", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", getter_1.DemoGetterQueue)
], DemoQueueController.prototype, "demoGetterQueue", void 0);
__decorate([
    (0, decorator_1.Post)('/add', { summary: '发送队列数据' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoQueueController.prototype, "queue", null);
__decorate([
    (0, decorator_1.Post)('/addGetter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoQueueController.prototype, "addGetter", null);
__decorate([
    (0, decorator_1.Get)('/getter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoQueueController.prototype, "getter", null);
DemoQueueController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], DemoQueueController);
exports.DemoQueueController = DemoQueueController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hcHAvcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWlFO0FBQ2pFLDRDQUFtRTtBQUNuRSwyQ0FBaUQ7QUFDakQsK0NBQXFEO0FBRXJEOztHQUVHO0FBR0gsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxxQkFBYztJQVNyRDs7T0FFRztJQUVILEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0QsS0FBSyxDQUFDLFNBQVM7UUFDYixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxNQUFNOztRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUNwRCxDQUFDLE1BQU0sQ0FBQyxFQUNSLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxDQUNMLENBQUM7UUFDRixjQUFjO1FBQ2QsTUFBTSxDQUFBLE1BQUEsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxNQUFNLEVBQUUsQ0FBQSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7QUFwQ0M7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ00sb0JBQWE7MERBQUM7QUFJN0I7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1Esd0JBQWU7NERBQUM7QUFNakM7SUFEQyxJQUFBLGdCQUFJLEVBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzs7O2dEQUluQztBQUdEO0lBREMsSUFBQSxnQkFBSSxFQUFDLFlBQVksQ0FBQzs7OztvREFJbEI7QUFNRDtJQURDLElBQUEsZUFBRyxFQUFDLFNBQVMsQ0FBQzs7OztpREFXZDtBQXRDVSxtQkFBbUI7SUFGL0IsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osbUJBQW1CLENBdUMvQjtBQXZDWSxrREFBbUIifQ==