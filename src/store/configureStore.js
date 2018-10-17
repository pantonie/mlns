import {createStore} from 'redux';
import rootReducer from '../reducers'
import { loadState, saveState } from './localState'

const savedState = loadState();

export default function configureStore() {
    let store = createStore (
        rootReducer,
        savedState
    );

    store.subscribe(()=> {
        saveState(store.getState());
    });

    return store;
}