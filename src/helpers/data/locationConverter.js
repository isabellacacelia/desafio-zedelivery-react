const findAddressComponent = (addressComponents, type) => {
  return addressComponents?.find((c) => c?.types?.includes(type));
};

const toLocationComponent = ({
  formatted_address: longAddress,
  address_components: addressComponents,
  geometry,
}) => {
  const { location } = geometry;
  const { lat, lng: long } = location;
  const city = findAddressComponent(
    addressComponents,
    "administrative_area_level_2"
  )?.short_name;
  const state = findAddressComponent(
    addressComponents,
    "administrative_area_level_1"
  )?.short_name;
  return {
    city,
    state,
    longAddress,
    lat,
    long,
  };
};

export { toLocationComponent };
