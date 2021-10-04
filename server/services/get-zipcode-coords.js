const data = require("./zip-codes-to-geo-coords.json");

const coords = {
  // take zipcode, return true or false if it exists
  zipcodeExists(zipcode) {
    return data.hasOwnProperty(zipcode);
  },

  // take zipcode, return lat and lon in array
  getCoords(zipcode) {
    return data[zipcode];
  },
};

module.exports = coords;
