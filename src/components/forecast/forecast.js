import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion"
import "./forecast.css"
const forecastHours = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"]
const Forecast = ({ data }) => {
    const hour = new Date().getHours()
    const forecastStartIndex = Math.floor(hour / 3)
    const forecastTimes = forecastHours.slice(forecastStartIndex, forecastHours.length).concat(forecastHours.slice(0, forecastStartIndex))
    /* forecast 3 saatlik şekilde gösteriyor soru çözülmeli,
     sea level current weather e eklenicek*/ 
    return (
        <>
            <label className="title">Hourly Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="hour">{forecastTimes[idx]}</label>
                                    {new Date(item.dt_txt).getDate() !== new Date().getDate() && (
                                    <label className="next-day">Next day</label>)}
                                    {new Date(item.dt_txt) < new Date() && (
                                    <label className="next-day">Passed</label>)}
                                    <label className="desc">{item.weather[0].description}</label>
                                    <label className="temp-feelsLike">{Math.round(item.main.temp)}°C / {Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-detail-grid">
                                <div className="daily-detail-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}% </label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast