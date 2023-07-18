import { TaskInfoService } from './../service/info';
/**
 * 应用事件
 */
export declare class AppEvent {
    taskInfoService: TaskInfoService;
    onServerReady(): Promise<void>;
}
