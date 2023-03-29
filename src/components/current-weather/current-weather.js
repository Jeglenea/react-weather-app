import "./current-weather.css"
import icons from '../icons-current-weather/icons';
import Unknown from "../icons-current-weather/unknown";

const CurrentWeather = ({data}) => {
    const WeatherIcon = icons[data.weather[0].icon] || Unknown;
      
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="weather-desc">{data.weather[0].description}</p>
                </div>
                <WeatherIcon />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Fells like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} Pa</span>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default CurrentWeather