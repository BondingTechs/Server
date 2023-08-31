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
exports.BaseApiUserService = void 0;
const core_1 = require("@cool-midway/core");
const cache_1 = require("@midwayjs/cache");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const md5 = require("md5");
const typeorm_1 = require("typeorm");
const department_1 = require("../../entity/sys/department");
const user_1 = require("../../entity/sys/user");
const user_role_1 = require("../../entity/sys/user_role");
const utils_1 = require("../../../../comm/utils");
const credentials_1 = require("../../../../config/credentials");
const user_identity_1 = require("../../../base/entity/sys/user_identity");
const auth_1 = require("./auth");
/**
 * 系統用戶
 */
let BaseApiUserService = class BaseApiUserService extends core_1.BaseService {
    /**
     * 獲得個人信息
     */
    async person() {
        var _a;
        // get 緩存
        const info = await this.baseSysUserEntity.findOne({
            id: (_a = this.ctx.user) === null || _a === void 0 ? void 0 : _a.userId,
        });
        if (_.isEmpty(info))
            throw new core_1.CoolCommException('未找到該用戶，請聯絡管理員');
        [
            'id',
            'password',
            'passwordV',
            'createTime',
            'createBy',
            'updateTime',
            'updateBy',
            'deleteTime',
            'deleteBy',
            'status',
            'socketId',
            'remark',
        ].forEach(e => delete info[e]);
        // const { name: departmentName } = await this.baseSysDepartmentEntity.findOne(
        //   {
        //     id: info?.departmentId,
        //   }
        // );
        // delete info['departmentId'];
        return { ...info };
    }
    /**
     * 修改
     * @param param 數據
     */
    async personUpdate(param) {
        if (_.isEmpty(param))
            throw new core_1.CoolCommException('未輸入資料');
        const userId = this.ctx.user.userId;
        const user = await this.baseSysUserEntity.findOne({ id: userId });
        if (_.isEmpty(user))
            throw new core_1.CoolCommException('用户不存在');
        const { firstName, lastName, intro, birthday, gender } = param;
        await this.baseSysUserEntity.save({
            firstName,
            lastName,
            intro,
            birthday,
            gender,
            id: userId,
        });
    }
    /**
     * 重設密碼
     */
    async resetPassword(reset) {
        const { oldPassword, newPassword, newPasswordConfirm } = reset;
        const userInfo = await this.baseSysUserEntity.findOne({
            id: this.ctx.user.userId,
        });
        const passwordLimit = 8;
        if (newPassword.length < passwordLimit)
            throw new core_1.CoolCommException(`密碼長度最少需${passwordLimit}個字元`);
        if (_.isEmpty(userInfo)) {
            throw new core_1.CoolCommException('用户不存在');
        }
        if (!_.isEqual(md5(oldPassword), userInfo.password)) {
            throw new core_1.CoolCommException('密碼輸入錯誤');
        }
        if (!_.isEqual(newPassword, newPasswordConfirm)) {
            throw new core_1.CoolCommException('兩次密碼輸入不一致');
        }
        if (_.isEqual(md5(newPassword), userInfo.password)) {
            throw new core_1.CoolCommException('與目前的密碼相同');
        }
        await this.baseSysUserEntity.save({
            id: this.ctx.user.userId,
            password: md5(reset.newPassword),
            passwordV: userInfo.passwordV + 1,
        });
    }
    /**
     * 根據ID獲得信息
     * @param id
     */
    async info(id) {
        const info = await this.baseSysUserEntity.findOne({ id });
        if (_.isEmpty(info))
            throw new core_1.CoolCommException('找不到這個人');
        // const userRoles = await this.nativeQuery(
        //   'select a.roleId from base_sys_user_role a where a.userId = ?',
        //   [id]
        // );
        // const department = await this.baseSysDepartmentEntity.findOne({
        //   id: info.departmentId,
        // });
        // if (info) {
        //   delete info.password;
        //   if (userRoles) {
        //     info.roleIdList = userRoles.map(e => {
        //       return parseInt(e.roleId);
        //     });
        //   }
        // }
        // delete info.password;
        // if (department) {
        //   info.departmentName = department.name;
        // }
        return info;
    }
    /**
     * 刪除帳戶
     */
    async delete() {
        const userId = this.ctx.user.userId;
        const user = await this.baseSysUserEntity.findOne({ id: userId });
        if (user) {
            await this.baseSysUserEntity.save({
                id: userId,
                deleteBy: this.ctx.user.userId,
                deleteTime: new Date(),
                status: 1,
            });
            await this.cacheManager.del(`user:department:${userId}`);
            await this.cacheManager.del(`user:perms:${userId}`);
            await this.cacheManager.del(`user:token:${userId}`);
            await this.cacheManager.del(`user:token:refresh:${userId}`);
        }
        else {
            throw new core_1.CoolCommException('用戶不存在');
        }
    }
    /**
     * 綁定Email
     */
    async emailBinding(param) {
        const { email } = param;
        const nodemailer = require('nodemailer');
        const baseUrl = 'http://bondingtechs.com/my/account/email-verify?token=';
        const token = this.utils.randomString(50);
        const confirmUrl = baseUrl + token;
        const emailUser = await this.baseSysUserEntity.findOne({
            email,
        });
        if (!_.isEmpty(emailUser) && emailUser.emailStatus === 20)
            throw new core_1.CoolCommException('該Email已被使用');
        const userInfo = await this.baseSysUserEntity.findOne({
            id: this.ctx.user.userId,
        });
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: credentials_1.googleMail.user,
                pass: credentials_1.googleMail.pass,
            },
        });
        let mailOptions = {
            from: 'zz02846584zz@gmail.com',
            to: email,
            subject: 'Bonding 鍵結科技 - 帳號綁定驗證',
            //純文字
            // text: 'Hello world2', // plaintext body
            //嵌入 html 的內文
            html: `<div class="">
      <div class="aHl"></div>
      <div id=":1pq" tabindex="-1"></div>
      <div
        id=":1v4"
        class="ii gt"
        jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."
      >
        <div id=":1tl" class="a3s aiL">
          <u></u>

          <div
            style="
              font-family: 'Helvetica Neue', Helvetica, 'PingFang TC',
                'Microsoft JhengHei', 'PMingLiU', sans-serif;
              line-height: inherit;
              margin: 0;
              padding: 0;
            "
            bgcolor="#fafafa"
          >
            <table
              style="
                border-collapse: collapse;
                table-layout: fixed;
                border-spacing: 0;
                vertical-align: top;
                min-width: 320px;
                width: 100%;
                line-height: inherit;
                margin: 0 auto;
              "
              cellpadding="0"
              cellspacing="0"
              bgcolor="#fafafa"
            >
              <tbody style="line-height: inherit">
                <tr
                  style="
                    vertical-align: top;
                    border-collapse: collapse;
                    line-height: inherit;
                  "
                >
                  <td
                    style="
                      word-break: break-word;
                      border-collapse: collapse !important;
                      line-height: inherit;
                    "
                    valign="top"
                  >
                    <div
                      style="background-color: transparent; line-height: inherit"
                    >
                      <div
                        style="
                          min-width: 320px;
                          max-width: 540px;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                          line-height: inherit;
                          margin: 0 auto;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            background-color: transparent;
                            line-height: inherit;
                          "
                        >
                          <div
                            style="
                              min-width: 320px;
                              max-width: 540px;
                              display: table-cell;
                              vertical-align: top;
                              line-height: inherit;
                            "
                          >
                            <div
                              style="
                                background-color: transparent;
                                width: 100% !important;
                                line-height: inherit;
                              "
                            >
                              <div
                                style="
                                  line-height: inherit;
                                  padding: 36px 0px 20px;
                                  border: 0px solid transparent;
                                "
                              >
                                <div
                                  align="center"
                                  style="
                                    padding-right: 0px;
                                    padding-left: 0px;
                                    line-height: inherit;
                                  "
                                >

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="background-color: transparent; line-height: inherit"
                    >
                      <div
                        style="
                          min-width: 320px;
                          max-width: 540px;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: #ffffff;
                          border-bottom-width: 2px;
                          border-bottom-color: #efefef;
                          border-bottom-style: solid;
                          line-height: inherit;
                          margin: 0 auto;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            background-color: #ffffff;
                            line-height: inherit;
                          "
                        >
                          <div
                            style="
                              min-width: 320px;
                              max-width: 540px;
                              display: table-cell;
                              vertical-align: top;
                              line-height: inherit;
                            "
                          >
                            <div
                              style="
                                background-color: transparent;
                                width: 100% !important;
                                line-height: inherit;
                              "
                            >
                              <div
                                style="
                                  line-height: inherit;
                                  padding: 5px 0px;
                                  border: 1px solid #efefef;
                                "
                              >
                                <div
                                  style="
                                    color: #333;
                                    line-height: 120%;
                                    padding: 30px;
                                  "
                                >
                                  <div
                                    style="font-size: 14px; line-height: 1.42857143"
                                    align="left"
                                  >
                                    <h1
                                      style="
                                        line-height: 1.1;
                                        font-weight: 500;
                                        font-size: 24px;
                                        margin-top: 0;
                                      "
                                    >
                                      你好 ${userInfo.firstName} ${userInfo.lastName}!
                                    </h1>
                                    <p style="line-height: 1.5">
                                    您可以通過下面的鏈接按鈕 <span class="il">確認</span> 您的帳戶電子郵件。
                                    </p>
                                    <div
                                      style="
                                        line-height: inherit;
                                        margin: 30px auto 14px;
                                      "
                                      align="center"
                                    >
                                      <a
                                        href="${confirmUrl}"
                                        style="
                                          display: inline-block;
                                          color: #fff;
                                          background-color: #13ab67;
                                          border-radius: 3px;
                                          text-align: center;
                                          text-decoration: none;
                                          font-size: 16px;
                                          line-height: inherit;
                                          padding: 14px 30px;
                                        "
                                        target="_blank"
                                        ><span class="il">確認</span> Email</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="background-color: transparent; line-height: inherit"
                    >
                      <div
                        style="
                          min-width: 320px;
                          max-width: 540px;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                          line-height: inherit;
                          margin: 0 auto;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            background-color: transparent;
                            line-height: inherit;
                          "
                        >
                          <div
                            style="
                              min-width: 320px;
                              max-width: 540px;
                              display: table-cell;
                              vertical-align: top;
                              line-height: inherit;
                            "
                          >
                            <div
                              style="
                                background-color: transparent;
                                width: 100% !important;
                                line-height: inherit;
                              "
                            >
                              <div
                                style="
                                  line-height: inherit;
                                  padding: 5px 0px;
                                  border: 0px solid transparent;
                                "
                              >
                                <div
                                  style="
                                    font-size: 12px;
                                    color: #aaa;
                                    line-height: inherit;
                                    padding: 10px;
                                  "
                                  align="center"
                                >
                                  您收到這封電子郵件是因為您已在 鍵結科技 申請綁定Email
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="yj6qo"></div>
          <div class="adL"></div>
        </div>
      </div>
      <div id=":1pu" class="ii gt" style="display: none">
        <div id=":1pv" class="a3s aiL"></div>
      </div>
      <div class="hi"></div>
    </div>`,
        };
        return transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
                if (!_.isEmpty(emailUser)) {
                    await this.baseSysUserEntity.save({
                        id: emailUser.id,
                        emailStatus: 17,
                        email: null,
                    });
                }
                await this.baseSysUserEntity.save({
                    id: this.ctx.user.userId,
                    emailStatus: 18,
                    email: email,
                });
                await this.cacheManager.set(`user:emailToken:${token}`, this.ctx.user.userId);
                return confirmUrl;
            }
        });
    }
    /**
     * 驗證Email
     */
    async emailVerify({ token }) {
        const userId = await this.cacheManager.get(`user:emailToken:${token}`);
        if (!userId)
            throw new core_1.CoolCommException('驗證失敗，請重新填寫Email');
        await this.baseSysUserEntity.save({
            id: userId,
            emailStatus: 20,
        });
    }
    /**
     * 更換手機
     */
    async changePhone({ area, phone, verifyCode }) {
        // 驗證
        const phoneWithArea = area + phone.substring(1);
        await this.baseAppAuthService.captchaCheck(`+${phoneWithArea}`, verifyCode);
        // 更新電話
        const userId = this.ctx.user.userId;
        const result = await this.baseSysUserEntity.save({ id: userId, phone });
        return result;
    }
    /**
     * 登出
     */
    async logout() {
        const user = this.ctx.user;
        if (!user)
            throw new core_1.CoolCommException('用戶未登入');
        const userId = user.userId;
        await this.cacheManager.del(`user:department:${userId}`);
        await this.cacheManager.del(`user:perms:${userId}`);
        await this.cacheManager.del(`user:token:${userId}`);
        await this.cacheManager.del(`user:token:refresh:${userId}`);
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(user_1.BaseSysUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseApiUserService.prototype, "baseSysUserEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_role_1.BaseSysUserRoleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseApiUserService.prototype, "baseSysUserRoleEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(department_1.BaseSysDepartmentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseApiUserService.prototype, "baseSysDepartmentEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(user_identity_1.BaseUserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseApiUserService.prototype, "userIdentityEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", typeorm_1.Repository)
], BaseApiUserService.prototype, "tipAppService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", auth_1.BaseAppAuthService)
], BaseApiUserService.prototype, "baseAppAuthService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseApiUserService.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseApiUserService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", utils_1.Utils)
], BaseApiUserService.prototype, "utils", void 0);
BaseApiUserService = __decorate([
    (0, decorator_1.Provide)()
], BaseApiUserService);
exports.BaseApiUserService = BaseApiUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL2FwcC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSwyQ0FBK0M7QUFDL0MsbURBQXNEO0FBRXRELHVDQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyw0REFBc0U7QUFDdEUsZ0RBQTBEO0FBQzFELDBEQUFtRTtBQUVuRSxrREFBK0M7QUFDL0MsZ0VBQTREO0FBRTVELDBFQUFnRjtBQUNoRixpQ0FBNEM7QUFFNUM7O0dBRUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFXO0lBNEJqRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNOztRQUNWLFNBQVM7UUFDVCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDaEQsRUFBRSxFQUFFLE1BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLElBQUksd0JBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFL0M7WUFDRSxJQUFJO1lBQ0osVUFBVTtZQUNWLFdBQVc7WUFDWCxZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7U0FDVCxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsK0VBQStFO1FBQy9FLE1BQU07UUFDTiw4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