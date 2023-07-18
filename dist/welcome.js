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
exports.WelcomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
/**
 * 欢迎界面
 */
let WelcomeController = class WelcomeController {
    async welcome() {
        await this.ctx.render('welcome', {
            text: 'HELLO COOL-ADMIN 5.x 一个项目只用COOL就够了！！！',
        });
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], WelcomeController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WelcomeController.prototype, "welcome", null);
WelcomeController = __decorate([
    (0, decorator_1.Controller)('/')
], WelcomeController);
exports.WelcomeController = WelcomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBRzlEOztHQUVHO0FBRUgsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLckIsS0FBSyxDQUFDLE9BQU87UUFDbEIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxFQUFFLHVDQUF1QztTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQVJDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzs4Q0FDSTtBQUdiO0lBREMsSUFBQSxlQUFHLEVBQUMsR0FBRyxDQUFDOzs7O2dEQUtSO0FBVFUsaUJBQWlCO0lBRDdCLElBQUEsc0JBQVUsRUFBQyxHQUFHLENBQUM7R0FDSCxpQkFBaUIsQ0FVN0I7QUFWWSw4Q0FBaUIifQ==