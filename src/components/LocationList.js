import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({ciudades,onSelectedLocation}) =>{
    const clickWeatherLocation = ciudad => {
        onSelectedLocation(ciudad);
    };

    const strToComponents = ciudades=>(
        ciudades.map( (ciudad) => (
        <WeatherLocation 
            key={ciudad} 
            ciudad={ciudad}
            clickLocation={()=>clickWeatherLocation(ciudad)}/>))
    )
    return(<div className="locationList">
        {strToComponents(ciudades)}
    </div>)
}

LocationList.propTypes = {
    ciudades: PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;