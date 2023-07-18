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
exports.DictTypeService = void 0;
const info_1 = require("./../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
/**
 * 描述
 */
let DictTypeService = class DictTypeService extends core_1.BaseService {
    /**
     * 删除
     * @param ids
     */
    async delete(ids) {
        super.delete(ids);
        await this.dictInfoEntity.delete({
            typeId: (0, typeorm_1.In)(ids),
        });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(info_1.DictInfoEntity),
    __metadata("design:type", typeorm_1.Repository)
], DictTypeService.prototype, "dictInfoEntity", void 0);
DictTypeService = __decorate([
    (0, decorator_1.Provide)()
], DictTypeService);
exports.DictTypeService = DictTypeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGljdC9zZXJ2aWNlL3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELG1EQUE4QztBQUM5Qyw0Q0FBZ0Q7QUFDaEQsdUNBQWtEO0FBQ2xELHFDQUF5QztBQUV6Qzs7R0FFRztBQUVILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWdCLFNBQVEsa0JBQVc7SUFJOUM7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO1FBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFBLFlBQUUsRUFBQyxHQUFHLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFaQztJQURDLElBQUEsdUJBQWlCLEVBQUMscUJBQWMsQ0FBQzs4QkFDbEIsb0JBQVU7dURBQWlCO0FBRmhDLGVBQWU7SUFEM0IsSUFBQSxtQkFBTyxHQUFFO0dBQ0csZUFBZSxDQWMzQjtBQWRZLDBDQUFlIn0=