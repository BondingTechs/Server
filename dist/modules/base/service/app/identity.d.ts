import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { BaseSysUserEntity } from '../../../base/entity/sys/user';
import { BaseUserIdentityEntity } from '../../entity/sys/user_identity';
/**
 * 描述
 */
export declare class UserIdentityService extends BaseService {
    userIdentityEntity: Repository<BaseUserIdentityEntity>;
    baseSysUserEntity: Repository<BaseSysUserEntity>;
    ctx: any;
    /**
     * 描述
     */
    identityCert(param: any): Promise<void>;
    /**
     * 身份驗證
     */
    identityVerify(params: any): Promise<void>;
}
