const cleanUpData = {
  // take full array of data and return only the 1 data point per day
  cleanForecast(response) {
    // 1 day in unix time
    const day = 86400;

    // get 1st day unix time from response
    let dt = response.data.list[0].dt;

    // create array to store the unix time for the 5 days
    let array = [];
    // add the 1st day
    array.push(dt);

    // add dt time for the 4 other days and add it to array
    for (let i = 4; i > 0; i--) {
      dt = dt + day;
      array.push(dt);
    }

    // create array to store cleaned up response
    let array2 = [];

    // add city info to array
    // in 1st place, used for data display in client
    array2.push(response.data.city);

    // loop through response and push into it the 4 days we need
    response.data.list.forEach(function (el) {
      if (array.includes(el.dt)) {
        array2.push(el);
      }
    });

    return array2;
  },

  // take full array of data, return UV index of the first 5 days
  cleanOneCall(response) {
    let array = [];
    // loop through response to get daily UV index
    response.data.daily.forEach(function (el) {
      array.push(el.uvi);
    });
    // get only 5 days
    array.splice(-3);
    return array;
  },
};

module.exports = cleanUpData;
