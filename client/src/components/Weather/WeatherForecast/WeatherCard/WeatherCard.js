import { Component } from "react";
import getIconSource from "../../../../services/get-icon-source";

class WeatherCard extends Component {
  // use state to watch for click or not
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  showDetails = () => {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  renderDetails = () => {
    return (
      <>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-temperature-low"></i>
            <p>Lowest</p>
          </div>

          <p>{this.props.min} F</p>
        </div>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-temperature-high"></i>
            <p>Highest</p>
          </div>

          <p>{this.props.max} F</p>
        </div>
        <div className="weatherDetails">
          {" "}
          <div className="weatherDetailsIcon">
            <i className="fas fa-thermometer-half"></i>
            <p>Feels like</p>
          </div>
          <p>{this.props.feelsLike} F</p>
        </div>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-tint"></i>
            <p>Humidity</p>
          </div>
          <p>{this.props.humidity} %</p>
        </div>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-wind"></i>
            <p>Wind speed</p>
          </div>

          <p>{this.props.wind} mph</p>
        </div>
      </>
    );
  };

  render() {
    const id = this.props.icon;
    const src = getIconSource.getSource(id);
    return (
      <div onClick={this.showDetails}>
        <img src={src} alt="weather icon" />
        <p>{this.props.description}</p>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-thermometer-half"></i>
          </div>
          <p>{this.props.temp} F</p>
        </div>
        <div className="weatherDetails">
          <div className="weatherDetailsIcon">
            <i className="fas fa-sun"></i>
            <p>UV index</p>
          </div>
          <p>UV index</p>
        </div>

        <div>{this.state.showDetails ? this.renderDetails() : <></>}</div>
      </div>
    );
  }
}

export default WeatherCard;