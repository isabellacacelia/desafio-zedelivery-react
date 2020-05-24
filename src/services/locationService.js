import axios from "axios";
import { toLocationComponent } from "../helpers/data/locationConverter";
import slugify from "slugify";

const GOOGLE_MAPS_API_URL = "https://maps.googleapis.com";
const GOOGLE_MAPS_API_KEY = "AIzaSyDWK777rQdjC_qMbmp1hp-ODuIdBW99CAg";

const locationService = {
  findByAddress: (address, resultCallback) => {
    axios
      .get(
        `${GOOGLE_MAPS_API_URL}/maps/api/geocode/json?address=${slugify(address)
          .split("-")
          .join("+")}&key=${GOOGLE_MAPS_API_KEY}`
      )
      .then((apiResult) => apiResult?.data?.results?.map(toLocationComponent))
      .then((result) => resultCallback(result))
      .catch((err) => console.error(err));
  },
};

export default locationService;
