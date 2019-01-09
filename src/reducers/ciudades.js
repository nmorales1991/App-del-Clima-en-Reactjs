import {SET_FORECAST_DATA} from './../actions';
//console.log("ciudad")
export const ciudades = (state = {},action)=>{//función que recibe 2 valores, un estado y una acción
    console.log(state)
    switch(action.type){
        case SET_FORECAST_DATA:
            const {ciudad,forecastData} = action.payload; //(copia de objeto con propiedad modificada) spread operator (desglozar state inicial), si existe propiedad ciudad se modifica por lo de payload, si no existe la propiedad ciudad se agrega al objeto inicial
            return {...state, [ciudad]:{forecastData}}
            default:
            return state;
    }
}