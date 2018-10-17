import * as types from './ActionTypes';

export function navClickSuccess(item){
    return {type: types.NAV_CLICK, item: item}
};

export function navClick(item){
    return navClickSuccess(item);
}