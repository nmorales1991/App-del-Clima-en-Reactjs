import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';


const WeatherData = ({data:{temperatura,estado,humedad,viento}}) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperatura={temperatura} estado={estado}></WeatherTemperature>
        <WeatherExtraInfo humedad={humedad} viento={viento}></WeatherExtraInfo>
    </div>

);
WeatherData.propTypes={
    data:PropTypes.shape({
        temperatura:PropTypes.number.isRequired,
        estado:PropTypes.string.isRequired,
        humedad:PropTypes.number.isRequired,
        viento:PropTypes.string.isRequired,
    }),
}
export default WeatherData;