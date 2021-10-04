import React, { Component } from "react";
import ValidationError from "../ValidationError";
import "./ZipcodeForm.css";
class ZipcodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 0,
      touched: false,
      error: null,
    };
  }

  updateZipcode = (number) => {
    this.setState({ zipcode: number, touched: true });
  };

  // form validation
  // input is not 5 char long
  validateZipcode() {
    const zipcode = this.state.zipcode;
    const zipcodeString = zipcode.toString();
    if (zipcodeString.length !== 5) {
      return "Please enter a valid zipcode";
    }
  }

  // submit input to API call
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getAPIData(this.state.zipcode);
  };

  render() {
    const error = this.validateZipcode();

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
          {this.state.touched && <ValidationError message={error} />}
          <div>
            <button
              className="btn"
              type="submit"
              disabled={this.validateZipcode()}
            >
              Go
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ZipcodeForm;
