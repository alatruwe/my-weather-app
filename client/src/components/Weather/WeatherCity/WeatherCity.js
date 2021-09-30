import { Component } from "react";
import data from "../../../data.json";

class WeatherCity extends Component {
  render() {
    return (
      <div>
        <h1>{data.city.name}</h1>

        <p>{data.list[0].main.temp}</p>
      </div>
    );
  }
}

export default WeatherCity;
