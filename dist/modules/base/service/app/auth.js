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
exports.BaseAppAuthService = void 0;
const core_1 = require("@cool-midway/core");
const cache_1 = require("@midwayjs/cache");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const md5 = require("md5");
const department_1 = require("../../entity/sys/department");
const role_1 = require("../../entity/sys/role");
const user_1 = require("../../entity/sys/user");
const user_role_1 = require("../../entity/sys/user_role");
const department_2 = require("../sys/department");
const menu_1 = require("../sys/menu");
const perms_1 = require("../sys/perms");
const role_2 = require("../sys/role");
const user_2 = require("../sys/user");
const credentials_1 = require("../../../../config/credentials");
const user_3 = require("./user");
/**
 * 登錄
 */
let BaseAppAuthService = class BaseAppAuthService extends core_1.BaseService {
    /**
     * 登錄
     * @param login
     */
    async login(login) {
        // rememberMe
        const { area, phone, password } = login;
        const user = await this.baseSysUserEntity.findOne({
            where: [{ area, phone }],
        });
        // 校驗用戶
        if (user) {
            // 校驗用戶狀態及密碼
            if (user.status === 0) {
                throw new core_1.CoolValidateException('該帳號已被禁用');
            }
            if (user.password !== md5(password)) {
                throw new core_1.CoolValidateException('手機或密碼不正確');
            }
        }
        else {
            throw new core_1.CoolCommException('該手機號碼尚未註冊');
        }
        // 校驗角色
        const roleIds = await this.baseSysRoleService.getByUser(user.id);
        if (_.isEmpty(roleIds)) {
            throw new core_1.CoolCommException('該用戶未分配任何角色，無法登錄');
        }
        // 生成token
        const { expire, refreshExpire } = this.coolConfig.jwt.token;
        const result = {
            expire,
            token: await this.generateToken(user, roleIds, expire),
            refreshExpire,
            refreshToken: await this.generateToken(user, roleIds, refreshExpire, true),
        };
        // 將用戶相關信息保存到緩存
        const perms = await this.baseSysMenuService.getPerms(roleIds);
        const departments = await this.baseSysDepartmentService.getByRoleIds(roleIds, false);
        // return perms;
        await this.cacheManager.set(`user:department:${user.id}`, departments);
        await this.cacheManager.set(`user:perms:${user.id}`, perms);
        await this.cacheManager.set(`user:token:${user.id}`, result.token);
        await this.cacheManager.set(`user:token:refresh:${user.id}`, result.token);
        return result;
    }
    async person(id) {
        const info = await this.baseSysUserEntity.findOne({
            id: id,
        });
        if (_.isEmpty(info))
            throw new core_1.CoolCommException('未找到該用戶，請聯絡管理員');
        [
            'id',
            'username',
            'password',
            'passwordV',
            'createTime',
            'createBy',
            'updateTime',
            'updateBy',
            'deleteTime',
            'deleteBy',
            'status',
            'verify',
        ].forEach(e => delete info[e]);
        const { name: departmentName } = await this.baseSysDepartmentEntity.findOne({
            id: info === null || info === void 0 ? void 0 : info.departmentId,
        });
        delete info['departmentId'];
        return { ...info, departmentName };
    }
    /**
     * 註冊
     * @param register
     */
    async register(register) {
        const { area, phone, verifyCode, password, passwordConfirm } = register;
        if (this.ctx.user)
            throw new core_1.CoolCommException('請登出');
        const roleLabel = 'member';
        const departmentId = 13;
        const identityStatus = 24;
        const emailStatus = 17;
        // 驗證密碼長度
        const passwordLimit = 8;
        if (password.length < passwordLimit)
            throw new core_1.CoolCommException(`密碼長度最少需${passwordLimit}個字元`);
        // 校驗密碼
        if (!_.isEqual(password, passwordConfirm))
            throw new core_1.CoolValidateException('請確認輸入的密碼相同');
        // 校驗用戶
        const exists = await this.baseSysUserEntity.findOne({
            where: [{ phone }],
        });
        if (!_.isEmpty(exists))
            throw new core_1.CoolCommException('該手機號碼已被使用');
        // 校驗驗證碼
        register.username = this.createRandomString(16);
        await this.captchaCheck(`${area}${register.phone}`, verifyCode);
        // 生成md5密碼
        register.password = md5(register.password);
        // 寫入資料庫
        // 儲存用戶資料
        const user = await this.baseSysUserEntity.save({
            ...register,
            identityStatus,
            emailStatus,
            departmentId,
            createBy: 1,
            updateBy: 1,
        });
        await this.baseSysUserEntity.save({
            id: user.id,
            createBy: user.id,
            updateBy: user.id,
        });
        const roleMember = await this.baseSysRoleEntity.findOne({
            label: roleLabel,
        });
        const roleIds = [roleMember.id];
        // 儲存用戶角色
        await this.baseSysUserRoleEntity.save({
            userId: user.id,
            roleId: roleMember.id,
        });
        await this.baseSysPermsService.refreshPerms(user.id);
        // 生成token提供前端登入
        const { expire, refreshExpire } = this.coolConfig.jwt.token;
        const result = {
            expire,
            token: await this.generateToken(user, roleIds, expire),
            refreshExpire,
            refreshToken: await this.generateToken(user, roleIds, refreshExpire, true),
        };
        // 將用戶相關信息保存到緩存
        const perms = await this.baseSysMenuService.getPerms(roleIds);
        const departments = await this.baseSysDepartmentService.getByRoleIds(roleIds, false);
        await this.cacheManager.set(`user:department:${user.id}`, departments);
        await this.cacheManager.set(`user:perms:${user.id}`, perms);
        await this.cacheManager.set(`user:token:${user.id}`, result.token);
        await this.cacheManager.set(`user:token:refresh:${user.id}`, result.token);
        return result;
    }
    createRandomString(len) {
        let maxLen = 8, min = Math.pow(16, Math.min(len, maxLen) - 1), max = Math.pow(16, Math.min(len, maxLen)) - 1, n = Math.floor(Math.random() * (max - min + 1)) + min, r = n.toString(16);
        while (r.length < len) {
            r = r + this.createRandomString(len - maxLen);
        }
        return r;
    }
    /**
     * 忘記密碼
     */
    async forgot(forgot) {
        const { area, phone, verifyCode, password, passwordConfirm } = forgot;
        // 驗證密碼長度
        const passwordLimit = 8;
        if (password.length < passwordLimit)
            throw new core_1.CoolCommException(`密碼長度最少需${passwordLimit}個字元`);
        // 校驗密碼
        if (!_.isEqual(password, passwordConfirm))
            throw new core_1.CoolValidateException('請確認輸入的密碼相同');
        // 校驗用戶
        const user = await this.baseSysUserEntity.findOne({
            where: [{ phone }],
        });
        if (_.isEmpty(user))
            throw new core_1.CoolCommException('該號碼尚未註冊');
        // 校驗驗證碼
        const areaPhone = area + phone.substring(1);
        await this.captchaCheck(`+${areaPhone}`, verifyCode);
        // 寫入資料庫
        forgot.password = md5(forgot.password);
        const passwordV = user.passwordV + 1;
        await this.baseSysUserEntity.save({ ...forgot, id: user.id, passwordV });
        // 生成token
        const { expire, refreshExpire } = this.coolConfig.jwt.token;
        const roleIds = await this.baseSysRoleService.getByUser(user.id);
        const result = {
            expire,
            token: await this.generateToken(user, roleIds, expire),
            refreshExpire,
            refreshToken: await this.generateToken(user, roleIds, refreshExpire, true),
        };
        // 將用戶相關信息保存到緩存
        const perms = await this.baseSysMenuService.getPerms(roleIds);
        const departments = await this.baseSysDepartmentService.getByRoleIds(roleIds, false);
        // return perms;
        await this.cacheManager.set(`user:department:${user.id}`, departments);
        await this.cacheManager.set(`user:perms:${user.id}`, perms);
        await this.cacheManager.set(`user:token:${user.id}`, result.token);
        await this.cacheManager.set(`user:token:refresh:${user.id}`, result.token);
        return result;
    }
    /**
     * 發送手機驗證碼
     * @param captcha 國際區號
     */
    async captcha({ type, phone, area }) {
        var _a;
        // 驗證用戶手機號碼是否變更
        const userId = (_a = this.ctx.user) === null || _a === void 0 ? void 0 : _a.userId;
        const user = await this.baseSysUserEntity.findOne({ id: userId });
        if (type === 'change' && !_.isEmpty(user) && user.phone === phone)
            throw new core_1.CoolCommException('與目前的號碼相同');
        // 驗證手機號碼是否已被使用
        const phoneExist = await this.baseSysUserEntity.findOne({ phone });
        if (type === 'register' && !_.isEmpty(phoneExist))
            throw new core_1.CoolCommException('該手機已被使用');
        // 發送驗證碼
        const areaPhone = `${area}${phone}`;
        const client = require('twilio')(credentials_1.twilio.accountSid, credentials_1.twilio.authToken);
        const result = client.verify.v2
            .services(credentials_1.twilio.verifySid)
            .verifications.create({
            to: areaPhone,
            channel: 'sms',
            locale: 'zh-HK',
        })
            .then(e => {
            console.log(e.sid);
            return true;
        })
            .catch(e => {
            console.log(e);
            throw new core_1.CoolCommException('無法送出驗證信，請聯絡管理員');
        });
        return result;
    }
    /**
     * 檢驗手機驗證碼
     * @param phone 手機號
     * @param value 驗證碼
     */
    async captchaCheck(areaPhone, smsCode) {
        const client = require('twilio')(credentials_1.twilio.accountSid, credentials_1.twilio.authToken);
        try {
            const valid = await client.verify.v2
                .services(credentials_1.twilio.verifySid)
                .verificationChecks.create({ to: areaPhone, code: smsCode })
                .then(verification_check => {
                return verification_check.valid;
            })
                .catch(() => false);
            return valid;
        }
        catch (e) {
            console.error(e);
            throw new core_1.CoolCommException('驗證碼不正確，請重新發送');
        }
    }
    /**
     * 生成token
     * @param user 用戶對象
     * @param roleIds 角色集合
     * @param expire 過期
     * @param isRefresh 是否是刷新
     */
    async generateToken(user, roleIds, expire, isRefresh) {
        await this.cacheManager.set(`user:passwordVersion:${user.id}`, user.passwordV);
        const tokenInfo = {
            isRefresh: false,
            roleIds,
            username: user.username,
            userId: user.id,
            passwordVersion: user.passwordV,
        };
        if (isRefresh) {
            tokenInfo.isRefresh = true;
        }
        return jwt.sign(tokenInfo, this.coolConfig.jwt.secret, {
            expiresIn: expire,
        });
    }
    /**
     * 刷新token
     * @param token
     */
    async refreshToken({ refreshToken: token }) {
        try {
            const decoded = jwt.verify(token, this.coolConfig.jwt.secret);
            if (decoded && decoded['isRefresh']) {
                delete decoded['exp'];
                delete decoded['iat'];
                const { expire, refreshExpire } = this.coolConfig.jwt.token;
                decoded['isRefresh'] = false;
                const result = {
                    expire,
                    token: jwt.sign(decoded, this.coolConfig.jwt.secret, {
                        expiresIn: expire,
                    }),
                    refreshExpire,
                    refreshToken: '',
                };
                decoded['isRefresh'] = true;
                result.refreshToken = jwt.sign(decoded, this.coolConfig.jwt.secret, {
                    expiresIn: refreshExpire,
                });
                await this.cacheManager.set(`user:passwordVersion:${decoded['userId']}`, decoded['passwordVersion']);
                return result;
            }
        }
        catch (err) {
            this.ctx.status = 401;
            this.ctx.body = {
                code: core_1.RESCODE.COMMFAIL,
                message: '自動登出，請重新登入',
            };
            return;
        }
    }
};
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseAppAuthService.prototype, "jwtConfig", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseAppAuthService.prototype, "cacheManager", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseAppAuthService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(role_1.BaseSysRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseAppAuthService.prototype, "baseSysRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_role_1.BaseSysUserRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseAppAuthService.prototype, "baseSysUserRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(department_1.BaseSysDepartmentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseAppAuthService.prototype, "baseSysDepartmentEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_2.BaseSysUserService)
], BaseAppAuthService.prototype, "baseSysUserService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_3.BaseApiUserService)
], BaseAppAuthService.prototype, "baseApiUserService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", role_2.BaseSysRoleService)
], BaseAppAuthService.prototype, "baseSysRoleService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", perms_1.BaseSysPermsService)
], BaseAppAuthService.prototype, "baseSysPermsService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", menu_1.BaseSysMenuService)
], BaseAppAuthService.prototype, "baseSysMenuService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", department_2.BaseSysDepartmentService)
], BaseAppAuthService.prototype, "baseSysDepartmentService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseAppAuthService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseAppAuthService.prototype, "coolConfig", void 0);
BaseAppAuthService = __decorate([
    (0, decorator_1.Provide)()
], BaseAppAuthService);
exports.BaseAppAuthService = BaseAppAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL2FwcC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUsyQjtBQUMzQiwyQ0FBK0M7QUFDL0MsbURBQThEO0FBRTlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFFckMsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFFM0IsNERBQXNFO0FBQ3RFLGdEQUEwRDtBQUMxRCxnREFBMEQ7QUFDMUQsMERBQW1FO0FBQ25FLGtEQUE2RDtBQUM3RCxzQ0FBaUQ7QUFDakQsd0NBQW1EO0FBQ25ELHNDQUFpRDtBQUNqRCxzQ0FBaUQ7QUFFakQsZ0VBQXdEO0FBQ3hELGlDQUE0QztBQUU1Qzs7R0FFRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0JBQVc7SUEyQ2pEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSztRQUNmLGFBQWE7UUFDYixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ2hELEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUNILE9BQU87UUFDUCxJQUFJLElBQUksRUFBRTtZQUNSLFlBQVk7WUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixNQUFNLElBQUksNEJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFF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