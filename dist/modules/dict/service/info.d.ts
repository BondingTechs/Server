import { DictTypeEntity } from './../entity/type';
import { DictInfoEntity } from './../entity/info';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 字典信息
 */
export declare class DictInfoService extends BaseService {
    dictInfoEntity: Repository<DictInfoEntity>;
    dictTypeEntity: Repository<DictTypeEntity>;
    /**
     * 獲得字典數據
     * @param types
     */
    data(types: string[]): Promise<{}>;
    /**
     * 獲得字典值
     * @param infoId
     * @returns
     */
    value(infoId: number): Promise<string>;
    /**
     * 獲得字典值
     * @param infoId
     * @returns
     */
    values(infoIds: number[]): Promise<string[]>;
    /**
     * 修改之後
     * @param data
     * @param type
     */
    modifyAfter(data: any, type: 'delete' | 'update' | 'add'): Promise<void>;
    /**
     * 刪除子字典
     * @param id
     */
    private delChildDict;
}
