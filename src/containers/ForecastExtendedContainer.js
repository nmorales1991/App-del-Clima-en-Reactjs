import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    
    render() {
        console.log(this.props)//esto viene del reducer y se inyecta en el mapStateToProps
        return (
            this.props.ciudad &&
            <ForecastExtended ciudad = {this.props.ciudad} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    ciudad: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ciudad:state.ciudad,hola:state.hola});//nos viene el estado de la aplicación y devolvemos un objeto con las propiedades que necesitamos 

export default connect(mapStateToProps,null)(ForecastExtendedContainer);// connect inyecta las propiedades en props para usarlas con this.props en este componente (values)