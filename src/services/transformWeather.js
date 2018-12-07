import convert from 'convert-units';
import {
    NIEVE,NUBLADO,DESPEJADO,TRUENO,LLOVIZNA,LLUVIA
} from './../constants/weathers';

const getTemp = kelvin =>{
    return Number(convert(kelvin).from("K").to("C").toFixed());
}
const getEstado = weather=>{
    const {id} = weather;
    if(id < 300 ){
        return TRUENO;
    } else if(id < 400){
        return LLOVIZNA;
    } else if(id < 600){
        return LLUVIA;
    } else if (id < 700){
        return NIEVE;
    } else if (id === 800){
        return DESPEJADO;
    }else{
        return NUBLADO;
    }
}
const transformWeather = weather_data =>{
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const temperatura = getTemp(temp);
    const estado = getEstado(weather_data.weather[0]);
    const data ={
        temperatura,
        estado,
        humedad:humidity,
        viento: `${speed} km/h`
    }
    return data;

}
export default transformWeather;