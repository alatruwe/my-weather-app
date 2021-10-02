import React from "react";
import ReactDOM from "react-dom";
import WeatherForecast from "./WeatherForecast";
import renderer from "react-test-renderer";

describe("WeatherCity", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WeatherForecast />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<WeatherForecast />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
