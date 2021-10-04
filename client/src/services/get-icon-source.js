import icons from "../weather-codes-icon-map.json";

const getIconSource = {
  getSource(id) {
    // get image name from icon
    const weatherImage = icons;
    // build image source
    const src = "../../../assets/" + weatherImage[id];
    return src;
  },
};

export default getIconSource;
