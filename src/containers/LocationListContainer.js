import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectionLocation = ciudad=>{
        this.props.dispatchSetCity(ciudad);
    }
    
    render() {
        return (
            <LocationList ciudades={this.props.ciudades} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity : PropTypes.func.isRequired,
    ciudades : PropTypes.array.isRequired,
};
const mapDispatchToProps = (dispatch) =>({//retornar un objeto con funciones que luego se mapearán en el connect en el props (funciones)
	dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null,mapDispatchToProps)(LocationListContainer);