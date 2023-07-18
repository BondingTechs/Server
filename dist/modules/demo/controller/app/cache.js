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
exports.AppDemoCacheController = void 0;
const cache_1 = require("./../../service/cache");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const cache_2 = require("@midwayjs/cache");
/**
 * 缓存
 */
let AppDemoCacheController = class AppDemoCacheController extends core_1.BaseController {
    /**
     * 设置缓存
     * @returns
     */
    async set() {
        await this.cacheManager.set('a', 1);
        // 缓存10秒
        await this.cacheManager.set('a', 1, {
            ttl: 10,
        });
        return this.ok(await this.cacheManager.get('a'));
    }
    /**
     * 获得缓存
     * @returns
     */
    async get() {
        return this.ok(await this.demoCacheService.get());
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_2.CacheManager)
], AppDemoCacheController.prototype, "cacheManager", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", cache_1.DemoCacheService)
], AppDemoCacheController.prototype, "demoCacheService", void 0);
__decorate([
    (0, decorator_1.Post)('/set'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoCacheController.prototype, "set", null);
__decorate([
    (0, decorator_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppDemoCacheController.prototype, "get", null);
AppDemoCacheController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], AppDemoCacheController);
exports.AppDemoCacheController = AppDemoCacheController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hcHAvY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXlEO0FBQ3pELG1EQUFpRTtBQUNqRSw0Q0FBbUU7QUFDbkUsMkNBQStDO0FBRS9DOztHQUVHO0FBR0gsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxxQkFBYztJQU94RDs7O09BR0c7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFFBQVE7UUFDUixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbEMsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBM0JDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNLLG9CQUFZOzREQUFDO0FBRzNCO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNTLHdCQUFnQjtnRUFBQztBQU9uQztJQURDLElBQUEsZ0JBQUksRUFBQyxNQUFNLENBQUM7Ozs7aURBUVo7QUFPRDtJQURDLElBQUEsZUFBRyxFQUFDLE1BQU0sQ0FBQzs7OztpREFHWDtBQTVCVSxzQkFBc0I7SUFGbEMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxHQUFFO0dBQ0osc0JBQXNCLENBNkJsQztBQTdCWSx3REFBc0IifQ==