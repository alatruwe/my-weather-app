import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import renderer from "react-test-renderer";

describe("NavBar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
