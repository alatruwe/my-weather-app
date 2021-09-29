import React, { Component } from "react";

class ZipcodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 0,
      error: null,
    };
  }

  updateZipcode = (number) => {
    this.setState({ zipcode: number });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      zipcode: this.state.zipcode,
    };

    console.log(data);
    this.props.hasResults();
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="zipcode">
            Enter a zipcode:
            <input
              type={"number"}
              id={"zipcode"}
              name={"zipcode"}
              onChange={(e) => this.updateZipcode(e.target.value)}
              value={this.state.zipcode}
            ></input>
          </label>
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default ZipcodeForm;
