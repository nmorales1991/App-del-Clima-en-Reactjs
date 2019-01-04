import {api_key, url_base_forecast} from './../constants/api_urls';
import transformForecast from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY ,payload});//función que recibe un valor y devuelve el tipo y valor
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})//otra action

export const setSeletedCity = payload => {
    return dispatch =>{
        const url_forecast = `${url_base_forecast}?q=${payload}&APPID=${api_key}`;
        dispatch(setCity(payload))//primero se setea la ciudad
        //acción inicial fetch
        //return fetch(url_forecast).then(resolve=>{
        fetch(url_forecast).then(resolve=>{
               return resolve.json();
        }).then(
            //modificar el estado con el resultado de la promise
            data =>{
                const forecastData = transformForecast(data);
                dispatch(setForecastData({ciudad:payload,forecastData})) //después se guarda el fetch en un objeto
            }
        )
    };
};