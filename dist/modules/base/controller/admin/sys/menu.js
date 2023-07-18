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
exports.BaseSysMenuController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const menu_1 = require("../../../entity/sys/menu");
const menu_2 = require("../../../service/sys/menu");
/**
 * 菜单
 */
let BaseSysMenuController = class BaseSysMenuController extends core_1.BaseController {
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", menu_2.BaseSysMenuService)
], BaseSysMenuController.prototype, "baseSysMenuService", void 0);
BaseSysMenuController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: menu_1.BaseSysMenuEntity,
        service: menu_2.BaseSysMenuService,
    })
], BaseSysMenuController);
exports.BaseSysMenuController = BaseSysMenuController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9jb250cm9sbGVyL2FkbWluL3N5cy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw0Q0FBbUU7QUFDbkUsbURBQTZEO0FBQzdELG9EQUErRDtBQUUvRDs7R0FFRztBQU9ILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEscUJBQWM7Q0FHeEQsQ0FBQTtBQURDO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNXLHlCQUFrQjtpRUFBQztBQUY1QixxQkFBcUI7SUFOakMsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLHdCQUFpQjtRQUN6QixPQUFPLEVBQUUseUJBQWtCO0tBQzVCLENBQUM7R0FDVyxxQkFBcUIsQ0FHakM7QUFIWSxzREFBcUIifQ==