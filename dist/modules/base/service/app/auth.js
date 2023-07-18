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
        const { phone, password } = login;
        const user = await this.baseSysUserEntity.findOne({
            where: [{ phone }],
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
        const { phone, verifyCode, password, passwordConfirm } = register;
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
        await this.captchaCheck(`+886${register.phone}`, verifyCode);
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
        const { phone, verifyCode, password, passwordConfirm } = forgot;
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
        const areaPhone = '886' + forgot.phone.substring(1);
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
        console.log(phone, area);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL2FwcC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUsyQjtBQUMzQiwyQ0FBK0M7QUFDL0MsbURBQThEO0FBRTlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFFckMsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFFM0IsNERBQXNFO0FBQ3RFLGdEQUEwRDtBQUMxRCxnREFBMEQ7QUFDMUQsMERBQW1FO0FBQ25FLGtEQUE2RDtBQUM3RCxzQ0FBaUQ7QUFDakQsd0NBQW1EO0FBQ25ELHNDQUFpRDtBQUNqRCxzQ0FBaUQ7QUFFakQsZ0VBQXdEO0FBQ3hELGlDQUE0QztBQUU1Qzs7R0FFRztBQUVILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0JBQVc7SUEyQ2pEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSztRQUNmLGFBQWE7UUFDYixNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDaEQsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFDSCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEVBQUU7WUFDUixZQUFZO1lBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLDRCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLDRC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