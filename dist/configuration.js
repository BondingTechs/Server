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
const decorator_1 = require("@midwayjs/decorator");
const koa = require("@midwayjs/koa");
const validate = require("@midwayjs/validate");
const info = require("@midwayjs/info");
const path_1 = require("path");
const staticFile = require("@midwayjs/static-file");
const view = require("@midwayjs/view-ejs");
const orm = require("@midwayjs/orm");
const cool = require("@cool-midway/core");
const file = require("@cool-midway/file");
const localTask = require("@midwayjs/task");
// import * as socketio from '@midwayjs/socketio';
// import * as task from '@cool-midway/task';
// import * as pay from '@cool-midway/pay';
// import * as es from '@cool-midway/es';
// import * as rpc from '@cool-midway/rpc';
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
            // task,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlEO0FBQ3pELHFDQUFxQztBQUNyQywrQ0FBK0M7QUFDL0MsdUNBQXVDO0FBQ3ZDLCtCQUE0QjtBQUM1QixvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QyxrREFBa0Q7QUFDbEQsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBcUMzQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUk3QixLQUFLLENBQUMsT0FBTyxLQUFJLENBQUM7Q0FDbkIsQ0FBQTtBQUhDO0lBREMsSUFBQSxlQUFHLEdBQUU7OytDQUNlO0FBRlYsa0JBQWtCO0lBbkM5QixJQUFBLHlCQUFhLEVBQUM7UUFDYixPQUFPLEVBQUU7WUFDUCxtQkFBbUI7WUFDbkIsR0FBRztZQUNILG9EQUFvRDtZQUNwRCxRQUFRO1lBQ1IsZ0RBQWdEO1lBQ2hELFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFBSTtZQUNKLHlEQUF5RDtZQUN6RCxVQUFVO1lBQ1Ysa0VBQWtFO1lBQ2xFLEdBQUc7WUFDSCw0REFBNEQ7WUFDNUQsWUFBWTtZQUNaLDBDQUEwQztZQUMxQyxJQUFJO1lBQ0oseUJBQXlCO1lBQ3pCLElBQUk7WUFDSixRQUFRO1lBQ1IsUUFBUTtZQUNSLFlBQVk7WUFDWixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLE1BQU07WUFDTixlQUFlO1lBQ2YsT0FBTztZQUNQO2dCQUNFLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGtCQUFrQixFQUFFLENBQUMsT0FBTyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxhQUFhLEVBQUUsQ0FBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDN0MsQ0FBQztHQUNXLGtCQUFrQixDQUs5QjtBQUxZLGdEQUFrQiJ9