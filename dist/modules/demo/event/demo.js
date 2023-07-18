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
exports.DemoEvent = void 0;
const core_1 = require("@cool-midway/core");
/**
 * 接收事件
 */
let DemoEvent = class DemoEvent {
    /**
     * 根据事件名接收事件
     * @param msg
     * @param a
     */
    async updatdemoeUser(msg, a) {
        console.log('收到消息', msg, a);
    }
};
__decorate([
    (0, core_1.Event)('demo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DemoEvent.prototype, "updatdemoeUser", null);
DemoEvent = __decorate([
    (0, core_1.CoolEvent)()
], DemoEvent);
exports.DemoEvent = DemoEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVtby9ldmVudC9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFxRDtBQUVyRDs7R0FFRztBQUVILElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFDcEI7Ozs7T0FJRztJQUVILEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBSEM7SUFEQyxJQUFBLFlBQUssRUFBQyxNQUFNLENBQUM7Ozs7K0NBR2I7QUFUVSxTQUFTO0lBRHJCLElBQUEsZ0JBQVMsR0FBRTtHQUNDLFNBQVMsQ0FVckI7QUFWWSw4QkFBUyJ9