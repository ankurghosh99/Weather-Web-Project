import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function Searchbox({updateWeatherData}){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1532b822a6c56efc0415c73e6787fff7";

    let getWeatherInfo = async()=>{
        let url =`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        let res = await fetch(url);
        let data = await res.json();
        let result = {
            City: city,
            Temp: data.main.temp,
            TempMin: data.main.temp_min,
            TempMax: data.main.temp_max,
            Humidity: data.main.humidity,
            Pressure: data.main.pressure,
            FeelsLike: data.main.feels_like,
            Weather: data.weather[0].description,
        };
        console.log(result);
        return result;
    };
    

    function handleChange(event){
        setCity(event.target.value);
    };

    let handelSubmit= async (event) => {
        event.preventDefault();
        //setCity("");
        let newInfo = await getWeatherInfo();
        updateWeatherData(newInfo);
    }

    return(
        <div className='searchbox'>
            <h2 style={{color:"red"}}>W E A T H E R ~ A P P</h2>
            <form onSubmit={handelSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type = "submit"> Search </Button>
            </form>
        </div>
    );
}