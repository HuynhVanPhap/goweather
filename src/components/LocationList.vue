<script setup>
import { useRouter } from "vue-router";
import LocationCard from "./LocationCard.vue";
import useLocationList from "../uses/useLocationList.js";

const listLocations = await useLocationList();
const router = useRouter();

function handleGoToLocationView(location) {
  router.push({
    name: "locationView",
    params: { country: location.country, location: location.location },
    query: {
      id: location.id,
      lat: location.coords.lat,
      lon: location.coords.lon,
    },
  });
}
</script>

<template>
  <div v-for="location in listLocations" :key="location.id">
    <location-card
      :location="location"
      @click="handleGoToLocationView(location)"
    />
  </div>

  <p v-if="listLocations.length === 0">
    No locations added. To start tracking a location, search in the field above.
  </p>
</template>
