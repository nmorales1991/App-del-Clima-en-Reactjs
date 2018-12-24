import {SET_CITY} from './../actions';
console.log("ciudad")
export const ciudad = (state = {},action)=>{//función que recibe 2 valores, un estado y una acción
    console.log('estado inicial :')
    console.log(state)
    console.log(action)
    switch(action.type){
        case SET_CITY:
            return{...state,ciudad: action.payload} //(copia de objeto con propiedad modificada) spread operator (desglozar state inicial), si existe propiedad ciudad se modifica por lo de payload, si no existe la propiedad ciudad se agrega al objeto inicial
        default:
            return state;
    }
}