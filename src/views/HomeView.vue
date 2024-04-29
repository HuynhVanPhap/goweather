<script setup>
import useSearch from "../uses/useSearch.js";

const [searchQuery, searchResults, getSearchResults, searchError] = useSearch();
</script>

<template>
  <main class="container text-slate-600">
    <div class="pt-4 mb-8 relative">
      <input
        v-model="searchQuery"
        @input="getSearchResults"
        type="text"
        placeholder="Search for city or state..."
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
      <ul
        v-if="searchResults"
        class="absolute bg-gray-100 text-zinc-400 w-full shadow-md py-2 px-1 top-[66px]"
      >
        <p v-if="searchError">Sorry, something went wrong, please try again.</p>
        <p v-if="!searchError && searchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="result in searchResults"
            :key="result.place_id"
            class="py-2 cursor-pointer"
          >
            {{ result.display_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
