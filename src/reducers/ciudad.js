import {SET_CITY} from './../actions';

export const ciudad = (state = {},action)=>{
    switch(action.type){
        case SET_CITY:
            return{...state,ciudad: action.payload} //(copia de objeto con propiedad modificada) spread operator (desglozar state inicial), si existe propiedad ciudad se modifica por lo de payload, si no existe la propiedad ciudad se agrega al objeto inicial
        default:
            return state;
    }
}