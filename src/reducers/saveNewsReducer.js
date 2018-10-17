import * as types from '../actions/ActionTypes';

import initialState from '../store/initialState';

export default function saveNewsReducer (state = initialState.news, action){
    switch (action.type){
        case types.SAVE_NEWS:
            return [...state, action.data];
        default:
            return state;
    }
}