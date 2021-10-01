import { Component } from "react";
import data from "../../../data.json";
import icons from "../../../weather-codes-icon-map.json";

class WeatherCity extends Component {
  render() {
    //get icon name
    const id = data.list[0].weather[0].icon;
    // get image name from icon
    const weatherImage = icons;
    // build image source
    const src = "../../../assets/" + weatherImage[id];

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
