import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const Location = ({ciudad}) => (
        <div className="locationCont"><h1>{ciudad}</h1></div>
);

Location.propTypes = {
        ciudad:PropTypes.string.isRequired,
}
export default Location;