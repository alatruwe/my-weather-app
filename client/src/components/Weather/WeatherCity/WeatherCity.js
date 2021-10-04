import { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ApiContext from "../../../ApiContext";

class WeatherCity extends Component {
  static contextType = ApiContext;

  render() {
    const { weather, uvi } = this.context;

    return (
      <div className="wrapperCity">
        <h1>Today in {weather[0].name}</h1>

        <WeatherCard
          icon={weather[1].weather[0].icon}
          description={weather[1].weather[0].description}
          temp={weather[1].main.temp}
          min={weather[1].main.temp_min}
          max={weather[1].main.temp_max}
          feelsLike={weather[1].main.feels_like}
          humidity={weather[1].main.humidity}
          wind={weather[1].wind.speed}
          uvi={uvi[0]}
        />
      </div>
    );
  }
}

export default WeatherCity;
