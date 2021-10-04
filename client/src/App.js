import { Component } from "react";
import ApiContext from "./ApiContext";
import NavBar from "./components/NavBar/NavBar";
import ZipcodeForm from "./components/ZipcodeForm/ZipcodeForm";
import Weather from "./components/Weather/Weather";
import ValidationError from "./components/ValidationError";
import buildQuery from "./services/API-query-builder";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
      error: null,
    };
  }

  // API call
  getAPIData = (zipcode) => {
    // reset error display if needed
    this.setState({ error: null });

    const params = {
      zipcode: zipcode,
    };

    const queryString = buildQuery.query(params);

    return fetch(`/api?` + queryString)
      .then((res) => {
        if (res.ok) {
          return res.json().then((res) => {
            this.setState({ weather: res[0] });
            this.setState({ uvi: res[1] });
            this.setState({ results: true });
          });
        }
        return res.json().then((res) => {
          this.setState({ error: res.error });
        });
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
    const error = this.state.error;
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <NavBar />
          <ZipcodeForm getAPIData={this.getAPIData} />
          {this.state.error ? <ValidationError message={error} /> : null}
          {this.state.results ? this.renderWeather() : null}
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
