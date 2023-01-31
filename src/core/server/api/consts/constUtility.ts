import { deepCloneObject } from '../../../shared/utility/deepCopy';
import { hashConst } from './constHash';
import { vectorConst } from './constVector';
import { isFlagEnabled } from '../../../shared/utility/flags';
import { getClosestPlayer, getClosestVehicle } from '../../utility/closest';
import { UID } from '@AthenaShared/utility/uid';

export const utilityConst = {
    hash: hashConst,
    vector: vectorConst,
    deepCloneObject,
    isFlagEnabled,
    getClosestPlayer,
    getClosestVehicle,
    uid: UID,
};
