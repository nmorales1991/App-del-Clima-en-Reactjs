import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './../reducers';

const initialState = {
    //ciudad: 'Talca, cl'
};//creo un objeto para el estado inicial

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//devtool

export const store = createStore(reducers, initialState,composeEnhancers(applyMiddleware(thunk)));//creo el store con la ciudad inicial cuando se inicia la aplicación
//ingreso el middleware al createStore, usando el devtool, si no lo quiero usar solo pongo applyMiddleware(thunk)