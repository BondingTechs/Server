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
exports.BaseAppCommController = void 0;
const core_1 = require("@cool-midway/core");
const file_1 = require("@cool-midway/file");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const log_upload_1 = require("../../entity/sys/log_upload");
/**
 * 不需要登录的后台接口
 */
let BaseAppCommController = class BaseAppCommController extends core_1.BaseController {
    /**
     * 实体信息与路径
     * @returns
     */
    async getEps() {
        return this.ok(this.eps);
    }
    /**
     * 文件上传
     */
    async upload() {
        console.log(this.ctx);
        const result = await this.coolFile.upload(this.ctx);
        const log = await this.baseSysLogUploadEntity.save({
            url: result.toString(),
            createBy: this.ctx.user.userId,
            updateBy: this.ctx.user.userId,
        });
        return log.id;
    }
    urlToFile(url, filename, mimeType) {
        return fetch(url)
            .then(res => {
            return res.arrayBuffer();
        })
            .then(buf => {
            return new File([buf], filename, { type: mimeType });
        });
    }
    /**
     * 文件上传模式，本地或者云存储
     */
    async uploadMode() {
        return this.ok(await this.coolFile.getMode());
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(log_upload_1.BaseSysLogUploadEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseAppCommController.prototype, "baseSysLogUploadEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", file_1.CoolFile)
], BaseAppCommController.prototype, "coolFile", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseAppCommController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolEps)
], BaseAppCommController.prototype, "eps", void 0);
__decorate([
    (0, decorator_1.Get)('/eps', { summary: '实体信息与路径' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseAppCommController.prototype, "getEps", null);
__decorate([
    (0, decorator_1.Post)('/upload', { summary: '文件上传' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseAppCommController.prototype, "upload", null);
__decorate([
    (0, decorator_1.Get)('/uploadMode', { summary: '文件上传模式' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseAppCommController.prototype, "uploadMode", null);
BaseAppCommController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)('/app/comm')
], BaseAppCommController);
exports.BaseAppCommController = BaseAppCommController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9jb250cm9sbGVyL2FwcC9jb21tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0RTtBQUM1RSw0Q0FBNkM7QUFDN0MsbURBQWlFO0FBRWpFLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsNERBQXFFO0FBRXJFOztHQUVHO0FBR0gsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxxQkFBYztJQWF2RDs7O09BR0c7SUFFSSxLQUFLLENBQUMsTUFBTTtRQUNqQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1lBQ2pELEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQy9CLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUTtRQUMvQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0YsQ0FBQTtBQXBEQztJQURDLElBQUEsdUJBQWlCLEVBQUMsbUNBQXNCLENBQUM7OEJBQ2xCLG9CQUFVO3FFQUF5QjtBQUczRDtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDQyxlQUFRO3VEQUFDO0FBR25CO0lBREMsSUFBQSxrQkFBTSxHQUFFOztrREFDSTtBQUdiO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNKLGNBQU87a0RBQUM7QUFPYjtJQURDLElBQUEsZUFBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQzs7OzttREFHbkM7QUFNRDtJQURDLElBQUEsZ0JBQUksRUFBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7Ozs7bURBVXBDO0FBZ0JEO0lBREMsSUFBQSxlQUFHLEVBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzs7O3VEQUd6QztBQXJEVSxxQkFBcUI7SUFGakMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDLFdBQVcsQ0FBQztHQUNmLHFCQUFxQixDQXNEakM7QUF0RFksc0RBQXFCIn0=