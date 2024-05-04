export const makeOpenWeatherAPI = (params) => {
  const uriParams = {
    END_POINT: "onecall",
    QUERY_LAT: "16.068",
    QUERY_LON: "108.212",
    KEY_API: process.env.VUE_APP_OPEN_WEATHER_MY_KEY_API,
    ...params,
  };
  let url = process.env.VUE_APP_OPEN_WEATHER_URL;

  Object.keys(uriParams).forEach((key) => {
    url = url.replace(key, uriParams[key]);
  });

  return url;
};

export const makeNominatimAPI = (params) => {
  const uriParams = {
    QUERY_SEARCH: "Dà Nẵng",
    ...params,
  };
  let url = process.env.VUE_APP_NOMINATIM_API_URL;

  Object.keys(uriParams).forEach((key) => {
    url = url.replace(key, uriParams[key]);
  });

  return url;
};
