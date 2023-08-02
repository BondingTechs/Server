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
const info_1 = require("../../entity/info");
const info_2 = require("../../service/app/info");
/**
 * 描述
 */
let IpInfoController = class IpInfoController extends core_1.BaseController {
};
IpInfoController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: info_1.IPInfoEntity,
        service: info_2.IPInfoService,
    })
], IpInfoController);
exports.IpInfoController = IpInfoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9jYXRpb24vY29udHJvbGxlci9hcHAvaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUsbURBQThDO0FBQzlDLDRDQUFpRDtBQUNqRCxpREFBdUQ7QUFFdkQ7O0dBRUc7QUFPSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLHFCQUFjO0NBR25ELENBQUE7QUFIWSxnQkFBZ0I7SUFONUIsSUFBQSxtQkFBTyxHQUFFO0lBQ1QsSUFBQSxxQkFBYyxFQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEQsTUFBTSxFQUFFLG1CQUFZO1FBQ3BCLE9BQU8sRUFBRSxvQkFBYTtLQUN2QixDQUFDO0dBQ1csZ0JBQWdCLENBRzVCO0FBSFksNENBQWdCIn0=