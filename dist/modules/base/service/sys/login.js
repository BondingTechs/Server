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
exports.BaseSysLoginService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const svgCaptcha = require("svg-captcha");
const uuid_1 = require("uuid");
const user_1 = require("../../entity/sys/user");
const typeorm_1 = require("typeorm");
const orm_1 = require("@midwayjs/orm");
const md5 = require("md5");
const role_1 = require("./role");
const _ = require("lodash");
const menu_1 = require("./menu");
const department_1 = require("./department");
const jwt = require("jsonwebtoken");
const svgToDataURL = require("mini-svg-data-uri");
const cache_1 = require("@midwayjs/cache");
/**
 * 登錄
 */
let BaseSysLoginService = class BaseSysLoginService extends core_1.BaseService {
    /**
     * 登錄
     * @param login
     */
    async login(login) {
        const { username, captchaId, verifyCode, password } = login;
        // 校驗驗證碼
        const checkV = await this.captchaCheck(captchaId, verifyCode);
        if (checkV) {
            const user = await this.baseSysUserEntity.findOne({ username });
            // 校驗用戶
            if (user) {
                // 校驗用戶狀態及密碼
                if (user.status === 0 || user.password !== md5(password)) {
                    throw new core_1.CoolCommException('賬戶或密碼不正確~');
                }
            }
            else {
                throw new core_1.CoolCommException('賬戶或密碼不正確~');
            }
            // 校驗角色
            const roleIds = await this.baseSysRoleService.getByUser(user.id);
            if (_.isEmpty(roleIds)) {
                throw new core_1.CoolCommException('該用戶未設置任何角色，無法登錄~');
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
            const departments = await this.baseSysDepartmentService.getByRoleIds(roleIds, user.username === 'admin');
            await this.cacheManager.set(`admin:department:${user.id}`, departments);
            await this.cacheManager.set(`admin:perms:${user.id}`, perms);
            await this.cacheManager.set(`admin:token:${user.id}`, result.token);
            await this.cacheManager.set(`admin:token:refresh:${user.id}`, result.token);
            return result;
        }
        else {
            throw new core_1.CoolCommException('驗證碼不正確');
        }
    }
    /**
     * 驗證碼
     * @param type 圖片驗證碼類型 svg
     * @param width 寬
     * @param height 高
     */
    async captcha(type, width = 150, height = 50) {
        const svg = svgCaptcha.create({
            ignoreChars: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
            width,
            height,
        });
        const result = {
            captchaId: (0, uuid_1.v1)(),
            data: svg.data.replace(/"/g, "'"),
        };
        // 文字變白
        const rpList = [
            '#111',
            '#222',
            '#333',
            '#444',
            '#555',
            '#666',
            '#777',
            '#888',
            '#999',
        ];
        rpList.forEach(rp => {
            result.data = result.data['replaceAll'](rp, '#fff');
        });
        if (type === 'base64') {
            result.data = svgToDataURL(result.data);
        }
        // 半小時過期
        await this.cacheManager.set(`verify:img:${result.captchaId}`, svg.text.toLowerCase(), { ttl: 1800 });
        return result;
    }
    /**
     * 退出登錄
     */
    async logout() {
        const { userId } = this.ctx.admin;
        await this.cacheManager.del(`admin:department:${userId}`);
        await this.cacheManager.del(`admin:perms:${userId}`);
        await this.cacheManager.del(`admin:token:${userId}`);
        await this.cacheManager.del(`admin:token:refresh:${userId}`);
    }
    /**
     * 檢驗圖片驗證碼
     * @param captchaId 驗證碼ID
     * @param value 驗證碼
     */
    async captchaCheck(captchaId, value) {
        const rv = await this.cacheManager.get(`verify:img:${captchaId}`);
        if (!rv || !value || value.toLowerCase() !== rv) {
            return false;
        }
        else {
            this.cacheManager.del(`verify:img:${captchaId}`);
            return true;
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
        await this.cacheManager.set(`admin:passwordVersion:${user.id}`, user.passwordV);
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
    async refreshToken(token) {
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
                await this.cacheManager.set(`admin:passwordVersion:${decoded['userId']}`, decoded['passwordVersion']);
                await this.cacheManager.set(`admin:token:${decoded['userId']}`, result.token);
                return result;
            }
        }
        catch (err) {
            console.log(err);
            this.ctx.status = 401;
            this.ctx.body = {
                code: core_1.RESCODE.COMMFAIL,
                message: '登錄失效~',
            };
            return;
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseSysLoginService.prototype, "cacheManager", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysLoginService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", role_1.BaseSysRoleService)
], BaseSysLoginService.prototype, "baseSysRoleService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", menu_1.BaseSysMenuService)
], BaseSysLoginService.prototype, "baseSysMenuService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", department_1.BaseSysDepartmentService)
], BaseSysLoginService.prototype, "baseSysDepartmentService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysLoginService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Config)('module.base'),
    __metadata("design:type", Object)
], BaseSysLoginService.prototype, "coolConfig", void 0);
BaseSysLoginService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysLoginService);
exports.BaseSysLoginService = BaseSysLoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELDRDQUE0RTtBQUU1RSwwQ0FBMEM7QUFDMUMsK0JBQWtDO0FBQ2xDLGdEQUEwRDtBQUMxRCxxQ0FBcUM7QUFDckMsdUNBQWtEO0FBQ2xELDJCQUEyQjtBQUMzQixpQ0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLGlDQUE0QztBQUM1Qyw2Q0FBd0Q7QUFDeEQsb0NBQW9DO0FBQ3BDLGtEQUFrRDtBQUVsRCwyQ0FBK0M7QUFFL0M7O0dBRUc7QUFFSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGtCQUFXO0lBc0JsRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWU7UUFDekIsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUM1RCxRQUFRO1FBQ1IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDaEUsT0FBTztZQUNQLElBQUksSUFBSSxFQUFFO2dCQUNSLFlBQVk7Z0JBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDeEQsTUFBTSxJQUFJLHdCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lC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