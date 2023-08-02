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
exports.ContainerLifeCycle = void 0;
const cool = require("@cool-midway/core");
const file = require("@cool-midway/file");
const decorator_1 = require("@midwayjs/decorator");
const info = require("@midwayjs/info");
const koa = require("@midwayjs/koa");
const orm = require("@midwayjs/orm");
const staticFile = require("@midwayjs/static-file");
const localTask = require("@midwayjs/task");
const validate = require("@midwayjs/validate");
const view = require("@midwayjs/view-ejs");
const path_1 = require("path");
// import * as socketio from '@midwayjs/socketio';
// import * as task from '@cool-midway/task';
// import * as pay from '@cool-midway/pay';
// import * as es from '@cool-midway/es';
// import * as rpc from '@cool-midway/rpc';
const task = require("@midwayjs/task"); // 导入模块
let ContainerLifeCycle = class ContainerLifeCycle {
    async onReady() { }
};
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "app", void 0);
ContainerLifeCycle = __decorate([
    (0, decorator_1.Configuration)({
        imports: [
            // http://koajs.cn/
            koa,
            // 参数验证 http://midwayjs.org/docs/extensions/validate
            validate,
            // 本地任务 http://midwayjs.org/docs/extensions/task
            localTask,
            // 模板渲染 http://midwayjs.org/docs/extensions/render
            view,
            // 静态文件托管 http://midwayjs.org/docs/extensions/static_file
            staticFile,
            // typeorm https://typeorm.io  打不开？ https://typeorm.biunav.com/zh/
            orm,
            // socketio http://www.midwayjs.org/docs/extensions/socketio
            // socketio,
            // cool-admin 官方组件 https://www.cool-js.com
            cool,
            // 文件上传 阿里云存储 腾讯云存储 七牛云存储
            file,
            // 任务与队列
            task,
            // 支付 微信与支付宝
            // pay,
            // elasticsearch
            // es,
            // rpc 微服务 远程调用
            // rpc,
            {
                component: info,
                enabledEnvironment: ['local'],
            },
        ],
        importConfigs: [(0, path_1.join)(__dirname, './config')],
    })
], ContainerLifeCycle);
exports.ContainerLifeCycle = ContainerLifeCycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyxtREFBeUQ7QUFDekQsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsb0RBQW9EO0FBQ3BELDRDQUE0QztBQUM1QywrQ0FBK0M7QUFDL0MsMkNBQTJDO0FBQzNDLCtCQUE0QjtBQUM1QixrREFBa0Q7QUFDbEQsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLHVDQUF1QyxDQUFDLE9BQU87QUFxQy9DLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSTdCLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQztDQUNwQixDQUFBO0FBSEM7SUFEQyxJQUFBLGVBQUcsR0FBRTs7K0NBQ2U7QUFGVixrQkFBa0I7SUFuQzlCLElBQUEseUJBQWEsRUFBQztRQUNiLE9BQU8sRUFBRTtZQUNQLG1CQUFtQjtZQUNuQixHQUFHO1lBQ0gsb0RBQW9EO1lBQ3BELFFBQVE7WUFDUixnREFBZ0Q7WUFDaEQsU0FBUztZQUNULGtEQUFrRDtZQUNsRCxJQUFJO1lBQ0oseURBQXlEO1lBQ3pELFVBQVU7WUFDVixrRUFBa0U7WUFDbEUsR0FBRztZQUNILDREQUE0RDtZQUM1RCxZQUFZO1lBQ1osMENBQTBDO1lBQzFDLElBQUk7WUFDSix5QkFBeUI7WUFDekIsSUFBSTtZQUNKLFFBQVE7WUFDUixJQUFJO1lBQ0osWUFBWTtZQUNaLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLGVBQWU7WUFDZixPQUFPO1lBQ1A7Z0JBQ0UsU0FBUyxFQUFFLElBQUk7Z0JBQ2Ysa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDOUI7U0FDRjtRQUNELGFBQWEsRUFBRSxDQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUM3QyxDQUFDO0dBQ1csa0JBQWtCLENBSzlCO0FBTFksZ0RBQWtCIn0=