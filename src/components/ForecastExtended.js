import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {api_key, url_base_forecast} from './../constants/api_urls';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
]
const data = {
    temperatura: 10,
    estado: 'despejado',
    humedad: 10,
    viento: '10 km/h'
}*/
class ForecastExtended extends Component{
    constructor(){
        super();
        this.state = {
            forecastData:null
        }
    }
    componentDidMount() {
        console.log("did mount, updatecity")
        console.log(this.props.ciudad)
        this.updateCity(this.props.ciudad);
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("didupdate")
        if(prevProps.ciudad !== this.props.ciudad){
            console.log("son diferentes, actualizo la ciudad a ",this.props.ciudad)
            this.setState({forecastData:null})
            this.updateCity(this.props.ciudad);
        }
    }
    
 
    
    updateCity = ciudad=>{
        const url_forecast = `${url_base_forecast}?q=${ciudad}&APPID=${api_key}`;
        fetch(url_forecast).then(resolve=>{
                return resolve.json();
        }).then(
            data =>{
                const forecastData = transformForecast(data);
                this.setState({
                    forecastData
                })
            }
        )
        console.log("busco la data y cambio el estado, se hace render de nuevo")
    }
    renderForecastItemDays(forecastData){
        console.log("render derecha")
        return forecastData.map(forecast => (
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            hour={forecast.hour} 
            data={forecast.data} 
            weekDay={forecast.weekDay}>
            </ForecastItem>) 
        );
    }
    renderProgress=()=>{
        return <h3>Cargando Pronostico extendido</h3>
    }
    render(){
        console.log("recibo ciudad: ")
        
        const {ciudad} = this.props;// voy actualizando la ciudad cuando hago click
        console.log(ciudad)
        const {forecastData} = this.state;
        console.log(forecastData)
        return(
            <div>
                <h2 className='foracast-title'>Pronóstico Extendido para {ciudad}</h2>
                {forecastData?this.renderForecastItemDays(forecastData):this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes ={
    ciudad : PropTypes.string.isRequired,
}
export default ForecastExtended;