import { DictInfoEntity } from './../entity/info';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
/**
 * 描述
 */
export declare class DictTypeService extends BaseService {
    dictInfoEntity: Repository<DictInfoEntity>;
    /**
     * 删除
     * @param ids
     */
    delete(ids: any): Promise<void>;
}
