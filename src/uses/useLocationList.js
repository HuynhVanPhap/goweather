import { ref } from "vue";
import axios from "axios";
import { makeOpenWeatherAPI } from "../helpers";

const useLocationList = async () => {
  const listLocations = ref([]);

  if (localStorage.getItem("listLocations")) {
    const requests = [];
    listLocations.value = JSON.parse(localStorage.getItem("listLocations"));

    listLocations.value.forEach((location) => {
      const url = makeOpenWeatherAPI({
        QUERY_LAT: location.coords.lat,
        QUERY_LON: location.coords.lon,
        END_POINT: "weather",
      });

      requests.push(axios.get(url));
    });

    const weatherData = await Promise.all(requests);

    weatherData.forEach((value, index) => {
      listLocations.value[index].weather = value.data;
    });
  }

  return listLocations;
};

export default useLocationList;
