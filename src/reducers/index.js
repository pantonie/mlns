import {combineReducers} from 'redux';
import navigationReducer from './navigationReducer'
import loadStaticReducer from './loadStaticReducer'
import saveNewsReducer from './saveNewsReducer'

const rootReducer = combineReducers({
    navigation: navigationReducer,
    staticData: loadStaticReducer,
    news: saveNewsReducer
});

export default rootReducer;