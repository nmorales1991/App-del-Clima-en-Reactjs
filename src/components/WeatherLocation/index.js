import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';
import {PropTypes} from 'prop-types';

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { ciudad } = props;
        this.state = {
            ciudad,
            data: null
        };
    }

    componentDidMount() {
        this.cargaDatos();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    
  
    cargaDatos = () =>{
        const api_weather = getUrlWeatherByCity(this.state.ciudad);
        fetch(api_weather).then(resolve=>{
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            this.setState({
                data:newWeather
            });
        });

    }
    render(){
        const {clickLocation} = this.props;
        const {ciudad, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={clickLocation}>
                <Location ciudad={ciudad}></Location>
                {data ? <WeatherData data={data}></WeatherData>: <CircularProgress size={50}/>}
            </div>
        );
    }
    
}

WeatherLocation.propTypes = {
    ciudad:PropTypes.string.isRequired,
    clickLocation: PropTypes.func,
}
export default WeatherLocation;