const express = require("express");
const openWeatherMapAPI = require("../services/openWeatherMapAPI");
const coords = require("../services/get-zipcode-coords");

const homeRouter = express.Router();

homeRouter.route("/").get((req, res) => {
  // get zipcode value from query
  const zipcode = req.query.zipcode;

  // check if zipcode is valid
  if (!coords.zipcodeExists(zipcode)) {
    return res.status(400).json({
      error: `Zipcode doesn't exist`,
    });
  }

  // get forecast data
  let dataForecast = openWeatherMapAPI.getForecast5(zipcode).then((res) => {
    return res;
  });

  // get uv data
  // get lat and lon of zipcode
  const coordsData = coords.getCoords(zipcode);
  // api call
  let dataUV = openWeatherMapAPI
    .getOneCall(coordsData[0], coordsData[1])
    .then((res) => {
      return res;
    });

  // built response and send it back
  Promise.all([dataForecast, dataUV]).then((data) => {
    let finalData = [];
    finalData.push(res[0]);
    finalData.push(res[1]);
    res.status(200).json(data);
  });
});

module.exports = homeRouter;
