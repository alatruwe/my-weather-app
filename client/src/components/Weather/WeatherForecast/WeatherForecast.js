import { Component } from "react";
import ApiContext from "../../../ApiContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherForecast.css";

class WeatherForecast extends Component {
  static contextType = ApiContext;

  render() {
    const { weather, uvi } = this.context;
    return (
      <div className="wrapperForecast">
        <ul className="weatherForecast">
          {weather.slice(2).map((data, index) => (
            <li key={data.dt}>
              <h2>Day {index + 2}</h2>

              <WeatherCard
                icon={data.weather[0].icon}
                description={data.weather[0].description}
                temp={data.main["temp"]}
                min={data.main["temp_min"]}
                max={data.main["temp_max"]}
                feelsLike={data.main["feels_like"]}
                humidity={data.main["humidity"]}
                wind={data.wind["speed"]}
                uvi={uvi[index]}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WeatherForecast;
