import {url_base_weather, api_key} from './../constants/api_urls'

const getUrlWeatherByCity = ciudad =>{
    return  `${url_base_weather}?q=${ciudad}&APPID=${api_key}`;
}

export default getUrlWeatherByCity;