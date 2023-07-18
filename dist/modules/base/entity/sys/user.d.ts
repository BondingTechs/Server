import { BaseEntity } from '@cool-midway/core';
/**
 * 系統用戶
 */
export declare class BaseSysUserEntity extends BaseEntity {
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
}
