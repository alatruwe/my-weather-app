import { Component } from "react";
import data from "../../../data.json";
import WeatherCard from "../WeatherCard/WeatherCard";
import getIconSource from "../../../services/get-icon-source";

class WeatherCity extends Component {
  render() {
    //get icon name
    const id = data.list[0].weather[0].icon;
    const src = getIconSource.getSource(id);

    return (
      <div className="wrapperCity">
        <h1>Today in {data.city.name}</h1>

        <WeatherCard
          icon={data.list[0].weather[0].icon}
          description={data.list[0].weather[0].description}
          temp={data.list[0].main.temp}
          min={data.list[0].main.temp_min}
          max={data.list[0].main.temp_max}
          feelsLike={data.list[0].main.feels_like}
          humidity={data.list[0].main.humidity}
          wind={data.list[0].wind.speed}
        />
      </div>
    );
  }
}

export default WeatherCity;
