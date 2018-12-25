import { createStore } from 'redux';
import {ciudad} from './../reducers/ciudad';
console.log("store")
console.log(ciudad)
const initialState = {
    ciudad: 'Talca, cl',
    hola:"chao"
};//creo un objeto para el estado inicial

export const store = createStore(ciudad, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//creo el store con la ciudad inicial cuando se inicia la aplicación
