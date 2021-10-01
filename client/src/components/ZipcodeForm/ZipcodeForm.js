import React, { Component } from "react";
import "./ZipcodeForm.css";
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
      <section className="wrapperForm">
        <form
          className="zipcodeForm"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="zipcode">Enter a zipcode</label>{" "}
          <input
            type={"number"}
            id={"zipcode"}
            name={"zipcode"}
            onChange={(e) => this.updateZipcode(e.target.value)}
            value={this.state.zipcode}
          ></input>
          <div>
            <button className="btn" type="submit">
              Go
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ZipcodeForm;
