import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {ciudad} from './../reducers/ciudad';

const initialState = {
    ciudad: 'Talca, cl',
    hola:"chao"
};//creo un objeto para el estado inicial

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//devtool

export const store = createStore(ciudad, initialState,composeEnhancers(applyMiddleware(thunk)));//creo el store con la ciudad inicial cuando se inicia la aplicación
//ingreso el middleware al createStore, usando el devtool, si no lo quiero usar solo pongo applyMiddleware(thunk)