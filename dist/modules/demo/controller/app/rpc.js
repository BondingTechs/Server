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
exports.DemoRpcController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const rpc_1 = require("@cool-midway/rpc");
const rpc_2 = require("../../service/rpc");
/**
 * 微服务
 */
let DemoRpcController = class DemoRpcController extends core_1.BaseController {
    async call() {
        return this.ok(await this.rpc.call('goods', 'demoGoodsService', 'test', { a: 1 }));
    }
    async event() {
        this.rpc.broadcastEvent('test', { a: 1 });
        return this.ok();
    }
    async transaction() {
        await this.demoRpcService.transaction({ a: 1 });
        return this.ok();
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", rpc_1.CoolRpc)
], DemoRpcController.prototype, "rpc", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", rpc_2.DemoRpcService)
], DemoRpcController.prototype, "demoRpcService", void 0);
__decorate([
    (0, decorator_1.Post)('/call', { summary: '远程调用' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoRpcController.prototype, "call", null);
__decorate([
    (0, decorator_1.Post)('/event', { summary: '集群事件' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoRpcController.prototype, "event", null);
__decorate([
    (0, decorator_1.Post)('/transaction', { summary: '分布式事务' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoRpcController.prototype, "transaction", null);
DemoRpcController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], DemoRpcController);
exports.DemoRpcController = DemoRpcController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvYXBwL3JwYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEQ7QUFDNUQsNENBQW1FO0FBQ25FLDBDQUEyQztBQUMzQywyQ0FBbUQ7QUFFbkQ7O0dBRUc7QUFHSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLHFCQUFjO0lBUW5ELEtBQUssQ0FBQyxJQUFJO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUNaLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUdELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBdkJDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNKLGFBQU87OENBQUM7QUFHYjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDTyxvQkFBYzt5REFBQztBQUcvQjtJQURDLElBQUEsZ0JBQUksRUFBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7Ozs7NkNBS2xDO0FBR0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7OzhDQUluQztBQUdEO0lBREMsSUFBQSxnQkFBSSxFQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7OztvREFJMUM7QUF4QlUsaUJBQWlCO0lBRjdCLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsR0FBRTtHQUNKLGlCQUFpQixDQXlCN0I7QUF6QlksOENBQWlCIn0=