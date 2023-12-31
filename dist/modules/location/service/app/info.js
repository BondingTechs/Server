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
exports.IPInfoService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
const info_1 = require("../../entity/info");
/**
 * 描述
 */
let IPInfoService = class IPInfoService extends core_1.BaseService {
    async add(param) {
        let userId = null;
        if (this.ctx.user) {
            userId = this.ctx.user.userId;
        }
        const info = await this.ipInfoEntity.findOne({ ip: param.ip });
        if (_.isEmpty(info)) {
            return await this.ipInfoEntity.save({
                ...param,
            });
        }
        if (!userId)
            return info;
        const userIpInfo = await this.ipInfoEntity.findOne({
            ip: param.ip,
            userId,
        });
        if (!_.isEmpty(userIpInfo))
            return userIpInfo;
        return await this.ipInfoEntity.save({
            id: info.id,
            ...param,
            userId,
        });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(info_1.IPInfoEntity),
    __metadata("design:type", typeorm_1.Repository)
], IPInfoService.prototype, "ipInfoEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], IPInfoService.prototype, "ctx", void 0);
IPInfoService = __decorate([
    (0, decorator_1.Provide)()
], IPInfoService);
exports.IPInfoService = IPInfoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9jYXRpb24vc2VydmljZS9hcHAvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBZ0Q7QUFDaEQsbURBQXNEO0FBQ3RELHVDQUFrRDtBQUVsRCw0QkFBNEI7QUFDNUIscUNBQXFDO0FBQ3JDLDRDQUFpRDtBQUVqRDs7R0FFRztBQUVILElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxrQkFBVztJQU81QyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7UUFDYixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxHQUFHLEtBQUs7YUFDVCxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFekIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQUUsT0FBTyxVQUFVLENBQUM7UUFFOUMsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEdBQUcsS0FBSztZQUNSLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWpDQztJQURDLElBQUEsdUJBQWlCLEVBQUMsbUJBQVksQ0FBQzs4QkFDbEIsb0JBQVU7bURBQWU7QUFHdkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OzBDQUNJO0FBTEYsYUFBYTtJQUR6QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxhQUFhLENBbUN6QjtBQW5DWSxzQ0FBYSJ9