import {api_key, url_base_forecast} from './../constants/api_urls';
import transformForecast from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type: SET_CITY ,payload});//función que recibe un valor y devuelve el tipo y valor


export const fetchForecast = payload => {
    return dispatch =>{
        const url_forecast = `${url_base_forecast}?q=${payload}&APPID=${api_key}`;
        //acción inicial fetch
        fetch(url_forecast).then(resolve=>{
                return resolve.json();
        }).then(
            //modificar el estado con el resultado de la promise
            data =>{
                const forecastData = transformForecast(data);            }
        )
    };
};