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
exports.BaseSysConfService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const conf_1 = require("../../entity/sys/conf");
/**
 * 系统配置
 */
let BaseSysConfService = class BaseSysConfService extends core_1.BaseService {
    /**
     * 获得配置参数值
     * @param key
     */
    async getValue(key) {
        const conf = await this.baseSysConfEntity.findOne({ cKey: key });
        if (conf) {
            return conf.cValue;
        }
    }
    /**
     * 更新配置参数
     * @param cKey
     * @param cValue
     */
    async updateVaule(cKey, cValue) {
        await this.baseSysConfEntity
            .createQueryBuilder()
            .update()
            .where({ cKey })
            .set({ cKey, cValue })
            .execute();
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(conf_1.BaseSysConfEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysConfService.prototype, "baseSysConfEntity", void 0);
BaseSysConfService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysConfService);
exports.BaseSysConfService = BaseSysConfService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9zZXJ2aWNlL3N5cy9jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyw0Q0FBZ0Q7QUFDaEQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnREFBMEQ7QUFFMUQ7O0dBRUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFXO0lBSWpEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRztRQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUM1QixNQUFNLElBQUksQ0FBQyxpQkFBaUI7YUFDekIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDZixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDckIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQTFCQztJQURDLElBQUEsdUJBQWlCLEVBQUMsd0JBQWlCLENBQUM7OEJBQ2xCLG9CQUFVOzZEQUFvQjtBQUZ0QyxrQkFBa0I7SUFEOUIsSUFBQSxtQkFBTyxHQUFFO0dBQ0csa0JBQWtCLENBNEI5QjtBQTVCWSxnREFBa0IifQ==