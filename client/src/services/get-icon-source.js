import data from "../data.json";
import icons from "../weather-codes-icon-map.json";

const getIconSource = {
  getSource() {
    //get icon name
    const id = data.list[0].weather[0].icon;
    // get image name from icon
    const weatherImage = icons;
    // build image source
    const src = "../../../assets/" + weatherImage[id];
    return src;
  },
};

export default getIconSource;
