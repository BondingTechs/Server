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
exports.HelloController = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 测试
 */
let HelloController = class HelloController {
    async onConnectionMethod() {
        console.log('on client connect', this.ctx.id);
        console.log('参数', this.ctx.handshake.query);
        this.ctx.emit('data', '连接成功');
    }
    async gotMessage(data) {
        console.log('on data got', this.ctx.id, data);
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], HelloController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.OnWSConnection)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "onConnectionMethod", null);
__decorate([
    (0, decorator_1.OnWSMessage)('myEvent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "gotMessage", null);
HelloController = __decorate([
    (0, decorator_1.WSController)('/')
], HelloController);
exports.HelloController = HelloController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vc29ja2V0L2hlbGxvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUs2QjtBQUU3Qjs7R0FFRztBQUVILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFLMUIsS0FBSyxDQUFDLGtCQUFrQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGLENBQUE7QUFiQztJQURDLElBQUEsa0JBQU0sR0FBRTs7NENBQ0k7QUFHYjtJQURDLElBQUEsMEJBQWMsR0FBRTs7Ozt5REFLaEI7QUFHRDtJQURDLElBQUEsdUJBQVcsRUFBQyxTQUFTLENBQUM7Ozs7aURBR3RCO0FBZFUsZUFBZTtJQUQzQixJQUFBLHdCQUFZLEVBQUMsR0FBRyxDQUFDO0dBQ0wsZUFBZSxDQWUzQjtBQWZZLDBDQUFlIn0=