const express = require("express");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const openweathermapAPI = require("./services/openWeatherMapAPI");

const PORT = process.env.PORT || 3001;

const app = express();

// Logging tool
app.use(morgan("dev"));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  // get forecast data
  let data = openweathermapAPI.getForecast5("12345").then((res) => {
    return res;
  });

  // get uv data

  // built response and send it back
  Promise.all([data]).then((data) => {
    //console.log(data);
    res.status(201).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
