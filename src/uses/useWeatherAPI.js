import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { makeOpenWeatherAPI } from "../helpers";

const useWeatherAPI = async () => {
  const route = useRoute();
  const weather = ref(null);
  const error = ref(null);
  const url = makeOpenWeatherAPI({
    QUERY_LAT: route.query.lat,
    QUERY_LON: route.query.lat,
    KEY_API: process.env.VUE_APP_OPEN_WEATHER_KEY_API,
  });

  await axios
    .get(url)
    .then((weatherData) => {
      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000;
      const utc = weatherData.data.current.dt * 1000 + localOffset;
      weatherData.data.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;

      // cal hourly weather offset
      weatherData.data.hourly.forEach((hour) => {
        const utc = hour.dt * 1000 + localOffset;
        hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
      });

      weather.value = weatherData.data;
    })
    .then((err) => {
      error.value = err;
    });

  return [weather.value, error.value];
};

export default useWeatherAPI;
