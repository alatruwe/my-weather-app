import { Component } from "react";
import data from "../../../data.json";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherForecast.css";

class WeatherForecast extends Component {
  // get data from context here
  // pass down data as props to WeatherCard
  render() {
    return (
      <div className="wrapperForecast">
        <ul className="weatherForecast">
          {data.list.slice(1).map((data, index) => (
            <li key={data.dt}>
              <h2>Day {index + 2}</h2>

              <WeatherCard
                icon={data.weather[0].icon}
                description={data.weather[0].description}
                temp={data.main.temp}
                min={data.main.temp_min}
                max={data.main.temp_max}
                feelsLike={data.main.feels_like}
                humidity={data.main.humidity}
                wind={data.wind.speed}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WeatherForecast;
