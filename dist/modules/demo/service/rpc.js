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
exports.DemoRpcService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const goods_1 = require("../entity/goods");
const rpc_1 = require("@cool-midway/rpc");
let DemoRpcService = class DemoRpcService extends rpc_1.BaseRpcService {
    /**
     * 分布式事务
     * @param params 方法参数
     * @param rpcTransactionId 无需调用者传参， 本次事务的ID，ID會自动注入无需调用者传参
     * @param queryRunner 无需调用者传参，操作数据库，需要用queryRunner操作数据库，才能统一提交或回滚事务
     */
    // 注解启用分布式事务，参数可以指定事务类型
    async transaction(params, rpcTransactionId, queryRunner) {
        console.log('获得的参数', params);
        const data = {
            title: '商品标题',
            pic: 'https://xxx',
            price: 99.0,
            type: 1,
        };
        await queryRunner.manager.save(goods_1.DemoGoodsEntity, data);
        // 将事务id传给调用的远程服务方法
        await this.rpc.call('goods', 'demoGoodsService', 'transaction', {
            rpcTransactionId,
        });
    }
    async info(params) {
        return params;
    }
    async getUser() {
        return {
            uid: '123',
            username: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com',
        };
    }
};
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], DemoRpcService.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", rpc_1.CoolRpc)
], DemoRpcService.prototype, "rpc", void 0);
__decorate([
    (0, rpc_1.CoolRpcTransaction)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DemoRpcService.prototype, "transaction", null);
DemoRpcService = __decorate([
    (0, decorator_1.Provide)(),
    (0, rpc_1.CoolRpcService)({
        entity: goods_1.DemoGoodsEntity,
        method: ['info', 'add', 'page'],
    })
], DemoRpcService);
exports.DemoRpcService = DemoRpcService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL3NlcnZpY2UvcnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUEyRDtBQUMzRCwyQ0FBa0Q7QUFFbEQsMENBSzBCO0FBUTFCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxvQkFBYztJQU9oRDs7Ozs7T0FLRztJQUNILHVCQUF1QjtJQUV2QixLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxnQkFBaUIsRUFBRSxXQUF5QjtRQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNLElBQUksR0FBRztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsR0FBRyxFQUFFLGFBQWE7WUFDbEIsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFDRixNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEQsbUJBQW1CO1FBQ25CLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRTtZQUM5RCxnQkFBZ0I7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUNmLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNYLE9BQU87WUFDTCxHQUFHLEVBQUUsS0FBSztZQUNWLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxpQkFBaUI7U0FDekIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBeENDO0lBREMsSUFBQSxlQUFHLEdBQUU7OzJDQUNrQjtBQUd4QjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDSixhQUFPOzJDQUFDO0FBVWI7SUFEQyxJQUFBLHdCQUFrQixHQUFFOzs7O2lEQWVwQjtBQTdCVSxjQUFjO0lBTDFCLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEsb0JBQWMsRUFBQztRQUNkLE1BQU0sRUFBRSx1QkFBZTtRQUN2QixNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztLQUNoQyxDQUFDO0dBQ1csY0FBYyxDQTBDMUI7QUExQ1ksd0NBQWMifQ==