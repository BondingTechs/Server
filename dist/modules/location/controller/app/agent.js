"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAgentController = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const agent_1 = require("../../entity/agent");
const agent_2 = require("../../service/app/agent");
/**
 * 描述
 */
let IpAgentController = class IpAgentController extends core_1.BaseController {
};
IpAgentController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)({
        api: ['add', 'delete', 'update', 'info', 'list', 'page'],
        entity: agent_1.IPAgentEntity,
        service: agent_2.IpAgentService,
    })
], IpAgentController);
exports.IpAgentController = IpAgentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL2xvY2F0aW9uL2NvbnRyb2xsZXIvYXBwL2FnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRDQUFtRTtBQUNuRSxtREFBOEM7QUFDOUMsOENBQW1EO0FBQ25ELG1EQUF5RDtBQUV6RDs7R0FFRztBQU9ILElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEscUJBQWM7Q0FBSSxDQUFBO0FBQTVDLGlCQUFpQjtJQU43QixJQUFBLG1CQUFPLEdBQUU7SUFDVCxJQUFBLHFCQUFjLEVBQUM7UUFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN4RCxNQUFNLEVBQUUscUJBQWE7UUFDckIsT0FBTyxFQUFFLHNCQUFjO0tBQ3hCLENBQUM7R0FDVyxpQkFBaUIsQ0FBMkI7QUFBNUMsOENBQWlCIn0=