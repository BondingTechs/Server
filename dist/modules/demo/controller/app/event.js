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
exports.AppDemoEventController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 事件
 */
let AppDemoEventController = class AppDemoEventController extends core_1.BaseController {
    async send() {
        await this.coolEventManager.emit('demo', { a: 1 }, 1);
        return this.ok();
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolEventManager)
], AppDemoEventController.prototype, "coolEventManager", void 0);
__decorate([
    (0, decorator_1.Post)('/send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoEventController.prototype, "send", null);
AppDemoEventController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoEventController);
exports.AppDemoEventController = AppDemoEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hcHAvZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTREO0FBQzVELDRDQUkyQjtBQUUzQjs7R0FFRztBQUdILElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXVCLFNBQVEscUJBQWM7SUFLeEQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBUEM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ1MsdUJBQWdCO2dFQUFDO0FBR25DO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sQ0FBQzs7OztrREFJYjtBQVJVLHNCQUFzQjtJQUZsQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixzQkFBc0IsQ0FTbEM7QUFUWSx3REFBc0IifQ==