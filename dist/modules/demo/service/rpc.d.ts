import { IMidwayApplication } from '@midwayjs/core';
import { BaseRpcService, CoolRpc } from '@cool-midway/rpc';
import { QueryRunner } from 'typeorm';
export declare class DemoRpcService extends BaseRpcService {
    app: IMidwayApplication;
    rpc: CoolRpc;
    /**
     * 分布式事务
     * @param params 方法参数
     * @param rpcTransactionId 无需调用者传参， 本次事务的ID，ID會自动注入无需调用者传参
     * @param queryRunner 无需调用者传参，操作数据库，需要用queryRunner操作数据库，才能统一提交或回滚事务
     */
    transaction(params: any, rpcTransactionId?: any, queryRunner?: QueryRunner): Promise<void>;
    info(params: any): Promise<any>;
    getUser(): Promise<{
        uid: string;
        username: string;
        phone: string;
        email: string;
    }>;
}
