import { useState } from 'react';
import Searchbox from './searchbox';
import WeatherInfo from './Weatherinfo';

export default function WeatherApp(){
    const[weatherData, setWeatherData]=useState({
            City:"Kolkata",
            Temp:18.97,
            TempMin:18.97,
            TempMax:18.97,
            Humidity:77,
            Pressure:1013,
            FeelsLike:18.93,
            Weather:"mist",
    });

    function updateWeatherData(newData){
        setWeatherData(newData);
    }
    return(
        <div >
            <Searchbox updateWeatherData={updateWeatherData}/>
            <WeatherInfo info={weatherData}/>
        </div>
    );
}