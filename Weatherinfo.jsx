import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Weatherinfo.css';
export default function WeatherInfo({info}){
    const NORMAl_URL = "https://images.unsplash.com/photo-1689742854945-c44649d9d8b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1673515786778-56a732133119?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900";
    const COOL_URL = "https://images.unsplash.com/photo-1761990601640-19de387403ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900";
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    
    return(
    <div className="Weatherinfo">
      <h2></h2>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Temp>=30 ? HOT_URL : info.Temp<=10 ? COOL_URL : info.Humidity>=80 ? RAIN_URL : NORMAl_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City} {info.Temp >=30 ? <SunnyIcon/> : info.Temp<=10 ? <AcUnitIcon/> : info.Humidity>=80 ? <ThunderstormIcon/> : <FavoriteIcon/>}
        </Typography>
        <Typography variant="body2" color = 'text.secondary' component={"span"} >
          <p>Temperature = {info.Temp}&deg;C</p>
          <p>Humidity = {info.Humidity}</p>
          <p>MinTemp = {info.TempMin}&deg;C</p>
          <p>MaxTemp = {info.TempMax}&deg;C</p>
          <p>The weather can be described as {info.Weather} and feels like {info.FeelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
    </div>
    );
}