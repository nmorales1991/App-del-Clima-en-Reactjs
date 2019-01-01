import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({ciudades,onSelectedLocation}) =>{// acá vienen las 2 propiedades del LocationList desde LocationListContainer.js y se guarda todo lo de adentro en una constante para exportar
    const clickWeatherLocation = ciudad => {  // se crea una constante para guardar una función la cual tendrá otra función adentro que es la que se envió desde LocationListContainer, y se le envía una ciudad como parámetro
        onSelectedLocation(ciudad);//función desde LocationListContainer.js
    };

    const strToComponents = ciudades=>(//segundo parámetro que trae un listado de ciudades
        ciudades.map( (ciudad) => (//se recorren todas las ciudades
        <WeatherLocation //por cada ciudad se crea un componente WeatherLocation, el cual tiene 3 propiedades, entre ellas una propiedad que tiene una función, la cual es la de arriba clickWeatherLocation, la cual viene de LocationListContainer.js y se le envía una ciudad como parámetro
            key={ciudad} 
            ciudad={ciudad}
            clickLocation={()=>clickWeatherLocation(ciudad)}/>))//ir a weatherLocation para ver el onclick
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