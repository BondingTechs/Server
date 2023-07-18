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
exports.BaseSysMenuEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const core_1 = require("@cool-midway/core");
const typeorm_1 = require("typeorm");
/**
 * 菜单
 */
let BaseSysMenuEntity = class BaseSysMenuEntity extends core_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ comment: '父菜单ID', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], BaseSysMenuEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '菜单名称' }),
    __metadata("design:type", String)
], BaseSysMenuEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '菜单地址', nullable: true }),
    __metadata("design:type", String)
], BaseSysMenuEntity.prototype, "router", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '权限标识', nullable: true }),
    __metadata("design:type", String)
], BaseSysMenuEntity.prototype, "perms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: '类型 0：目录 1：菜单 2：按钮',
        default: 0,
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], BaseSysMenuEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '图标', nullable: true }),
    __metadata("design:type", String)
], BaseSysMenuEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序', default: 0 }),
    __metadata("design:type", Number)
], BaseSysMenuEntity.prototype, "orderNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '视图地址', nullable: true }),
    __metadata("design:type", String)
], BaseSysMenuEntity.prototype, "viewPath", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '路由缓存', default: true }),
    __metadata("design:type", Boolean)
], BaseSysMenuEntity.prototype, "keepAlive", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '是否显示', default: true }),
    __metadata("design:type", Boolean)
], BaseSysMenuEntity.prototype, "isShow", void 0);
BaseSysMenuEntity = __decorate([
    (0, orm_1.EntityModel)('base_sys_menu')
], BaseSysMenuEntity);
exports.BaseSysMenuEntity = BaseSysMenuEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYmFzZS9lbnRpdHkvc3lzL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxxQ0FBaUM7QUFFakM7O0dBRUc7QUFFSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFVO0NBcUNoRCxDQUFBO0FBbkNDO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQzVDO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOzsrQ0FDZjtBQUdiO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUM3QjtBQUdmO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUM5QjtBQU9kO0lBTEMsSUFBQSxnQkFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixPQUFPLEVBQUUsQ0FBQztRQUNWLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7OytDQUNXO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQzdCO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7bURBQ3JCO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUMzQjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDeEI7QUFNbkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQzNCO0FBcENMLGlCQUFpQjtJQUQ3QixJQUFBLGlCQUFXLEVBQUMsZUFBZSxDQUFDO0dBQ2hCLGlCQUFpQixDQXFDN0I7QUFyQ1ksOENBQWlCIn0=