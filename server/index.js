const express = require("express");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const openWeatherMapAPI = require("./services/openWeatherMapAPI");
const coords = require("./services/get-zipcode-coords");

const PORT = process.env.PORT || 3001;

const app = express();

// Logging tool
app.use(morgan("dev"));

app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  // get forecast data
  const zipcode = req.query.zipcode;
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
    //console.log(data);
    let finalData = [];
    finalData.push(res[0]);
    finalData.push(res[1]);
    res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
