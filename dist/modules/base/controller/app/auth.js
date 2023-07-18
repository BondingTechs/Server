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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAuthController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const validate_1 = require("@midwayjs/validate");
const auth_1 = require("../../service/app/auth");
const user_1 = require("../../service/app/user");
/**
 * 商品
 */
let AppAuthController = class AppAuthController extends core_1.BaseController {
    /**
     * 登錄
     * @param login
     */
    async login(login) {
        return this.ok(await this.baseAppAuthService.login(login));
    }
    /**
     * 註冊
     * @param register
     */
    async register(register) {
        return this.ok(await this.baseAppAuthService.register(register));
    }
    /**
     * 註冊
     * @param forgot
     */
    async forgot(forgot) {
        return this.ok(await this.baseAppAuthService.forgot(forgot));
    }
    /**
     * 獲得驗證碼
     * @param captcha
     */
    async captcha(params) {
        return this.ok(await this.baseAppAuthService.captcha(params));
    }
    /**
     * 刷新token
     */
    async refreshToken(params) {
        return this.ok(await this.baseAppAuthService.refreshToken(params));
    }
    /**
     * 驗證Email
     */
    async emailVerify(params) {
        return this.ok(await this.baseApiUserService.emailVerify(params));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", auth_1.BaseAppAuthService)
], AppAuthController.prototype, "baseAppAuthService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_1.BaseApiUserService)
], AppAuthController.prototype, "baseApiUserService", void 0);
__decorate([
    (0, decorator_1.Post)('/login', { summary: '登錄' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "login", null);
__decorate([
    (0, decorator_1.Post)('/register', { summary: '註冊' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "register", null);
__decorate([
    (0, decorator_1.Post)('/forgot', { summary: '忘記密碼' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "forgot", null);
__decorate([
    (0, decorator_1.Post)('/captcha', { summary: '獲取驗證碼' }),
    (0, validate_1.Validate)(),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "captcha", null);
__decorate([
    (0, decorator_1.Post)('/refreshToken', { summary: '刷新token' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "refreshToken", null);
__decorate([
    (0, decorator_1.Post)('/email-verify', { summary: '驗證Email' }),
    __param(0, (0, decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppAuthController.prototype, "emailVerify", null);
AppAuthController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)('/app/auth')
], AppAuthController);
exports.AppAuthController = AppAuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9jb250cm9sbGVyL2FwcC9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRTtBQUNsRSw0Q0FBbUU7QUFDbkUsaURBQThDO0FBQzlDLGlEQUE0RDtBQUM1RCxpREFBNEQ7QUFFNUQ7O0dBRUc7QUFHSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLHFCQUFjO0lBT25EOzs7T0FHRztJQUdILEtBQUssQ0FBQyxLQUFLLENBQVMsS0FBSztRQUN2QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7T0FHRztJQUdILEtBQUssQ0FBQyxRQUFRLENBQVMsUUFBUTtRQUM3QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUdILEtBQUssQ0FBQyxNQUFNLENBQVMsTUFBTTtRQUN6QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7T0FHRztJQUdILEtBQUssQ0FBQyxPQUFPLENBQVMsTUFBTTtRQUMxQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLFlBQVksQ0FBUyxNQUFNO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7O09BRUc7SUFFSCxLQUFLLENBQUMsV0FBVyxDQUFTLE1BQU07UUFDOUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRixDQUFBO0FBNURDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNXLHlCQUFrQjs2REFBQztBQUd2QztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7NkRBQUM7QUFRdkM7SUFGQyxJQUFBLGdCQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2pDLElBQUEsbUJBQVEsR0FBRTtJQUNFLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7OENBRWxCO0FBUUQ7SUFGQyxJQUFBLGdCQUFJLEVBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BDLElBQUEsbUJBQVEsR0FBRTtJQUNLLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7aURBRXJCO0FBUUQ7SUFGQyxJQUFBLGdCQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLElBQUEsbUJBQVEsR0FBRTtJQUNHLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7K0NBRW5CO0FBUUQ7SUFGQyxJQUFBLGdCQUFJLEVBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLElBQUEsbUJBQVEsR0FBRTtJQUNJLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7Z0RBRXBCO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzFCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7cURBRXpCO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzNCLFdBQUEsSUFBQSxnQkFBSSxHQUFFLENBQUE7Ozs7b0RBRXhCO0FBN0RVLGlCQUFpQjtJQUY3QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUMsV0FBVyxDQUFDO0dBQ2YsaUJBQWlCLENBOEQ3QjtBQTlEWSw4Q0FBaUIifQ==