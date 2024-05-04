import { ref } from "vue";
import axios from "axios";
import { makeNominatimAPI } from "../helpers";

const useSearch = () => {
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const searchResults = ref(null);
  const searchError = ref(null);

  // It should be watcher
  function getSearchResults() {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== "") {
        try {
          const url = makeNominatimAPI({ QUERY_SEARCH: searchQuery.value });

          const result = await axios.get(url);
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
