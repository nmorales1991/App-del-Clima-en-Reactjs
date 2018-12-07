import React from 'react';
import WeatherIconos from 'react-weathericons';
import {
    NUBLADO,DESPEJADO,LLUVIA,NIEVE,TRUENO,LLOVIZNA
} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [NUBLADO]: "cloud",
    [DESPEJADO]:"day-sunny",
    [LLUVIA]: "rain",
    [NIEVE]: "snow",
    [TRUENO]: "day-thunderstorm",
    [LLOVIZNA]: "day-showers"
};
const getWeatherIcon = estado =>{
    const icon = icons[estado];

    const sizeIcon ="4x";
    if(icon){
        return  <WeatherIconos className="wicon" name={icon} size={sizeIcon}></WeatherIconos>
    }else{
        return  <WeatherIconos className="wicon" name={"day-sunny"} size={sizeIcon}></WeatherIconos>
    }
};
const WeatherTemperature = ({temperatura,estado}) => (
    <div className="weatherTemperatureCont">
       {
           getWeatherIcon(estado)
       }
        <span className="temperature">{`${temperatura}`}</span>
        <span className="temperatureType">C°</span>
    </div>
);

WeatherTemperature.propTypes={
    temperatura: PropTypes.number.isRequired,
    estado: PropTypes.string.isRequired
};
export default WeatherTemperature;