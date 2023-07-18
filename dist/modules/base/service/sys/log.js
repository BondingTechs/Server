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
exports.BaseSysLogService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const _ = require("lodash");
const log_1 = require("../../entity/sys/log");
const moment = require("moment");
const utils_1 = require("../../../../comm/utils");
const conf_1 = require("./conf");
/**
 * 描述
 */
let BaseSysLogService = class BaseSysLogService extends core_1.BaseService {
    /**
     * 记录
     * @param url URL地址
     * @param params 参数
     * @param userId 用户ID
     */
    async record(context, url, params, userId) {
        const ip = await this.utils.getReqIP(context);
        const sysLog = new log_1.BaseSysLogEntity();
        sysLog.userId = userId;
        sysLog.ip = typeof ip === 'string' ? ip : ip.join(',');
        const ipAddrArr = [];
        for (const e of sysLog.ip.split(','))
            ipAddrArr.push(await await this.utils.getIpAddr(context, e));
        sysLog.ipAddr = ipAddrArr.join(',');
        sysLog.action = url;
        if (!_.isEmpty(params)) {
            sysLog.params = JSON.stringify(params);
        }
        await this.baseSysLogEntity.insert(sysLog);
    }
    /**
     * 日志
     * @param isAll 是否清除全部
     */
    async clear(isAll) {
        if (isAll) {
            await this.baseSysLogEntity.clear();
            return;
        }
        const keepDay = await this.baseSysConfService.getValue('logKeep');
        if (keepDay) {
            const beforeDate = `${moment()
                .add(-keepDay, 'days')
                .format('YYYY-MM-DD')} 00:00:00`;
            await this.baseSysLogEntity
                .createQueryBuilder()
                .delete()
                .where('createTime < :createTime', { createTime: beforeDate })
                .execute();
        }
        else {
            await this.baseSysLogEntity.clear();
        }
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], BaseSysLogService.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", utils_1.Utils)
], BaseSysLogService.prototype, "utils", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(log_1.BaseSysLogEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysLogService.prototype, "baseSysLogEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", conf_1.BaseSysConfService)
], BaseSysLogService.prototype, "baseSysConfService", void 0);
BaseSysLogService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysLogService);
exports.BaseSysLogService = BaseSysLogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9iYXNlL3NlcnZpY2Uvc3lzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsNENBQWdEO0FBQ2hELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLDhDQUF3RDtBQUN4RCxpQ0FBaUM7QUFDakMsa0RBQStDO0FBQy9DLGlDQUE0QztBQUc1Qzs7R0FFRztBQUVILElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFhaEQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNO1FBQ2hELE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxzQkFBZ0IsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFDRCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBTTtRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLE9BQU87U0FDUjtRQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sVUFBVSxHQUFHLEdBQUcsTUFBTSxFQUFFO2lCQUMzQixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUNuQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7aUJBQ3hCLGtCQUFrQixFQUFFO2lCQUNwQixNQUFNLEVBQUU7aUJBQ1IsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO2lCQUM3RCxPQUFPLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FDRixDQUFBO0FBeERDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzs4Q0FDTDtBQUdKO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNGLGFBQUs7Z0RBQUM7QUFHYjtJQURDLElBQUEsdUJBQWlCLEVBQUMsc0JBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOzJEQUFtQjtBQUcvQztJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDVyx5QkFBa0I7NkRBQUM7QUFYNUIsaUJBQWlCO0lBRDdCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGlCQUFpQixDQTBEN0I7QUExRFksOENBQWlCIn0=