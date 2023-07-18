"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAppSpaceTypeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const type_1 = require("../../entity/type");
/**
 * 空间分类
 */
let BaseAppSpaceTypeController = class BaseAppSpaceTypeController extends core_1.BaseController {
};
BaseAppSpaceTypeController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: type_1.SpaceTypeEntity,
    })
], BaseAppSpaceTypeController);
exports.BaseAppSpaceTypeController = BaseAppSpaceTypeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3BhY2UvY29udHJvbGxlci9hZG1pbi90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyw0Q0FBbUU7QUFDbkUsNENBQW9EO0FBRXBEOztHQUVHO0FBTUgsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMkIsU0FBUSxxQkFBYztDQUFHLENBQUE7QUFBcEQsMEJBQTBCO0lBTHRDLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxzQkFBZTtLQUN4QixDQUFDO0dBQ1csMEJBQTBCLENBQTBCO0FBQXBELGdFQUEwQiJ9