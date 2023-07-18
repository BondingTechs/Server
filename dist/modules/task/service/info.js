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
exports.TaskInfoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const info_1 = require("../entity/info");
const log_1 = require("../entity/log");
const _ = require("lodash");
const utils_1 = require("../../../comm/utils");
const task_1 = require("../queue/task");
/**
 * 任务
 */
let TaskInfoService = class TaskInfoService extends core_1.BaseService {
    /**
     * 停止任务
     * @param id
     */
    async stop(id) {
        const task = await this.taskInfoEntity.findOne({ id });
        if (task) {
            const result = await this.taskInfoQueue.getRepeatableJobs();
            const job = _.find(result, { id: task.id + '' });
            if (job) {
                await this.taskInfoQueue.removeRepeatableByKey(job.key);
            }
            task.status = 0;
            await this.taskInfoEntity.update(task.id, task);
            await this.updateNextRunTime(task.id);
        }
    }
    /**
     * 移除任务
     * @param taskId
     */
    async remove(taskId) {
        const result = await this.taskInfoQueue.getRepeatableJobs();
        const job = _.find(result, { id: taskId + '' });
        await this.taskInfoQueue.removeRepeatableByKey(job.key);
    }
    /**
     * 开始任务
     * @param id
     * @param type
     */
    async start(id, type) {
        const task = await this.taskInfoEntity.findOne({ id });
        task.status = 1;
        if (type || type == 0) {
            task.type = type;
        }
        await this.addOrUpdate(task);
    }
    /**
     * 手动执行一次
     * @param id
     */
    async once(id) {
        const task = await this.taskInfoEntity.findOne({ id });
        if (task) {
            await this.taskInfoQueue.add({
                ...task,
                isOnce: true,
            }, {
                jobId: task.id.toString(),
                removeOnComplete: true,
                removeOnFail: true,
            });
        }
    }
    /**
     * 检查任务是否存在
     * @param jobId
     */
    async exist(jobId) {
        const result = await this.taskInfoQueue.getRepeatableJobs();
        const ids = result.map(e => {
            return e.id;
        });
        return ids.includes(jobId.toString());
    }
    /**
     * 新增或修改
     * @param params
     */
    async addOrUpdate(params) {
        delete params.repeatCount;
        let repeatConf;
        await this.getOrmManager().transaction(async (transactionalEntityManager) => {
            if (params.taskType === 0) {
                params.limit = null;
                params.every = null;
            }
            else {
                params.cron = null;
            }
            await transactionalEntityManager.save(info_1.TaskInfoEntity, params);
            if (params.status === 1) {
                const exist = await this.exist(params.id);
                if (exist) {
                    await this.remove(params.id);
                }
                const { every, limit, startDate, endDate, cron } = params;
                const repeat = {
                    every,
                    limit,
                    jobId: params.id,
                    startDate,
                    endDate,
                    cron,
                };
                await this.utils.removeEmptyP(repeat);
                const result = await this.taskInfoQueue.add(params, {
                    jobId: params.id,
                    removeOnComplete: true,
                    removeOnFail: true,
                    repeat,
                });
                if (!result) {
                    throw new Error('任务添加失败，请检查任务配置');
                }
                // await transactionalEntityManager.update(TaskInfoEntity, params.id, {
                //   jobId: params.id,
                //   type: params.type,
                // });
                repeatConf = result.opts;
            }
        });
        if (params.status === 1) {
            this.utils.sleep(1000);
            await this.updateNextRunTime(params.id);
            await this.nativeQuery('update task_info a set a.repeatConf = ? where a.id = ?', [JSON.stringify(repeatConf.repeat), params.id]);
        }
    }
    /**
     * 删除
     * @param ids
     */
    async delete(ids) {
        let idArr;
        if (ids instanceof Array) {
            idArr = ids;
        }
        else {
            idArr = ids.split(',');
        }
        for (const id of idArr) {
            const task = await this.taskInfoEntity.findOne({ id });
            const exist = await this.exist(task.id);
            if (exist) {
                this.stop(task.id);
            }
            await this.taskInfoEntity.delete({ id });
            await this.taskLogEntity.delete({ taskId: id });
        }
    }
    /**
     * 任务日志
     * @param query
     */
    async log(query) {
        const { id, status } = query;
        return await this.sqlRenderPage(`
      SELECT
          a.*,
          b.NAME AS taskName
      FROM
      task_log a
      JOIN task_info b ON a.taskId = b.id
      where 1=1
      ${this.setSql(id, 'and a.taskId = ?', [id])}
      ${this.setSql(status, 'and a.status = ?', [status])}
      `, query);
    }
    /**
     * 保存任务记录，成功任务每个任务保留最新20条日志，失败日志不會删除
     * @param task
     * @param status
     * @param detail
     */
    async record(task, status, detail) {
        await this.taskLogEntity.save({
            taskId: task.id,
            status,
            detail: detail || '',
        });
        await this.nativeQuery(`DELETE a
      FROM
      task_log a,
          ( SELECT id FROM task_log where taskId = ? AND status = 1 ORDER BY id DESC LIMIT ?, 1 ) b
      WHERE
      a.taskId = ? AND
      a.status = 1 AND
      a.id < b.id`, [task.id, 19, task.id]); // 日志保留最新的20条
    }
    /**
     * 初始化任务
     */
    async initTask() {
        setTimeout(async () => {
            const runningTasks = await this.taskInfoEntity.find({ status: 1 });
            if (!_.isEmpty(runningTasks)) {
                for (const task of runningTasks) {
                    const job = await this.exist(task.id); // 任务已存在就不添加
                    if (!job) {
                        this.logger.info(`init task ${task.name}`);
                        await this.addOrUpdate(task);
                    }
                }
            }
        }, 3000);
    }
    /**
     * 任务ID
     * @param jobId
     */
    async getNextRunTime(jobId) {
        let nextRunTime;
        const result = await this.taskInfoQueue.getRepeatableJobs();
        const task = _.find(result, { id: jobId + '' });
        if (task) {
            nextRunTime = new Date(task.next);
        }
        return nextRunTime;
    }
    /**
     * 更新下次执行时间
     * @param jobId
     */
    async updateNextRunTime(jobId) {
        await this.nativeQuery('update task_info a set a.nextRunTime = ? where a.id = ?', [await this.getNextRunTime(jobId), jobId]);
    }
    /**
     * 详情
     * @param id
     * @returns
     */
    async info(id) {
        const info = await this.taskInfoEntity.findOne({ id });
        return {
            ...info,
            repeatCount: info.limit,
        };
    }
    /**
     * 刷新任务状态
     */
    async updateStatus(jobId) {
        const result = await this.taskInfoQueue.getRepeatableJobs();
        const job = _.find(result, { id: jobId + '' });
        if (!job) {
            return;
        }
        // @ts-ignore
        const task = await this.taskInfoEntity.findOne({ id: job.id });
        const nextTime = await this.getNextRunTime(task.id);
        if (task) {
            //   if (task.nextRunTime.getTime() == nextTime.getTime()) {
            //     task.status = 0;
            //     task.nextRunTime = nextTime;
            //     this.taskInfoQueue.removeRepeatableByKey(job.key);
            //   } else {
            task.nextRunTime = nextTime;
            //   }
            await this.taskInfoEntity.update(task.id, task);
        }
    }
    /**
     * 调用service
     * @param serviceStr
     */
    async invokeService(serviceStr) {
        if (serviceStr) {
            const arr = serviceStr.split('.');
            const service = await this.app.getApplicationContext().getAsync(arr[0]);
            for (const child of arr) {
                if (child.includes('(')) {
                    const lastArr = child.split('(');
                    const param = lastArr[1].replace(')', '');
                    if (!param) {
                        return service[lastArr[0]]();
                    }
                    else {
                        return service[lastArr[0]](JSON.parse(param));
                    }
                }
            }
        }
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(info_1.TaskInfoEntity),
    __metadata("design:type", typeorm_1.Repository)
], TaskInfoService.prototype, "taskInfoEntity", void 0);
__decorate([
    (0, decorator_1.Logger)(),
    __metadata("design:type", Object)
], TaskInfoService.prototype, "logger", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(log_1.TaskLogEntity),
    __metadata("design:type", typeorm_1.Repository)
], TaskInfoService.prototype, "taskLogEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", task_1.TaskInfoQueue)
], TaskInfoService.prototype, "taskInfoQueue", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], TaskInfoService.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", utils_1.Utils)
], TaskInfoService.prototype, "utils", void 0);
TaskInfoService = __decorate([
    (0, decorator_1.Provide)(),
    (0, decorator_1.Scope)(decorator_1.ScopeEnum.Request, { allowDowngrade: true })
], TaskInfoService);
exports.TaskInfoService = TaskInfoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFzay9zZXJ2aWNlL2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBTzZCO0FBQzdCLDRDQUFnRDtBQUNoRCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHlDQUFnRDtBQUNoRCx1Q0FBOEM7QUFFOUMsNEJBQTRCO0FBQzVCLCtDQUE0QztBQUM1Qyx3Q0FBOEM7QUFHOUM7O0dBRUc7QUFHSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGtCQUFXO0lBbUI5Qzs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzVELE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FB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