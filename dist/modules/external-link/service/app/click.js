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
exports.LinkClickService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
const click_1 = require("../../entity/click");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let LinkClickService = class LinkClickService extends core_1.BaseService {
    async add(param) {
        let userId = null;
        if (this.ctx.user) {
            userId = this.ctx.user.userId;
        }
        const info = await this.linkInfoEntity.findOne({ href: param.href });
        if (_.isEmpty(info)) {
            const info = await this.linkInfoEntity.save({ href: param.href });
            return await this.linkClickEntity.save({
                infoId: info.id,
                userId,
            });
        }
        else {
            return await this.linkClickEntity.save({
                infoId: info.id,
                userId,
            });
        }
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(info_1.LinkInfoEntity),
    __metadata("design:type", typeorm_1.Repository)
], LinkClickService.prototype, "linkInfoEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(click_1.LinkClickEntity),
    __metadata("design:type", typeorm_1.Repository)
], LinkClickService.prototype, "linkClickEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], LinkClickService.prototype, "ctx", void 0);
LinkClickService = __decorate([
    (0, decorator_1.Provide)()
], LinkClickService);
exports.LinkClickService = LinkClickService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2V4dGVybmFsLWxpbmsvc2VydmljZS9hcHAvY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBQ2hELG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFFbEQsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyw4Q0FBcUQ7QUFDckQsNENBQW1EO0FBRW5EOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxrQkFBVztJQVUvQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7UUFDYixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDZixNQUFNO2FBQ1AsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztnQkFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNmLE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBO0FBNUJDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxxQkFBYyxDQUFDOzhCQUNsQixvQkFBVTt3REFBaUI7QUFHM0M7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHVCQUFlLENBQUM7OEJBQ2xCLG9CQUFVO3lEQUFrQjtBQUc3QztJQURDLElBQUEsa0JBQU0sR0FBRTs7NkNBQ0k7QUFSRixnQkFBZ0I7SUFENUIsSUFBQSxtQkFBTyxHQUFFO0dBQ0csZ0JBQWdCLENBOEI1QjtBQTlCWSw0Q0FBZ0IifQ==