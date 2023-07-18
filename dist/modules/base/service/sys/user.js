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
exports.BaseSysUserService = void 0;
const core_1 = require("@cool-midway/core");
const cache_1 = require("@midwayjs/cache");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const md5 = require("md5");
const typeorm_1 = require("typeorm");
const department_1 = require("../../entity/sys/department");
const log_upload_1 = require("../../entity/sys/log_upload");
const user_1 = require("../../entity/sys/user");
const user_identity_1 = require("../../entity/sys/user_identity");
const user_role_1 = require("../../entity/sys/user_role");
const perms_1 = require("./perms");
/**
 * 系統用戶
 */
let BaseSysUserService = class BaseSysUserService extends core_1.BaseService {
    /**
     * 分頁查詢
     * @param query
     */
    async page(query) {
        const { keyWord, status, departmentIds = [] } = query;
        // const permsDepartmentArr = await this.baseSysPermsService.departmentIds(
        //   this.ctx.admin.userId
        // ); // 部門權限
        const sql = `
        SELECT
            a.id,
            concat(a.firstName, ' ', a.lastName) As name,
            a.username,
            a.avatar,
            a.email,
            a.remark,
            a.createTime,
            a.updateTime,
            a.phone,
            a.departmentId,
            a.status,
            a.identityStatus,
            a.emailStatus,
            GROUP_CONCAT(c.name) AS roleName,
            d.name as departmentName
        FROM
            base_sys_user a
            LEFT JOIN base_sys_user_role b ON a.id = b.userId
            LEFT JOIN base_sys_role c ON b.roleId = c.id
            LEFT JOIN base_sys_department d ON a.departmentId = d.id
            LEFT JOIN base_sys_user_identity e ON a.id = e.userId
        WHERE 1 = 1
            ${this.setSql(!_.isEmpty(departmentIds), 'and a.departmentId in (?)', [departmentIds])}
            ${this.setSql(status, 'and a.status = ?', [status])}
            ${this.setSql(keyWord, 'and (a.name LIKE ? or a.username LIKE ?)', [
            `%${keyWord}%`,
            `%${keyWord}%`,
        ])}
            ${this.setSql(true, 'and a.username != ?', ['admin'])}
        GROUP BY a.id
        `;
        return this.sqlRenderPage(sql, query);
    }
    //         ${this.setSql(
    //   this.ctx.admin.username !== 'admin',
    //   'and a.departmentId in (?)',
    //   [!_.isEmpty(permsDepartmentArr) ? permsDepartmentArr : [null]]
    // )}
    /**
     * 移動部門
     * @param departmentId
     * @param userIds
     */
    async move(departmentId, userIds) {
        await this.baseSysUserEntity
            .createQueryBuilder()
            .update()
            .set({ departmentId })
            .where('id in (:userIds)', { userIds })
            .execute();
    }
    /**
     * 獲得個人信息
     */
    async person() {
        var _a;
        const info = await this.baseSysUserEntity.findOne({
            id: (_a = this.ctx.admin) === null || _a === void 0 ? void 0 : _a.userId,
        });
        info === null || info === void 0 ? true : delete info.password;
        return info;
    }
    /**
     * 更新用戶角色關係
     * @param user
     */
    async updateUserRole(user) {
        if (_.isEmpty(user.roleIdList)) {
            return;
        }
        if (user.username === 'admin') {
            throw new core_1.CoolCommException('非法操作~');
        }
        await this.baseSysUserRoleEntity.delete({ userId: user.id });
        if (user.roleIdList) {
            for (const roleId of user.roleIdList) {
                await this.baseSysUserRoleEntity.save({ userId: user.id, roleId });
            }
        }
        await this.baseSysPermsService.refreshPerms(user.id);
    }
    /**
     * 新增
     * @param param
     */
    async add(param) {
        const exists = await this.baseSysUserEntity.findOne({
            username: param.username,
        });
        if (!_.isEmpty(exists)) {
            throw new core_1.CoolCommException('用戶名已存在');
        }
        param.password = md5(param.password);
        await this.baseSysUserEntity.save(param);
        await this.updateUserRole(param);
        return param.id;
    }
    /**
     * 根據ID獲得信息
     * @param id
     */
    async info(id) {
        const info = await this.baseSysUserEntity.findOne({ id });
        const userRoles = await this.nativeQuery('select a.roleId from base_sys_user_role a where a.userId = ?', [id]);
        const department = await this.baseSysDepartmentEntity.findOne({
            id: info.departmentId,
        });
        if (info) {
            delete info.password;
            if (userRoles) {
                info.roleIdList = userRoles.map(e => {
                    return parseInt(e.roleId);
                });
            }
        }
        delete info.password;
        if (department) {
            info.departmentName = department.name;
        }
        if (!info.intro)
            info.intro = '';
        return info;
    }
    /**
     * 修改個人信息
     * @param param
     */
    async personUpdate(param) {
        param.id = this.ctx.admin.userId;
        if (!_.isEmpty(param.password)) {
            param.password = md5(param.password);
            const userInfo = await this.baseSysUserEntity.findOne({ id: param.id });
            if (!userInfo) {
                throw new core_1.CoolCommException('用戶不存在');
            }
            param.passwordV = userInfo.passwordV + 1;
            await this.cacheManager.set(`admin:passwordVersion:${param.id}`, param.passwordV);
        }
        else {
            delete param.password;
        }
        await this.baseSysUserEntity.save(param);
    }
    /**
     * 修改
     * @param param 數據
     */
    async update(param) {
        if (param.id && param.username === 'admin') {
            throw new core_1.CoolCommException('非法操作~');
        }
        if (!_.isEmpty(param.password)) {
            param.password = md5(param.password);
            const userInfo = await this.baseSysUserEntity.findOne({ id: param.id });
            if (!userInfo) {
                throw new core_1.CoolCommException('用戶不存在');
            }
            param.passwordV = userInfo.passwordV + 1;
            await this.cacheManager.set(`admin:passwordVersion:${param.id}`, param.passwordV);
        }
        else {
            delete param.password;
        }
        if (param.status === 0) {
            await this.forbidden(param.id);
        }
        await this.baseSysUserEntity.save(param);
        await this.updateUserRole(param);
    }
    /**
     * 禁用用戶
     * @param userId
     */
    async forbidden(userId) {
        await this.cacheManager.del(`admin:token:${userId}`);
    }
    // 查看身份驗證
    async getIdentity(userId) {
        const info = await this.baseUserIdentityEntity.findOne({ userId });
        if (_.isEmpty(info))
            throw new core_1.CoolCommException('該用戶尚未進行驗證');
        const positive = await this.baseSysLogUploadEntity.findOne({
            id: info.positiveId,
        });
        const negative = await this.baseSysLogUploadEntity.findOne({
            id: info.negativeId,
        });
        return { positive: positive.url, negative: negative.url };
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysUserService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_role_1.BaseSysUserRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysUserService.prototype, "baseSysUserRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(department_1.BaseSysDepartmentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysUserService.prototype, "baseSysDepartmentEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_identity_1.BaseUserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysUserService.prototype, "baseUserIdentityEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(log_upload_1.BaseSysLogUploadEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysUserService.prototype, "baseSysLogUploadEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseSysUserService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseSysUserService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysUserService.prototype, "ctx", void 0);
BaseSysUserService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysUserService);
exports.BaseSysUserService = BaseSysUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL3N5cy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSwyQ0FBK0M7QUFDL0MsbURBQXNEO0FBQ3RELHVDQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyw0REFBc0U7QUFDdEUsNERBQXFFO0FBQ3JFLGdEQUEwRDtBQUMxRCxrRUFBd0U7QUFDeEUsMERBQW1FO0FBQ25FLG1DQUE4QztBQUU5Qzs7R0FFRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0JBQVc7SUF5QmpEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsR0FBRyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdEQsMkVBQTJFO1FBQzNFLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsTUFBTSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQXdCRixJQUFJLENBQUMsTUFBTSxDQUNuQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQ3pCLDJCQUEyQixFQUMzQixDQUFDLGFBQWEsQ0FBQyxDQUNoQjtjQUNTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Y0FDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsMENBQTBDLEVBQUU7WUFDekUsSUFBSSxPQUFPLEdBQUc7WUFDZCxJQUFJLE9BQU8sR0FBRztTQUNmLENBQUM7Y0FDUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxxQkFB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