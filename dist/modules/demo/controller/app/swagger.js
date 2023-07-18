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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSwaggerController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * swagger 文档
 */
let AppSwaggerController = class AppSwaggerController extends core_1.BaseController {
    async create(id) {
        return this.ok(id);
    }
};
__decorate([
    (0, decorator_1.Post)('/create', { summary: '创建' }),
    __param(0, (0, decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppSwaggerController.prototype, "create", null);
AppSwaggerController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)(null, {
        tagName: 'swagger demo',
    })
], AppSwaggerController);
exports.AppSwaggerController = AppSwaggerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVtby9jb250cm9sbGVyL2FwcC9zd2FnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUEyRDtBQUMzRCw0Q0FBbUU7QUFFbkU7O0dBRUc7QUFLSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLHFCQUFjO0lBRXRELEtBQUssQ0FBQyxNQUFNLENBQWMsRUFBVTtRQUNsQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7QUFIQztJQURDLElBQUEsZ0JBQUksRUFBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckIsV0FBQSxJQUFBLGlCQUFLLEVBQUMsSUFBSSxDQUFDLENBQUE7Ozs7a0RBRXhCO0FBSlUsb0JBQW9CO0lBSmhDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxFQUFFLGNBQWM7S0FDeEIsQ0FBQztHQUNXLG9CQUFvQixDQUtoQztBQUxZLG9EQUFvQiJ9