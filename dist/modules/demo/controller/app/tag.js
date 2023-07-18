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
exports.DemoAppTagController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
/**
 * 测试给URL打标签
 */
let DemoAppTagController = class DemoAppTagController extends core_1.BaseController {
    /**
     * 获得标签数据， 如可以标记忽略token的url，然后在中间件判断
     * @returns
     */
    async data() {
        return this.ok(this.tag.byKey(core_1.TagTypes.IGNORE_TOKEN));
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", core_1.CoolUrlTagData)
], DemoAppTagController.prototype, "tag", void 0);
__decorate([
    (0, decorator_1.Get)('/data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoAppTagController.prototype, "data", null);
DemoAppTagController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: [],
        entity: '',
        pageQueryOp: () => { },
    }),
    (0, core_1.CoolUrlTag)({
        key: core_1.TagTypes.IGNORE_TOKEN,
        value: ['add'],
    })
], DemoAppTagController);
exports.DemoAppTagController = DemoAppTagController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvYXBwL3RhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBMkQ7QUFDM0QsNENBTTJCO0FBRTNCOztHQUVHO0FBV0gsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxxQkFBYztJQUl0RDs7O09BR0c7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0YsQ0FBQTtBQVZDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNKLHFCQUFjO2lEQUFDO0FBT3BCO0lBREMsSUFBQSxlQUFHLEVBQUMsT0FBTyxDQUFDOzs7O2dEQUdaO0FBWFUsb0JBQW9CO0lBVmhDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxFQUFFO1FBQ1AsTUFBTSxFQUFFLEVBQUU7UUFDVixXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztLQUN0QixDQUFDO0lBQ0QsSUFBQSxpQkFBVSxFQUFDO1FBQ1YsR0FBRyxFQUFFLGVBQVEsQ0FBQyxZQUFZO1FBQzFCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztLQUNmLENBQUM7R0FDVyxvQkFBb0IsQ0FZaEM7QUFaWSxvREFBb0IifQ==