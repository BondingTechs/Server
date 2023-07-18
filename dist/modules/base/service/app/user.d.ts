import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysUserEntity } from '../../entity/sys/user';
import { BaseSysUserRoleEntity } from '../../entity/sys/user_role';
import { BaseSysDepartmentEntity } from '../../entity/sys/department';
import { CacheManager } from '@midwayjs/cache';
import { Context } from '@midwayjs/koa';
import { Utils } from '../../../../comm/utils';
import { TipAppService } from '../../../award/service/app/tips';
import { BaseAppAuthService } from './auth';
import { BaseUserIdentityEntity } from '../../../base/entity/sys/user_identity';
/**
 * 系統用戶
 */
export declare class BaseApiUserService extends BaseService {
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    baseSysUserRoleEntity: Repository<BaseSysUserRoleEntity>;
    baseSysDepartmentEntity: Repository<BaseSysDepartmentEntity>;
    userIdentityEntity: Repository<BaseUserIdentityEntity>;
    tipAppService: Repository<TipAppService>;
    baseAppAuthService: BaseAppAuthService;
    cacheManager: CacheManager;
    ctx: Context;
    utils: Utils;
    /**
     * 獲得個人信息
     */
    person(): Promise<{
        departmentId: number;
        socketId: string;
        username: string;
        password: string;
        passwordV: number;
        avatar: string;
        firstName: string;
        lastName: string;
        gender: number;
        birthday: string;
        area: string;
        phone: string;
        email: string;
        idCard: string;
        identityStatus: number;
        intro: string;
        remark: string;
        emailStatus: number;
        status: number;
        departmentName: string;
        roleIdList: number[];
        id: number;
        createTime: Date;
        updateTime: Date;
    }>;
    /**
     * 修改
     * @param param 數據
     */
    personUpdate(param: any): Promise<void>;
    /**
     * 重設密碼
     */
    resetPassword(reset: any): Promise<void>;
    /**
     * 根據ID獲得信息
     * @param id
     */
    info(id: any): Promise<BaseSysUserEntity>;
    /**
     * 刪除帳戶
     */
    delete(): Promise<void>;
    /**
     * 綁定Email
     */
    emailBinding(param: any): Promise<any>;
    /**
     * 驗證Email
     */
    emailVerify({ token }: {
        token: any;
    }): Promise<void>;
    /**
     * 更換手機
     */
    changePhone({ phone, verifyCode }: {
        phone: any;
        verifyCode: any;
    }): Promise<{
        id: any;
        phone: any;
    } & BaseSysUserEntity>;
    /**
     * 登出
     */
    logout(): Promise<void>;
}
