const config = require("../config");
const axios = require("axios");
const cleanUpData = require("./cleanUpData");

const openweathermapAPI = {
  // funtion to build string query with params
  buildQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  },

  // API call to get forecast data, take zipcode as arg
  getForecast5(zipcode) {
    const params = {
      zip: zipcode,
      units: "imperial",
      appid: config.API_KEY,
    };

    // build query and url
    const queryString = this.buildQueryParams(params);
    const url = config.API_URL + config.API_FORECAST_ENDPOINT + queryString;

    // axios call
    const data = () => {
      try {
        return axios.get(url);
      } catch (error) {
        console.log(error);
      }
    };

    return data()
      .then((response) => {
        console.log("data here");
        // console.log(response.status);
        console.log(response.data);

        // clean up data
        return cleanUpData.cleanForecast(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // API call to get UV index data, take *** as arg
  getOneCall() {},
};

module.exports = openweathermapAPI;
