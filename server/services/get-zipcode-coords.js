const data = require("./zip-codes-to-geo-coords.json");

const coords = {
  zipcodeExists(zipcode) {
    return data.hasOwnProperty(zipcode);
  },

  getCoords(zipcode) {
    return data[zipcode];
  },
};

module.exports = coords;
