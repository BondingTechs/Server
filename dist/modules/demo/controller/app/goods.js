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
const goods_2 = require("../../service/goods");
/**
 * 测试
 */
let CoolGoodsController = class CoolGoodsController extends core_1.BaseController {
};
CoolGoodsController = __decorate([
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'page', 'list'],
        entity: goods_1.DemoGoodsEntity,
        service: goods_2.DemoGoodsService,
    })
], CoolGoodsController);
exports.CoolGoodsController = CoolGoodsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vY29udHJvbGxlci9hcHAvZ29vZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsOENBQXFEO0FBQ3JELDRDQUFtRTtBQUNuRSwrQ0FBdUQ7QUFFdkQ7O0dBRUc7QUFNSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLHFCQUFjO0NBQUcsQ0FBQTtBQUE3QyxtQkFBbUI7SUFML0IsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHVCQUFlO1FBQ3ZCLE9BQU8sRUFBRSx3QkFBZ0I7S0FDMUIsQ0FBQztHQUNXLG1CQUFtQixDQUEwQjtBQUE3QyxrREFBbUIifQ==