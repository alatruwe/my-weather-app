const buildQuery = {
  // loop through params and return query as a string
  query(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  },
};

export default buildQuery;
