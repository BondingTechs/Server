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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL2FwcC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSwyQ0FBK0M7QUFDL0MsbURBQXNEO0FBRXRELHVDQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyw0REFBc0U7QUFDdEUsZ0RBQTBEO0FBQzFELDBEQUFtRTtBQUVuRSxrREFBK0M7QUFDL0MsZ0VBQTREO0FBRTVELDBFQUFnRjtBQUNoRixpQ0FBNEM7QUFFNUM7O0dBRUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFXO0lBNEJqRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNOztRQUNWLFNBQVM7UUFDVCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDaEQsRUFBRSxFQUFFLE1BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLElBQUksd0JBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFL0M7WUFDRSxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixVQUFVO1lBQ1YsUUFBUTtTQUNULENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQiwrRUFBK0U7UUFDL0UsTUFBTTtRQUNOLDhCQUE4QjtRQUM5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