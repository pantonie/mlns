import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './style.css';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import { loadState }  from "./actions/loadStateAction";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));