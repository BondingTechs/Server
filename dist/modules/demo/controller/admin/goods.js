"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoolGoodsController = void 0;
const goods_1 = require("../../entity/goods");
const core_1 = require("@cool-midway/core");
/**
 * 测试
 */
let CoolGoodsController = class CoolGoodsController extends core_1.BaseController {
};
CoolGoodsController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'page', 'list'],
        entity: goods_1.DemoGoodsEntity,
    })
], CoolGoodsController);
exports.CoolGoodsController = CoolGoodsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hZG1pbi9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4Q0FBcUQ7QUFDckQsNENBQW1FO0FBRW5FOztHQUVHO0FBS0gsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxxQkFBYztDQUFHLENBQUE7QUFBN0MsbUJBQW1CO0lBSi9CLElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSx1QkFBZTtLQUN4QixDQUFDO0dBQ1csbUJBQW1CLENBQTBCO0FBQTdDLGtEQUFtQiJ9