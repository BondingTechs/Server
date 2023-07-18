import { BaseService } from '@cool-midway/core';
import { CacheManager } from '@midwayjs/cache';
import { Context } from '@midwayjs/koa';
import { Repository } from 'typeorm';
import { BaseSysDepartmentEntity } from '../../entity/sys/department';
import { BaseSysRoleEntity } from '../../entity/sys/role';
import { BaseSysUserEntity } from '../../entity/sys/user';
import { BaseSysUserRoleEntity } from '../../entity/sys/user_role';
import { BaseSysDepartmentService } from '../sys/department';
import { BaseSysMenuService } from '../sys/menu';
import { BaseSysPermsService } from '../sys/perms';
import { BaseSysRoleService } from '../sys/role';
import { BaseSysUserService } from '../sys/user';
import { BaseApiUserService } from './user';
/**
 * 登錄
 */
export declare class BaseAppAuthService extends BaseService {
    jwtConfig: any;
    cacheManager: CacheManager;
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    baseSysRoleEntity: Repository<BaseSysRoleEntity>;
    baseSysUserRoleEntity: Repository<BaseSysUserRoleEntity>;
    baseSysDepartmentEntity: Repository<BaseSysDepartmentEntity>;
    baseSysUserService: BaseSysUserService;
    baseApiUserService: BaseApiUserService;
    baseSysRoleService: BaseSysRoleService;
    baseSysPermsService: BaseSysPermsService;
    baseSysMenuService: BaseSysMenuService;
    baseSysDepartmentService: BaseSysDepartmentService;
    ctx: Context;
    coolConfig: any;
    /**
     * 登錄
     * @param login
     */
    login(login: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    person(id: any): Promise<{
        departmentName: string;
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
        roleIdList: number[];
        id: number;
        createTime: Date;
        updateTime: Date;
    }>;
    /**
     * 註冊
     * @param register
     */
    register(register: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    createRandomString(len: number): string;
    /**
     * 忘記密碼
     */
    forgot(forgot: any): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 發送手機驗證碼
     * @param captcha 國際區號
     */
    captcha({ type, phone, area }: {
        type: any;
        phone: any;
        area: any;
    }): Promise<any>;
    /**
     * 檢驗手機驗證碼
     * @param phone 手機號
     * @param value 驗證碼
     */
    captchaCheck(areaPhone: any, smsCode: any): Promise<any>;
    /**
     * 生成token
     * @param user 用戶對象
     * @param roleIds 角色集合
     * @param expire 過期
     * @param isRefresh 是否是刷新
     */
    generateToken(user: any, roleIds: any, expire: any, isRefresh?: any): Promise<any>;
    /**
     * 刷新token
     * @param token
     */
    refreshToken({ refreshToken: token }: {
        refreshToken: any;
    }): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: string;
    }>;
}
