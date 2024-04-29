import { ref } from "vue";
import axios from "axios";

const useSearch = () => {
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const searchResults = ref(null);
  const searchError = ref(null);

  function getSearchResults() {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== "") {
        try {
          const result = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${searchQuery.value}&format=json`
          );
          searchResults.value = result.data;
          console.log(searchResults.value);
        } catch {
          searchError.value = true;
        }
        return;
      }
      searchResults.value = null;
    }, 300);
  }

  return [searchQuery, searchResults, getSearchResults, searchError];
};

export default useSearch;
