import { BaseController } from '@cool-midway/core';
import { CoolRpc } from '@cool-midway/rpc';
import { DemoRpcService } from '../../service/rpc';
/**
 * 微服务
 */
export declare class DemoRpcController extends BaseController {
    rpc: CoolRpc;
    demoRpcService: DemoRpcService;
    call(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    event(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
    transaction(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
