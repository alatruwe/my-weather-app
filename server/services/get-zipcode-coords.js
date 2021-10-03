const data = require("./zip-codes-to-geo-coords.json");

const coords = {
  getCoords(zipcode) {
    return data[zipcode];
  },
};

module.exports = coords;
