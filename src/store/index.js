import { createStore } from 'redux';
import {ciudad} from './../reducers/ciudad';

const initialState = {
    ciudad: 'Talca, cl'
};

export const store = createStore(ciudad, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
