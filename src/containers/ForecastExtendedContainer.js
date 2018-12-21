import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.ciudad &&
            <ForecastExtended ciudad = {this.props.ciudad} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    ciudad: PropTypes.string.isRequired,
};

const mapStateToProps = ({ciudad}) => ({ciudad});//nos viene el estado de la aplicación y devolvemos un objeto con las propiedades que necesitamos 

export default connect(mapStateToProps,null)(ForecastExtendedContainer);// connect inyecta las propiedades en props para usarlas con this.props en este componente (values)