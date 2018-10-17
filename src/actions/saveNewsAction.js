import * as types from '../actions/ActionTypes';
import { getNewsDate } from "../utils";
const uuid = require('uuid/v4')

export function saveNewsSuccess(data){
    return({type: types.SAVE_NEWS, data: data})
}

export function saveNews (data){
    return saveNewsSuccess(Object.assign({}, data, {date: getNewsDate()}, {id: uuid()}))
}