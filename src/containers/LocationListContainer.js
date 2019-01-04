import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectionLocation = ciudad=>{
        this.props.dispatchSetCity(ciudad);//acá se ejecuta la función que está en el dispatchSetCity cuando se hace click en el LocationList
    }
    
    render() {
        return (//this.props.ciudades viene del App.js
            <LocationList ciudades={this.props.ciudades} onSelectedLocation={this.handleSelectionLocation}></LocationList>// el componente tiene 2 propiedades: ciudades con una lista de ciudades y onselectedlocation con una función guardada en una constante llamada handleSelectionLocation, ahora voy a LocationList.js
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity : PropTypes.func.isRequired,
    ciudades : PropTypes.array.isRequired,
};
const mapDispatchToProps = (dispatch) =>({//retornar un objeto con funciones que luego se mapearán en el connect en el props (funciones), la función dispatch viene del Provider(store)
    dispatchSetCity: value => dispatch(setCity(value)) //dipatchSetCity queda como un props, el cual tiene una función que recibe un valor y devuelve un dispatch(disparador) con la función setCity que está en actions.js
});// se "inyecta" el creador de acciones setCity en mapDispatchToProps, el cual después englobará este componente

export default connect(null,mapDispatchToProps)(LocationListContainer);//connect envuelve el componente para que pueda conectarse al store