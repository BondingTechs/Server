import { ICoolEs, BaseEsIndex } from '@cool-midway/es';
/**
 * 测试索引
 */
export declare class TestEsIndex extends BaseEsIndex implements ICoolEs {
    indexInfo(): {
        name: {
            type: string;
            analyzer: string;
            search_analyzer: string;
            fields: {
                raw: {
                    type: string;
                };
            };
        };
        age: {
            type: string;
        };
    };
}
