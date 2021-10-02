const cleanUpData = {
  // only keep data for 5 days
  cleanForecast(response) {
    // day in unix time
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

    // loop through response and push into it the 4 days I want
    response.data.list.forEach(function (el) {
      if (array.includes(el.dt)) {
        array2.push(el);
      }
    });

    // add city info to array
    array2.push(response.data.city);

    return array2;
  },
};

module.exports = cleanUpData;
