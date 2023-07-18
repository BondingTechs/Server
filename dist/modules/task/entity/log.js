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
exports.TaskLogEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 任务日志
 */
let TaskLogEntity = class TaskLogEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ comment: '任务ID', nullable: true, type: 'bigint' }),
    __metadata("design:type", Number)
], TaskLogEntity.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '状态 0:失败 1：成功', default: 0, type: 'tinyint' }),
    __metadata("design:type", Number)
], TaskLogEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '详情描述', nullable: true, type: 'text' }),
    __metadata("design:type", String)
], TaskLogEntity.prototype, "detail", void 0);
TaskLogEntity = __decorate([
    (0, orm_1.EntityModel)('task_log')
], TaskLogEntity);
exports.TaskLogEntity = TaskLogEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YXNrL2VudGl0eS9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxxQ0FBd0M7QUFFeEM7O0dBRUc7QUFFSCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsaUJBQVU7Q0FVNUMsQ0FBQTtBQVBDO0lBRkMsSUFBQSxlQUFLLEdBQUU7SUFDUCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzs2Q0FDN0M7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7OzZDQUNsRDtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7NkNBQzNDO0FBVEosYUFBYTtJQUR6QixJQUFBLGlCQUFXLEVBQUMsVUFBVSxDQUFDO0dBQ1gsYUFBYSxDQVV6QjtBQVZZLHNDQUFhIn0=