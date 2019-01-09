import {SET_CITY} from './../actions';
//console.log("ciudad")
//pongo el estado inicial acá, o en el store
export const ciudad = (state = 'San Carlos, Cl',action)=>{//función que recibe 2 valores, un estado y una acción
    console.log(action)
    switch(action.type){
        case SET_CITY:

            return action.payload 
        default:
            return state;
    }
}