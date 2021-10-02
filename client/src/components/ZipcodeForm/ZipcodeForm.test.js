import React from "react";
import ReactDOM from "react-dom";
import ZipcodeForm from "./ZipcodeForm";
import renderer from "react-test-renderer";

describe("WeatherCity", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ZipcodeForm />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<ZipcodeForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
