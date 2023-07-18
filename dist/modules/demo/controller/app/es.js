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
exports.AppDemoEsController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const test_1 = require("../../es/test");
const es_1 = require("@cool-midway/es");
/**
 * elasticsearch
 */
let AppDemoEsController = class AppDemoEsController extends core_1.BaseController {
    async test() {
        // es 客户端实例
        this.es.client;
        // 新增与修改
        await this.testEsIndex.upsert({
            name: '你好啊你是谁',
            age: 18,
        });
        return this.ok(await this.testEsIndex.find());
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", test_1.TestEsIndex)
], AppDemoEsController.prototype, "testEsIndex", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", es_1.CoolElasticSearch)
], AppDemoEsController.prototype, "es", void 0);
__decorate([
    (0, decorator_1.Post)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoEsController.prototype, "test", null);
AppDemoEsController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoEsController);
exports.AppDemoEsController = AppDemoEsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hcHAvZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTREO0FBQzVELDRDQUFtRTtBQUNuRSx3Q0FBNEM7QUFDNUMsd0NBQW9EO0FBRXBEOztHQUVHO0FBR0gsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxxQkFBYztJQVFyRCxLQUFLLENBQUMsSUFBSTtRQUNSLFdBQVc7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNmLFFBQVE7UUFDUixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksRUFBRSxRQUFRO1lBQ2QsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGLENBQUE7QUFoQkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0ksa0JBQVc7d0RBQUM7QUFHekI7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0wsc0JBQWlCOytDQUFDO0FBR3RCO0lBREMsSUFBQSxnQkFBSSxFQUFDLE9BQU8sQ0FBQzs7OzsrQ0FVYjtBQWpCVSxtQkFBbUI7SUFGL0IsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osbUJBQW1CLENBa0IvQjtBQWxCWSxrREFBbUIifQ==