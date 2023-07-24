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
exports.TipAppService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const tips_1 = require("../../entity/tips");
const tips_user_1 = require("../../entity/tips_user");
const _ = require("lodash");
const tips_collection_1 = require("../../entity/tips_collection");
/**
 * 描述
 */
let TipAppService = class TipAppService extends core_1.BaseService {
    /**
     * 根据ID获得信息
     * @param id
     */
    async getInfo({ id }) {
        const userId = this.ctx.user.userId;
        const [info] = await this.nativeQuery(`
      SELECT
        a.id,
        a.title,
        a.thumbnail,
        a.content,
        a.publishDate
      FROM award_tips a
      WHERE a.id = ${id}
    `);
        const isCollection = await this.tipCollectionEntity.findOne({
            tipId: id,
            userId,
        });
        return { ...info, isCollection };
    }
    /**
     * 取得小知識分頁
     *
     */
    async page({ page = 1, size = 10 }) {
        const query = { page, size };
        const sql = `
        SELECT
            a.id,
            a.title,
            a.publishDate,
            a.thumbnail,
            count(b.id) as views,
            GROUP_CONCAT(distinct d.name) AS categories

        FROM
            award_tips a
            LEFT JOIN award_tips_user b on a.id = b.tipId
            LEFT JOIN award_tips_category c on a.id = c.tipId
            LEFT JOIN industry_category d on d.id = c.categoryId
        WHERE b.userId = ${this.ctx.user.userId} AND a.status = 7
        GROUP BY a.id
    `;
        const result = await this.sqlRenderPage(sql, _.assign(query, {
            order: 'publishDate',
        }));
        return result;
    }
    /**
     * 取得今日小知識
     *
     */
    async today() {
        const info = await this.tipEntity.findOne({
            publishDate: await this.formatDateInGMT8(new Date()),
            status: 7,
        });
        if (_.isEmpty(info))
            throw new core_1.CoolCommException('今日無小知識');
        const exist = await this.tipViewEntity.findOne({
            userId: this.ctx.user.userId,
            tipId: info.id,
        });
        if (!_.isEmpty(exist))
            return;
        await this.tipViewEntity.save({
            userId: this.ctx.user.userId,
            tipId: info.id,
        });
        delete info.createTime;
        delete info.updateTime;
        delete info.status;
        return info;
    }
    // async todayFormat() {
    //   const today = new Date();
    //   const timezoneOffset = today.getTimezoneOffset();
    //   // 计算所需时区时间的时间戳（本地时间 + 时区偏移）
    //   const targetTimestamp = today.getTime() + timezoneOffset * 60 * 1000;
    //   // 创建新的 Date 对象，表示所需时区的时间
    //   const targetDate = new Date(targetTimestamp);
    //   // 提取年份、月份和日期
    //   const year = targetDate.getUTCFullYear();
    //   const month = String(targetDate.getUTCMonth() + 1).padStart(2, '0');
    //   const day = String(targetDate.getUTCDate()).padStart(2, '0');
    //   return year + '-' + month + '-' + day;
    // }
    async formatDateInGMT8(date) {
        // 获取当前本地时间
        const localDate = new Date(date);
        // 添加东八区的时区偏移量（分钟数为负值，所以需要加上）
        const gmt8Time = localDate.getTime() + 8 * 60 * 60 * 1000;
        // 创建新的 Date 对象，表示东八区的时间
        const gmt8Date = new Date(gmt8Time);
        // 提取年份、月份和日期
        const year = gmt8Date.getFullYear();
        const month = String(gmt8Date.getMonth() + 1).padStart(2, '0');
        const day = String(gmt8Date.getDate()).padStart(2, '0');
        // 拼接并返回格式化后的字符串
        return `${year}-${month}-${day}`;
    }
    async collection({ id }) {
        const user = this.ctx.user;
        if (!id)
            throw new core_1.CoolCommException('請輸入ID');
        const articleExist = await this.tipEntity.findOne({ id });
        if (_.isEmpty(articleExist))
            throw new core_1.CoolCommException('找不到該文章');
        const collectionExist = await this.tipCollectionEntity.findOne({
            tipId: id,
            userId: user.userId,
        });
        const action = _.isEmpty(collectionExist) ? 'save' : 'delete';
        await this.tipCollectionEntity[action]({
            tipId: id,
            userId: user.userId,
        });
        return { id, status: _.isEmpty(collectionExist) };
    }
    async viewHistory(params) {
        const userId = this.ctx.user.userId;
        const { keyWord, order = 'publishDate', sort = 'desc', category } = params;
        const sql = `
        SELECT
            z.id,
            z.title,
            z.thumbnail,
            z.publishDate,
            GROUP_CONCAT(distinct d.name) AS categories

        FROM
            award_tips_user a
            LEFT JOIN award_tips z on a.tipId = z.id
            LEFT JOIN award_tips_collection b on z.id = b.tipId
            LEFT JOIN award_tips_category c on z.id = c.tipId
            LEFT JOIN industry_category d on z.id = c.categoryId
        WHERE a.userId = ${userId}
            AND z.status = 7
            ${this.setSql(category, 'AND d.slug = (?)', category)}
            ${this.setSql(keyWord, 'AND (z.title LIKE ?)', [`%${keyWord}%`])}
        GROUP BY a.id
      `;
        const result = await this.sqlRenderPage(sql, _.assign(params, {
            order,
            sort,
        }));
        return result;
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(tips_1.AwardTipsEntity),
    __metadata("design:type", typeorm_1.Repository)
], TipAppService.prototype, "tipEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(tips_user_1.AwardTipsUserEntity),
    __metadata("design:type", typeorm_1.Repository)
], TipAppService.prototype, "tipViewEntity", void 0);
__decorate([
    (0, orm_1.InjectEntityModel)(tips_collection_1.AwardTipsCollectionEntity),
    __metadata("design:type", typeorm_1.Repository)
], TipAppService.prototype, "tipCollectionEntity", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], TipAppService.prototype, "ctx", void 0);
TipAppService = __decorate([
    (0, decorator_1.Provide)()
], TipAppService);
exports.TipAppService = TipAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYXdhcmQvc2VydmljZS9hcHAvdGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUU7QUFDbkUsbURBQXNEO0FBQ3RELHVDQUFrRDtBQUVsRCxxQ0FBcUM7QUFDckMsNENBQW9EO0FBQ3BELHNEQUE2RDtBQUU3RCw0QkFBNEI7QUFDNUIsa0VBQXlFO0FBRXpFOztHQUVHO0FBRUgsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLGtCQUFXO0lBYTVDOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7O3FCQVFyQixFQUFFO0tBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUMxRCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU07U0FDUCxDQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzJCQWNXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1B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