import { Context } from '@midwayjs/socketio';
/**
 * 测试
 */
export declare class HelloController {
    ctx: Context;
    onConnectionMethod(): Promise<void>;
    gotMessage(data: any): Promise<void>;
}
