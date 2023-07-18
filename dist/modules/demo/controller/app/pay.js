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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPayController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@cool-midway/core");
const pay_1 = require("@cool-midway/pay");
const xml2js_1 = require("xml2js");
/**
 * 支付示例
 */
let DemoPayController = class DemoPayController extends core_1.BaseController {
    /**
     * 微信扫码支付
     */
    async wx() {
        const orderNum = await this.wxPay.createOrderNum();
        const data = await this.wxPay.getInstance().unifiedOrder({
            out_trade_no: orderNum,
            body: '测试微信支付',
            total_fee: 1,
            trade_type: 'NATIVE',
            product_id: 'test001',
        });
        return this.ok(data);
    }
    /**
     * 微信支付通知回调
     */
    async wxNotify() {
        let data = '';
        this.ctx.req.setEncoding('utf8');
        this.ctx.req.on('data', chunk => {
            data += chunk;
        });
        const results = await new Promise((resolve, reject) => {
            this.ctx.req.on('end', () => {
                (0, xml2js_1.parseString)(data, { explicitArray: false }, async (err, json) => {
                    if (err) {
                        return reject('success');
                    }
                    const checkSign = await this.wxPay.signVerify(json.xml);
                    if (checkSign && json.xml.result_code === 'SUCCESS') {
                        // 处理业务逻辑
                        console.log('微信支付成功', json.xml);
                        return resolve(true);
                    }
                    return resolve(false);
                });
            });
        });
        if (results) {
            this.ctx.body =
                '<xml><return_msg>OK</return_msg><return_code>SUCCESS</return_code></xml>';
        }
    }
    /**
     * 支付宝app支付
     * @returns
     */
    async alipay() {
        const orderNum = await this.aliPay.createOrderNum();
        // app支付
        const params = await this.aliPay.getInstance().appPay({
            subject: '测试商品',
            body: '测试商品描述',
            outTradeId: orderNum,
            timeout: '10m',
            amount: '10.00',
            goodsType: '0',
        });
        return this.ok(params);
    }
    /**
     * 支付宝支付回调
     */
    async aliNotify(body) {
        const { trade_status, out_trade_no } = body;
        const check = await this.aliPay.signVerify(body);
        if (check && trade_status === 'TRADE_SUCCESS') {
            // 处理逻辑
            console.log('支付宝支付成功', out_trade_no);
        }
        this.ctx.body = 'success';
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", pay_1.CoolWxPay)
], DemoPayController.prototype, "wxPay", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", pay_1.CoolAliPay)
], DemoPayController.prototype, "aliPay", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], DemoPayController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], DemoPayController.prototype, "app", void 0);
__decorate([
    (0, decorator_1.Post)('/wx'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoPayController.prototype, "wx", null);
__decorate([
    (0, decorator_1.Post)('/wxNotify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoPayController.prototype, "wxNotify", null);
__decorate([
    (0, decorator_1.Post)('/alipay'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoPayController.prototype, "alipay", null);
__decorate([
    (0, decorator_1.Post)('/aliNotify'),
    __param(0, (0, decorator_1.Body)(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DemoPayController.prototype, "aliNotify", null);
DemoPayController = __decorate([
    (0, decorator_1.Provide)(),
    (0, core_1.CoolController)()
], DemoPayController);
exports.DemoPayController = DemoPayController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kZW1vL2NvbnRyb2xsZXIvYXBwL3BheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEU7QUFDNUUsNENBQW1FO0FBQ25FLDBDQUF5RDtBQUN6RCxtQ0FBcUM7QUFJckM7O0dBRUc7QUFHSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLHFCQUFjO0lBZW5EOztPQUVHO0lBRUgsS0FBSyxDQUFDLEVBQUU7UUFDTixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2RCxZQUFZLEVBQUUsUUFBUTtZQUN0QixJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxDQUFDO1lBQ1osVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLEtBQUssQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQzFCLElBQUEsb0JBQVcsRUFBQyxJQUFJLEVBQUUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzFCO29CQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7d0JBQ25ELFNBQVM7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdEI7b0JBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNYLDBFQUEwRSxDQUFDO1NBQzlFO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BELFFBQVE7UUFDUixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3BELE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUUsUUFBUTtZQUNwQixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxPQUFPO1lBQ2YsU0FBUyxFQUFFLEdBQUc7U0FDZixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBRUgsS0FBSyxDQUFDLFNBQVMsQ0FBWSxJQUFTO1FBQ2xDLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzVDLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLElBQUksWUFBWSxLQUFLLGVBQWUsRUFBRTtZQUM3QyxPQUFPO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7QUE1RkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0YsZUFBUztnREFBQztBQUlqQjtJQURDLElBQUEsa0JBQU0sR0FBRTs4QkFDRCxnQkFBVTtpREFBQztBQUduQjtJQURDLElBQUEsa0JBQU0sR0FBRTs7OENBQ0k7QUFHYjtJQURDLElBQUEsZUFBRyxHQUFFOzs4Q0FDa0I7QUFNeEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsS0FBSyxDQUFDOzs7OzJDQVdYO0FBTUQ7SUFEQyxJQUFBLGdCQUFJLEVBQUMsV0FBVyxDQUFDOzs7O2lEQTJCakI7QUFPRDtJQURDLElBQUEsZ0JBQUksRUFBQyxTQUFTLENBQUM7Ozs7K0NBYWY7QUFNRDtJQURDLElBQUEsZ0JBQUksRUFBQyxZQUFZLENBQUM7SUFDRixXQUFBLElBQUEsZ0JBQUksRUFBQyxlQUFHLENBQUMsQ0FBQTs7OztrREFRekI7QUE5RlUsaUJBQWlCO0lBRjdCLElBQUEsbUJBQU8sR0FBRTtJQUNULElBQUEscUJBQWMsR0FBRTtHQUNKLGlCQUFpQixDQStGN0I7QUEvRlksOENBQWlCIn0=