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
exports.LoginDTO = void 0;
const validate_1 = require("@midwayjs/validate");
/**
 * 登录参数校验
 */
class LoginDTO {
}
__decorate([
    (0, validate_1.Rule)(validate_1.RuleType.string().required()),
    __metadata("design:type", String)
], LoginDTO.prototype, "username", void 0);
__decorate([
    (0, validate_1.Rule)(validate_1.RuleType.string().required()),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
__decorate([
    (0, validate_1.Rule)(validate_1.RuleType.string().required()),
    __metadata("design:type", String)
], LoginDTO.prototype, "captchaId", void 0);
__decorate([
    (0, validate_1.Rule)(validate_1.RuleType.required()),
    __metadata("design:type", Number)
], LoginDTO.prototype, "verifyCode", void 0);
exports.LoginDTO = LoginDTO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2UvZHRvL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFvRDtBQUNwRDs7R0FFRztBQUNILE1BQWEsUUFBUTtDQWdCcEI7QUFiQztJQURDLElBQUEsZUFBSSxFQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7OzBDQUNsQjtBQUlqQjtJQURDLElBQUEsZUFBSSxFQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7OzBDQUNsQjtBQUlqQjtJQURDLElBQUEsZUFBSSxFQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7OzJDQUNqQjtBQUlsQjtJQURDLElBQUEsZUFBSSxFQUFDLG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7OzRDQUNQO0FBZnJCLDRCQWdCQyJ9