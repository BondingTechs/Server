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
exports.DemoCacheService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 缓存
 */
let DemoCacheService = class DemoCacheService {
    // 数据缓存5秒
    async get() {
        console.log('执行方法');
        return {
            a: 1,
            b: 2,
        };
    }
};
__decorate([
    (0, core_1.CoolCache)(5),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoCacheService.prototype, "get", null);
DemoCacheService = __decorate([
    (0, decorator_1.Provide)()
], DemoCacheService);
exports.DemoCacheService = DemoCacheService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vc2VydmljZS9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsNENBQThDO0FBRTlDOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsU0FBUztJQUVULEtBQUssQ0FBQyxHQUFHO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPO1lBQ0wsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBDO0lBREMsSUFBQSxnQkFBUyxFQUFDLENBQUMsQ0FBQzs7OzsyQ0FPWjtBQVRVLGdCQUFnQjtJQUQ1QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxnQkFBZ0IsQ0FVNUI7QUFWWSw0Q0FBZ0IifQ==