"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpInfoController = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const click_1 = require("../../entity/click");
const click_2 = require("../../service/app/click");
/**
 * 描述
 */
let IpInfoController = class IpInfoController extends core_1.BaseController {
};
IpInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        prefix: '/app/external-link',
        api: ['add'],
        entity: click_1.LinkClickEntity,
        service: click_2.LinkClickService,
    })
], IpInfoController);
exports.IpInfoController = IpInfoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2V4dGVybmFsLWxpbmsvY29udHJvbGxlci9hcHAvY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNENBQW1FO0FBQ25FLG1EQUE4QztBQUM5Qyw4Q0FBcUQ7QUFDckQsbURBQTJEO0FBRTNEOztHQUVHO0FBUUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxxQkFBYztDQUVuRCxDQUFBO0FBRlksZ0JBQWdCO0lBUDVCLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ1osTUFBTSxFQUFFLHVCQUFlO1FBQ3ZCLE9BQU8sRUFBRSx3QkFBZ0I7S0FDMUIsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiJ9