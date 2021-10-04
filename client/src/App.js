import { Component } from "react";
import ApiContext from "./ApiContext";
import NavBar from "./components/NavBar/NavBar";
import ZipcodeForm from "./components/ZipcodeForm/ZipcodeForm";
import Weather from "./components/Weather/Weather";
import buildQuery from "./services/API-query-builder";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
    };
  }

  getAPIData = (zipcode) => {
    console.log("zipcode here");
    console.log(zipcode);

    const params = {
      zipcode: zipcode,
    };

    const queryString = buildQuery.query(params);

    return fetch(`/api?` + queryString)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ weather: res[0] });
        this.setState({ uvi: res[1] });
        this.setState({ results: true });
      })
      .catch((error) => console.log(error));
  };

  renderWeather() {
    return <Weather />;
  }

  render() {
    const value = {
      weather: this.state.weather,
      uvi: this.state.uvi,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <NavBar />
          <ZipcodeForm getAPIData={this.getAPIData} />
          {this.state.results ? this.renderWeather() : null}
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
