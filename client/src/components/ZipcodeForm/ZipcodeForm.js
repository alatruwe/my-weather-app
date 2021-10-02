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

  validateZipcode() {
    const zipcode = this.state.zipcode;
    const zipcodeString = zipcode.toString();
    if (zipcodeString.length < 5 || zipcodeString.length > 5) {
      return "Please enter a valid zipcode";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      zipcode: this.state.zipcode,
    };

    console.log(data);
    this.props.hasResults();
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
