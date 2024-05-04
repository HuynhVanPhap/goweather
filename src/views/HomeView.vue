<script setup>
import { useRouter } from "vue-router";
import LocationList from "../components/LocationList.vue";
import LocationCardSkeleton from "../components/skeletons/LocationCardSkeleton.vue";
import useSearch from "../uses/useSearch.js";

const router = useRouter();
const [searchQuery, searchResults, getSearchResults, searchError] = useSearch();

function previewCity(searchResult) {
  const country = searchResult.address.country;
  const location = searchResult.name;

  router.push({
    name: "locationView",
    params: { country, location },
    query: {
      lat: searchResult.lat,
      lon: searchResult.lon,
      preview: true,
    },
  });
}
</script>

<template>
  <main class="container text-weather-secondary">
    <div class="pt-4 mb-8 relative">
      <input
        v-model="searchQuery"
        @input="getSearchResults"
        type="text"
        placeholder="Search for city or state..."
        class="py-2 px-1 w-full bg-transparent border-b border-weather-primary focus:border-weather-secondary focus:outline-none placeholder:bold placeholder:text-weather-secondary"
      />
      <ul
        v-if="searchResults"
        class="absolute bg-weather-secondary rounded text-weather-primary w-full shadow-md py-2 px-1 top-[66px]"
      >
        <p v-if="searchError">Sorry, something went wrong, please try again.</p>
        <p v-if="!searchError && searchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            class="py-2 cursor-pointer"
            v-for="result in searchResults"
            :key="result.place_id"
            @click="previewCity(result)"
          >
            {{ result.display_name }}
          </li>
        </template>
      </ul>
    </div>

    <div class="flex flex-col gap-4">
      <Suspense>
        <location-list />
        <template #fallback>
          <location-card-skeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>
