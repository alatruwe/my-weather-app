const config = require("../config");
const axios = require("axios");
const cleanUpData = require("./cleanUpData");

const openWeatherMapAPI = {
  // funtion to build string query with params
  buildQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  },

  // API call to get forecast data
  //take zipcode as arg
  // return weather info for 5 days (one data point per day only) and city info
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
        //console.log("data here");
        // console.log(response.status);
        //console.log(response.data);

        // clean up data
        return cleanUpData.cleanForecast(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // API call to get UV index data
  // take lat and lon as arg
  // return UV index info for 5 days
  getOneCall(lat, lon) {
    const params = {
      lat: lat,
      lon: lon,
      exclude: "minutely,hourly,current,alerts",
      appid: config.API_KEY,
    };

    // build query and url
    const queryString = this.buildQueryParams(params);
    const url = config.API_URL + config.API_ONECALL_ENDPOINT + queryString;

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
        //console.log("data here");
        // console.log(response.status);
        //console.log(response.data);

        return cleanUpData.cleanOneCall(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = openWeatherMapAPI;
