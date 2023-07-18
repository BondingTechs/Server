import { BaseController } from '@cool-midway/core';
import { TestEsIndex } from '../../es/test';
import { CoolElasticSearch } from '@cool-midway/es';
/**
 * elasticsearch
 */
export declare class AppDemoEsController extends BaseController {
    testEsIndex: TestEsIndex;
    es: CoolElasticSearch;
    test(): Promise<{
        code: import("@cool-midway/core").RESCODE;
        message: import("@cool-midway/core").RESMESSAGE;
    }>;
}
