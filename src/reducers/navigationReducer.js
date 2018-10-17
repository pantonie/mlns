import * as types from '../actions/ActionTypes';
import initialState from '../store/initialState';

export default function navigationReducer (state = initialState.navigation, action){
    switch (action.type){
        case types.NAV_CLICK:
            return ({...state, active: action.item});
        default:
            return state;
    }
}

