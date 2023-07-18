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
exports.DemoMiddleware = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
let DemoMiddleware = class DemoMiddleware {
    resolve() {
        return async (ctx, next) => {
            const urls = this.tag.byKey(core_1.TagTypes.IGNORE_TOKEN);
            console.log('忽略token的URL数组', urls);
            // 控制器前执行的逻辑
            const startTime = Date.now();
            // 执行下一个 Web 中间件，最后执行到控制器
            // 这里可以拿到下一个中间件或者控制器的返回值
            const result = await next();
            // 控制器之后执行的逻辑
            console.log(Date.now() - startTime);
            // 返回给上一个中间件的结果
            return result;
        };
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolUrlTagData)
], DemoMiddleware.prototype, "tag", void 0);
DemoMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], DemoMiddleware);
exports.DemoMiddleware = DemoMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVtby9taWRkbGV3YXJlL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTZEO0FBRTdELG1EQUF5RDtBQUl6RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBSXpCLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVuQyxZQUFZO1lBQ1osTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUM1QixhQUFhO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDcEMsZUFBZTtZQUNmLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbkJDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNKLHFCQUFjOzJDQUFDO0FBRlQsY0FBYztJQUQxQixJQUFBLHNCQUFVLEdBQUU7R0FDQSxjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyJ9