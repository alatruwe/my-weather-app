import { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ZipcodeForm from "./components/ZipcodeForm/ZipcodeForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
    };
  }

  hasResults = () => {
    this.setState({ results: true });
  };

  renderWeather() {
    return <p>Hi</p>;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ZipcodeForm hasResults={this.hasResults} />
        {this.state.results ? this.renderWeather() : null}
      </div>
    );
  }
}

export default App;
