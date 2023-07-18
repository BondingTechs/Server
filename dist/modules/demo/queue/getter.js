"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoGetterQueue = void 0;
const task_1 = require("@cool-midway/task");
/**
 * 主动消费队列
 */
let DemoGetterQueue = class DemoGetterQueue extends task_1.BaseCoolQueue {
};
DemoGetterQueue = __decorate([
    (0, task_1.CoolQueue)({ type: 'getter' })
], DemoGetterQueue);
exports.DemoGetterQueue = DemoGetterQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL3F1ZXVlL2dldHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0Q0FBNkQ7QUFFN0Q7O0dBRUc7QUFFSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLG9CQUFhO0NBQUcsQ0FBQTtBQUF4QyxlQUFlO0lBRDNCLElBQUEsZ0JBQVMsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztHQUNqQixlQUFlLENBQXlCO0FBQXhDLDBDQUFlIn0=