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
exports.DictInfoService = void 0;
const type_1 = require("./../entity/type");
const info_1 = require("./../entity/info");
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const _ = require("lodash");
/**
 * 字典信息
 */
let DictInfoService = class DictInfoService extends core_1.BaseService {
    /**
     * 獲得字典數據
     * @param types
     */
    async data(types) {
        const result = {};
        const find = await this.dictTypeEntity.createQueryBuilder();
        if (!_.isEmpty(types)) {
            find.where('`key` in(:key)', { key: types });
        }
        const typeData = await find.getMany();
        if (_.isEmpty(typeData)) {
            return {};
        }
        const data = await this.dictInfoEntity
            .createQueryBuilder('a')
            .select(['a.id', 'a.name', 'a.typeId', 'a.parentId', 'a.type'])
            .where('typeId in(:typeIds)', {
            typeIds: typeData.map(e => {
                return e.id;
            }),
        })
            .orderBy('orderNum', 'ASC')
            .addOrderBy('a.createTime', 'ASC')
            .getMany();
        for (const item of typeData) {
            result[item.key] = _.filter(data, { typeId: item.id });
        }
        return result;
    }
    /**
     * 獲得字典值
     * @param infoId
     * @returns
     */
    async value(infoId) {
        const info = await this.dictInfoEntity.findOne({ id: infoId });
        return info === null || info === void 0 ? void 0 : info.name;
    }
    /**
     * 獲得字典值
     * @param infoId
     * @returns
     */
    async values(infoIds) {
        const infos = await this.dictInfoEntity.find({ id: (0, typeorm_1.In)(infoIds) });
        return infos.map(e => {
            return e.name;
        });
    }
    /**
     * 修改之後
     * @param data
     * @param type
     */
    async modifyAfter(data, type) {
        if (type === 'delete') {
            for (const id of data) {
                await this.delChildDict(id);
            }
        }
    }
    /**
     * 刪除子字典
     * @param id
     */
    async delChildDict(id) {
        const delDict = await this.dictInfoEntity.find({ parentId: id });
        if (_.isEmpty(delDict)) {
            return;
        }
        const delDictIds = delDict.map(e => {
            return e.id;
        });
        await this.dictInfoEntity.delete(delDictIds);
        for (const dictId of delDictIds) {
            await this.delChildDict(dictId);
        }
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(info_1.DictInfoEntity),
    __metadata("design:type", typeorm_1.Repository)
], DictInfoService.prototype, "dictInfoEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(type_1.DictTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], DictInfoService.prototype, "dictTypeEntity", void 0);
DictInfoService = __decorate([
    (0, decorator_1.Provide)()
], DictInfoService);
exports.DictInfoService = DictInfoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGljdC9zZXJ2aWNlL2luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDJDQUFrRDtBQUNsRCxtREFBOEM7QUFDOUMsNENBQWdEO0FBQ2hELHVDQUFrRDtBQUNsRCxxQ0FBeUM7QUFDekMsNEJBQTRCO0FBRTVCOztHQUVHO0FBRUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxrQkFBVztJQU85Qzs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWU7UUFDeEIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUNELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYzthQUNuQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7YUFDdkIsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzlELEtBQUssQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QixPQUFPLEVBQUUsUUFBUSxDQUFD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