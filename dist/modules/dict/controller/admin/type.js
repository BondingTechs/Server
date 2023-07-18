"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDictTypeController = void 0;
const type_1 = require("./../../entity/type");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const type_2 = require("../../service/type");
/**
 * 字典类型
 */
let AdminDictTypeController = class AdminDictTypeController extends core_1.BaseController {
};
AdminDictTypeController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: type_1.DictTypeEntity,
        service: type_2.DictTypeService,
        listQueryOp: {
            keyWordLikeFields: ['name'],
        },
    })
], AdminDictTypeController);
exports.AdminDictTypeController = AdminDictTypeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGljdC9jb250cm9sbGVyL2FkbWluL3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsOENBQXFEO0FBQ3JELG1EQUE4QztBQUM5Qyw0Q0FBbUU7QUFDbkUsNkNBQXFEO0FBRXJEOztHQUVHO0FBVUgsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxxQkFBYztDQUFHLENBQUE7QUFBakQsdUJBQXVCO0lBVG5DLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsRUFBQztRQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxxQkFBYztRQUN0QixPQUFPLEVBQUUsc0JBQWU7UUFDeEIsV0FBVyxFQUFFO1lBQ1gsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDNUI7S0FDRixDQUFDO0dBQ1csdUJBQXVCLENBQTBCO0FBQWpELDBEQUF1QiJ9