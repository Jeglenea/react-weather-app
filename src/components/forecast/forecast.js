import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import "./forecast.css";

const forecastHours = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];

const Forecast = ({ data }) => {
    const [selected, setSelected] = useState(null);
    const hour = new Date().getHours();
    const forecastStartIndex = Math.floor(hour / 3);
    const forecastTimes = forecastHours.slice(forecastStartIndex, forecastHours.length).concat(forecastHours.slice(0, forecastStartIndex));
    /* forecast 3 saatlik şekilde gösteriyor soru çözülmeli,
     sea level current weather e eklenicek*/
    return (
        <>
            <Typography variant="h6" gutterBottom>
                <p className='Header'>Hourly Forecast</p>
            </Typography>
            <Typography variant="h7" gutterBottom>
                <p className='Header-info'>(Times are shown based on your location, not based on the time of the country or city you are searching for)</p>
            </Typography>
            {data.list.slice(0, 7).map((item, idx) => (
                <Accordion
                    key={idx}
                    expanded={selected === idx}
                    onChange={() => setSelected(selected === idx ? null : idx)}
                >
                    <AccordionSummary
                        className='daily-item'
                        expandIcon={<ExpandMore />}
                        aria-controls={`panel${idx}-content`}
                        id={`panel${idx}-header`}
                    >
                        <>  
                            <img alt="weather" className="weather-icon-forecast" src={`icons/${item.weather[0].icon}.png`} />
                            <Typography variant="subtitle1" className='forecast-time'>{forecastTimes[idx]}</Typography>
                            {new Date(item.dt_txt).getDate() !== new Date().getDate() && (
                                <Typography variant="subtitle2" className='day-info'>Next day</Typography>)}
                            {new Date(item.dt_txt) < new Date() && (
                                <Typography variant="subtitle2" className='day-info'>Passed</Typography>)}
                            <Typography variant="subtitle2" className='weather-description'>{item.weather[0].description}</Typography>
                            <Typography variant="subtitle2" className='temperature'>{Math.round(item.main.temp)}°C / {Math.round(item.main.feels_like)}°C</Typography>
                        </>
                    </AccordionSummary>
                    <AccordionDetails className="accordion-content">
                        <div className="daily-detail-grid">
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Pressure</Typography>
                                <Typography variant="subtitle2">{item.main.pressure} Pa</Typography>
                            </div>
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Humidity</Typography>
                                <Typography variant="subtitle2">{item.main.humidity}%</Typography>
                            </div>
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Clouds</Typography>
                                <Typography variant="subtitle2">{item.clouds.all}%</Typography>
                            </div>
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Wind Speed</Typography>
                                <Typography variant="subtitle2">{item.wind.speed} m/s</Typography>
                            </div>
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Wind Direction</Typography>
                                <Typography variant="subtitle2">{item.wind.deg}°</Typography>
                            </div>
                            <div className="daily-detail-grid-item">
                                <Typography variant="subtitle2">Visibility</Typography>
                                <Typography variant="subtitle2">{(item.visibility / 1000).toFixed(1)} km</Typography>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </>
    );
};

export default Forecast;

