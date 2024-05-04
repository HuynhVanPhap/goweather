<script setup>
import { ref } from "vue";
import { uid } from "uid";
import { useRoute, useRouter } from "vue-router";
import BaseModal from "./BaseModal.vue";

const modalActive = ref(false);
const listLocations = ref([]);
const route = useRoute();
const router = useRouter();

function toggleModal() {
  modalActive.value = !modalActive.value;
}

function handleCloseModal() {
  modalActive.value = false;
}

function handleAddNewLocation() {
  if (localStorage.getItem("listLocations")) {
    listLocations.value = JSON.parse(localStorage.getItem("listLocations"));
  }

  const location = {
    id: uid(),
    country: route.params.country,
    location: route.params.location,
    coords: {
      lat: route.query.lat,
      lon: route.query.lon,
    },
  };

  listLocations.value.push(location);

  localStorage.setItem("listLocations", JSON.stringify(listLocations.value));

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = location.id;
  router.replace({ query });
}
</script>

<template>
  <header class="sticky top-0 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 py-6 text-slate-700"
    >
      <router-link :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <font-awesome-icon
            icon="fa-solid fa-sun"
            class="tex-2xl text-orange-400"
          />
          <p class="text-2xl">
            <span class="font-bold text-weather-secondary">Go</span
            ><span class="font-light text-blue-950">WEATHER</span>
          </p>
        </div>
      </router-link>

      <div class="flex gap-3 flex-1 justify-end">
        <font-awesome-icon
          icon="fa-solid fa-circle-info"
          class="tex-xl cursor-pointer"
          @click="toggleModal"
        />
        <font-awesome-icon
          icon="fa-solid fa-plus"
          class="tex-xl cursor-pointer"
          @click="handleAddNewLocation"
          v-if="route.query.preview"
        />
      </div>

      <base-modal :isActive="modalActive" @onClose="handleCloseModal">
        <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather
            of cities of your choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking on the "+" icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>

          <h2 class="text-2xl">Removing a city</h2>
          <p>
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be am option to
            delete the city.
          </p>
        </div>
      </base-modal>
    </nav>
  </header>
</template>
