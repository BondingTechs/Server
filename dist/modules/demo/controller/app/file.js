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
exports.AppDemoFileController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const file_1 = require("@cool-midway/file");
/**
 * 文件上传
 */
let AppDemoFileController = class AppDemoFileController extends core_1.BaseController {
    async uplod() {
        return this.ok(await this.file.upload(this.ctx));
    }
    async uploadMode() {
        return this.ok(await this.file.getMode());
    }
    async downAndUpload() {
        return this.ok(await this.file.downAndUpload('https://cool-js.com/admin/show.png'));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], AppDemoFileController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], AppDemoFileController.prototype, "file", void 0);
__decorate([
    (0, decorator_1.Post)('/upload', { summary: '文件上传' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoFileController.prototype, "uplod", null);
__decorate([
    (0, decorator_1.Get)('/uploadMode', { summary: '获得上传模式' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoFileController.prototype, "uploadMode", null);
__decorate([
    (0, decorator_1.Post)('/downAndUpload', { summary: '下载并上传' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoFileController.prototype, "downAndUpload", null);
AppDemoFileController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoFileController);
exports.AppDemoFileController = AppDemoFileController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVtby9jb250cm9sbGVyL2FwcC9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFpRTtBQUNqRSw0Q0FBbUU7QUFFbkUsNENBQTZDO0FBRTdDOztHQUVHO0FBR0gsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxxQkFBYztJQVF2RCxLQUFLLENBQUMsS0FBSztRQUNULE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHRCxLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsS0FBSyxDQUFDLGFBQWE7UUFDakIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUNaLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBckJDO0lBREMsSUFBQSxrQkFBTSxHQUFFOztrREFDSTtBQUdiO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNILGVBQVE7bURBQUM7QUFHZjtJQURDLElBQUEsZ0JBQUksRUFBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7Ozs7a0RBR3BDO0FBR0Q7SUFEQyxJQUFBLGVBQUcsRUFBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Ozs7dURBR3pDO0FBR0Q7SUFEQyxJQUFBLGdCQUFJLEVBQUMsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7MERBSzVDO0FBdEJVLHFCQUFxQjtJQUZqQyxJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEdBQUU7R0FDSixxQkFBcUIsQ0F1QmpDO0FBdkJZLHNEQUFxQiJ9