import initialState from './initialState';

export const loadState = () => {
    try {
        const localState = localStorage.getItem('state');
        if (!localState){
            return initialState;
        }
        return JSON.parse(localState);
    } catch (err){
        return undefined;
    }
};

export const saveState = (state) => {

    try {
        const localState = JSON.stringify(state);
        localStorage.setItem('state', localState);
    } catch (err){
        //process error
    }
};