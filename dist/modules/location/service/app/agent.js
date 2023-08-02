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
exports.IpAgentService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
const agent_1 = require("../../entity/agent");
/**
 * 描述
 */
let IpAgentService = class IpAgentService extends core_1.BaseService {
    async add(param) {
        const agent = await this.ipAgentEntity.findOne({
            infoId: param.infoId,
            userAgentString: param.userAgentString,
            name: param.name,
        });
        if (!_.isEmpty(agent)) {
            return agent;
        }
        return await this.ipAgentEntity.save({
            ...param,
        });
    }
};
__decorate([
    (0, orm_1.InjectEntityModel)(agent_1.IPAgentEntity),
    __metadata("design:type", typeorm_1.Repository)
], IpAgentService.prototype, "ipAgentEntity", void 0);
IpAgentService = __decorate([
    (0, decorator_1.Provide)()
], IpAgentService);
exports.IpAgentService = IpAgentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2xvY2F0aW9uL3NlcnZpY2UvYXBwL2FnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMsOENBQW1EO0FBRW5EOztHQUVHO0FBRUgsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLGtCQUFXO0lBSTdDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztRQUNiLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNuQyxHQUFHLEtBQUs7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWZDO0lBREMsSUFBQSx1QkFBaUIsRUFBQyxxQkFBYSxDQUFDOzhCQUNsQixvQkFBVTtxREFBZ0I7QUFGOUIsY0FBYztJQUQxQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxjQUFjLENBaUIxQjtBQWpCWSx3Q0FBYyJ9