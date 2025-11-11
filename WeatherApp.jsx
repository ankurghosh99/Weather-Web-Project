import { useState } from 'react';
import Searchbox from './searchbox';
import WeatherInfo from './Weatherinfo';

export default function WeatherApp(){
    const[weatherData, setWeatherData]=useState({
            City:"_____",
            Temp:"___",
            TempMin:"___",
            TempMax:"___",
            Humidity:"___",
            Pressure:"___",
            FeelsLike:"___",
            Weather:"___",
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
