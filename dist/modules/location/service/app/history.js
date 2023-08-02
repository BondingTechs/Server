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
exports.IPHistoryService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const history_1 = require("../../entity/history");
/**
 * 描述
 */
let IPHistoryService = class IPHistoryService extends core_1.BaseService {
};
__decorate([
    (0, orm_1.InjectEntityModel)(history_1.IPHistoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], IPHistoryService.prototype, "ipHistoryEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], IPHistoryService.prototype, "ctx", void 0);
IPHistoryService = __decorate([
    (0, decorator_1.Provide)()
], IPHistoryService);
exports.IPHistoryService = IPHistoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9jYXRpb24vc2VydmljZS9hcHAvaGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBZ0Q7QUFDaEQsbURBQXNEO0FBQ3RELHVDQUFrRDtBQUVsRCxxQ0FBcUM7QUFDckMsa0RBQXVEO0FBRXZEOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxrQkFBVztDQU1oRCxDQUFBO0FBSkM7SUFEQyxJQUFBLHVCQUFpQixFQUFDLHlCQUFlLENBQUM7OEJBQ2xCLG9CQUFVO3lEQUFrQjtBQUc3QztJQURDLElBQUEsa0JBQU0sR0FBRTs7NkNBQ0k7QUFMRixnQkFBZ0I7SUFENUIsSUFBQSxtQkFBTyxHQUFFO0dBQ0csZ0JBQWdCLENBTTVCO0FBTlksNENBQWdCIn0=