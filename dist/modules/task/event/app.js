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
exports.AppEvent = void 0;
const info_1 = require("./../service/info");
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
/**
 * 应用事件
 */
let AppEvent = class AppEvent {
    async onServerReady() {
        this.taskInfoService.initTask();
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", info_1.TaskInfoService)
], AppEvent.prototype, "taskInfoService", void 0);
__decorate([
    (0, core_1.Event)('onServerReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppEvent.prototype, "onServerReady", null);
AppEvent = __decorate([
    (0, core_1.CoolEvent)()
], AppEvent);
exports.AppEvent = AppEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YXNrL2V2ZW50L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0Q7QUFDcEQsNENBQXFEO0FBQ3JELG1EQUE2QztBQUU3Qzs7R0FFRztBQUVILElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFLbkIsS0FBSyxDQUFDLGFBQWE7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTtBQU5DO0lBREMsSUFBQSxrQkFBTSxHQUFFOzhCQUNRLHNCQUFlO2lEQUFDO0FBR2pDO0lBREMsSUFBQSxZQUFLLEVBQUMsZUFBZSxDQUFDOzs7OzZDQUd0QjtBQVBVLFFBQVE7SUFEcEIsSUFBQSxnQkFBUyxHQUFFO0dBQ0MsUUFBUSxDQVFwQjtBQVJZLDRCQUFRIn0=