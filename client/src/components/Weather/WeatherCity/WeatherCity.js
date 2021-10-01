import { Component } from "react";
import data from "../../../data.json";
import getIconSource from "../../../services/get-icon-source";

class WeatherCity extends Component {
  render() {
    const src = getIconSource.getSource();

    return (
      <div>
        <h1>Today in {data.city.name}</h1>
        <img src={src} alt="none" />
        <p>{data.list[0].weather[0].description}</p>
        <p>{data.list[0].main.temp}</p>
      </div>
    );
  }
}

export default WeatherCity;
