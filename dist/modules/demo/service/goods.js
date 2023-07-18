"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoGoodsService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 缓存
 */
let DemoGoodsService = class DemoGoodsService extends core_1.BaseService {
    async test() {
        console.log('调用');
    }
};
DemoGoodsService = __decorate([
    (0, decorator_1.Provide)()
], DemoGoodsService);
exports.DemoGoodsService = DemoGoodsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2RlbW8vc2VydmljZS9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsNENBQWdEO0FBRWhEOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxrQkFBVztJQUMvQyxLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUFKWSxnQkFBZ0I7SUFENUIsSUFBQSxtQkFBTyxHQUFFO0dBQ0csZ0JBQWdCLENBSTVCO0FBSlksNENBQWdCIn0=