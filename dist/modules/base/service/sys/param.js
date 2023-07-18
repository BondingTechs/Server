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
exports.BaseSysParamService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const param_1 = require("../../entity/sys/param");
const cache_1 = require("@midwayjs/cache");
/**
 * 参数配置
 */
let BaseSysParamService = class BaseSysParamService extends core_1.BaseService {
    /**
     * 根据key获得对应的参数
     * @param key
     */
    async dataByKey(key) {
        let result = await this.cacheManager.get(`param:${key}`);
        if (!result) {
            result = await this.baseSysParamEntity.findOne({ keyName: key });
        }
        if (result) {
            if (typeof result == 'string') {
                result = JSON.parse(result);
            }
            if (result.dataType !== 0) {
                return JSON.parse(result.data);
            }
            else {
                return result.data;
            }
        }
        return;
    }
    /**
     * 根据key获得对应的网页数据
     * @param key
     */
    async htmlByKey(key) {
        let html = '<html><body>@content</body></html>';
        let result = await this.cacheManager.get(`param:${key}`);
        if (result) {
            result = JSON.parse(result);
            html = html.replace('@content', result.data);
        }
        else {
            html = html.replace('@content', 'key notfound');
        }
        return html;
    }
    /**
     * 重新初始化缓存
     */
    async modifyAfter() {
        const params = await this.baseSysParamEntity.find();
        for (const param of params) {
            await this.cacheManager.set(`param:${param.keyName}`, JSON.stringify(param));
        }
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(param_1.BaseSysParamEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSysParamService.prototype, "baseSysParamEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.CacheManager)
], BaseSysParamService.prototype, "cacheManager", void 0);
BaseSysParamService = __decorate([
    (0, decorator_1.Provide)()
], BaseSysParamService);
exports.BaseSysParamService = BaseSysParamService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2Jhc2Uvc2VydmljZS9zeXMvcGFyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDRDQUFnRDtBQUNoRCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGtEQUE0RDtBQUM1RCwyQ0FBK0M7QUFFL0M7O0dBRUc7QUFFSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGtCQUFXO0lBT2xEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztRQUNqQixJQUFJLE1BQU0sR0FBUSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQzthQUNwQjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUc7UUFDakIsSUFBSSxJQUFJLEdBQUcsb0NBQW9DLENBQUM7UUFDaEQsSUFBSSxNQUFNLEdBQVEsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDekIsU0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQ3RCLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFBO0FBdkRDO0lBREMsSUFBQSx1QkFBaUIsRUFBQywwQkFBa0IsQ0FBQzs4QkFDbEIsb0JBQVU7K0RBQXFCO0FBR25EO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNLLG9CQUFZO3lEQUFDO0FBTGhCLG1CQUFtQjtJQUQvQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxtQkFBbUIsQ0F5RC9CO0FBekRZLGtEQUFtQiJ9