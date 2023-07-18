import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { TaskInfoEntity } from '../entity/info';
import { TaskLogEntity } from '../entity/log';
import { ILogger } from '@midwayjs/logger';
import { Utils } from '../../../comm/utils';
import { TaskInfoQueue } from '../queue/task';
import { IMidwayApplication } from '@midwayjs/core';
/**
 * 任务
 */
export declare class TaskInfoService extends BaseService {
    taskInfoEntity: Repository<TaskInfoEntity>;
    logger: ILogger;
    taskLogEntity: Repository<TaskLogEntity>;
    taskInfoQueue: TaskInfoQueue;
    app: IMidwayApplication;
    utils: Utils;
    /**
     * 停止任务
     * @param id
     */
    stop(id: any): Promise<void>;
    /**
     * 移除任务
     * @param taskId
     */
    remove(taskId: any): Promise<void>;
    /**
     * 开始任务
     * @param id
     * @param type
     */
    start(id: any, type?: any): Promise<void>;
    /**
     * 手动执行一次
     * @param id
     */
    once(id: any): Promise<void>;
    /**
     * 检查任务是否存在
     * @param jobId
     */
    exist(jobId: any): Promise<boolean>;
    /**
     * 新增或修改
     * @param params
     */
    addOrUpdate(params: any): Promise<void>;
    /**
     * 删除
     * @param ids
     */
    delete(ids: any): Promise<void>;
    /**
     * 任务日志
     * @param query
     */
    log(query: any): Promise<{
        list: any;
        pagination: {
            page: number;
            size: number;
            total: number;
        };
    }>;
    /**
     * 保存任务记录，成功任务每个任务保留最新20条日志，失败日志不會删除
     * @param task
     * @param status
     * @param detail
     */
    record(task: any, status: any, detail?: any): Promise<void>;
    /**
     * 初始化任务
     */
    initTask(): Promise<void>;
    /**
     * 任务ID
     * @param jobId
     */
    getNextRunTime(jobId: any): Promise<any>;
    /**
     * 更新下次执行时间
     * @param jobId
     */
    updateNextRunTime(jobId: any): Promise<void>;
    /**
     * 详情
     * @param id
     * @returns
     */
    info(id: any): Promise<any>;
    /**
     * 刷新任务状态
     */
    updateStatus(jobId: any): Promise<void>;
    /**
     * 调用service
     * @param serviceStr
     */
    invokeService(serviceStr: any): Promise<any>;
}
