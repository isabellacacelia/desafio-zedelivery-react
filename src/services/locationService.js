import "whatwg-fetch";
import { toLocationComponent } from "../helpers/data/locationConverter";

const GOOGLE_MAPS_API_URL = "https://maps.googleapis.com";
const GOOGLE_MAPS_API_KEY = "AIzaSyDWK777rQdjC_qMbmp1hp-ODuIdBW99CAg";

const locationService = {
  findByAddress: (address, resultCallback) => {
    fetch(
      `${GOOGLE_MAPS_API_URL}/maps/api/geocode/json?address=${address
        .split("-")
        .join("+")}&key=${GOOGLE_MAPS_API_KEY}`,
      {
        paramsSerializer: (params) => params,
      }
    )
      .then((response) => response.json())
      .then((data) => data?.results?.map(toLocationComponent))
      .then((result) => resultCallback(result))
      .catch((err) => console.error(err));
  },
};

export default locationService;
