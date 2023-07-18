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
exports.DemoConfigController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 配置
 */
let DemoConfigController = class DemoConfigController extends core_1.BaseController {
    async get() {
        return this.ok(this.demoConfig);
    }
};
__decorate([
    (0, decorator_1.Config)('module.demo'),
    __metadata("design:type", Object)
], DemoConfigController.prototype, "demoConfig", void 0);
__decorate([
    (0, decorator_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoConfigController.prototype, "get", null);
DemoConfigController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], DemoConfigController);
exports.DemoConfigController = DemoConfigController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvYXBwL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBMkQ7QUFDM0QsNENBQW1FO0FBRW5FOztHQUVHO0FBR0gsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxxQkFBYztJQU10RCxLQUFLLENBQUMsR0FBRztRQUNQLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7QUFOQztJQURDLElBQUEsa0JBQU0sRUFBQyxhQUFhLENBQUM7O3dEQUNYO0FBR1g7SUFEQyxJQUFBLGVBQUcsRUFBQyxNQUFNLENBQUM7Ozs7K0NBR1g7QUFSVSxvQkFBb0I7SUFGaEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osb0JBQW9CLENBU2hDO0FBVFksb0RBQW9CIn0=