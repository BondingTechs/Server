import { BaseService } from '@cool-midway/core';
import { LoginDTO } from '../../dto/login';
import { BaseSysUserEntity } from '../../entity/sys/user';
import { Repository } from 'typeorm';
import { BaseSysRoleService } from './role';
import { BaseSysMenuService } from './menu';
import { BaseSysDepartmentService } from './department';
import { Context } from '@midwayjs/koa';
import { CacheManager } from '@midwayjs/cache';
/**
 * 登錄
 */
export declare class BaseSysLoginService extends BaseService {
    cacheManager: CacheManager;
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    baseSysRoleService: BaseSysRoleService;
    baseSysMenuService: BaseSysMenuService;
    baseSysDepartmentService: BaseSysDepartmentService;
    ctx: Context;
    coolConfig: any;
    /**
     * 登錄
     * @param login
     */
    login(login: LoginDTO): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: any;
    }>;
    /**
     * 驗證碼
     * @param type 圖片驗證碼類型 svg
     * @param width 寬
     * @param height 高
     */
    captcha(type: string, width?: number, height?: number): Promise<{
        captchaId: any;
        data: string;
    }>;
    /**
     * 退出登錄
     */
    logout(): Promise<void>;
    /**
     * 檢驗圖片驗證碼
     * @param captchaId 驗證碼ID
     * @param value 驗證碼
     */
    captchaCheck(captchaId: any, value: any): Promise<boolean>;
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
    refreshToken(token: string): Promise<{
        expire: any;
        token: any;
        refreshExpire: any;
        refreshToken: string;
    }>;
}
