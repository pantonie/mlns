import * as types from '../actions/ActionTypes';
import initialState from '../store/initialState'


export default function loadStaticReducer (state = initialState.staticData, action){
    switch (action.type){
        case types.LOAD_STATIC:
            return action.payload;
        default:
            return state;
    }
}