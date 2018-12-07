import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({weekDay,hour, data}) =>(
    <div>
        <div>{weekDay} Hora: {hour}</div>
        <WeatherData data={data}></WeatherData>
    </div>
)
ForecastItem.propTypes = {
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data:PropTypes.shape({
        temperatura:PropTypes.number.isRequired,
        estado:PropTypes.string.isRequired,
        humedad:PropTypes.number.isRequired,
        viento:PropTypes.string.isRequired,
    }),
}
export default ForecastItem;