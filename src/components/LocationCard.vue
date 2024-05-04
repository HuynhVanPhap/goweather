<script setup>
import { defineProps } from "vue";

const props = defineProps({
  location: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div
    class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col flex-1 text-blue-950">
      <h2 class="text-3xl">{{ location.location }}</h2>
      <h3>{{ location.country }}</h3>
    </div>

    <div class="flex flex-col gap-2 text-blue-950">
      <div class="flex gap-2">
        <img
          class="w-[35px] h-auto"
          :src="`http://openweathermap.org/img/wn/${props.location.weather.weather[0].icon}@2x.png`"
          alt=""
        />
        <p class="text-3xl self-end">
          {{ Math.round(props.location.weather.main.temp) }}&deg;
        </p>
      </div>
      <div class="flex gap-2">
        <span class="text-xs">
          H:
          {{ Math.round(props.location.weather.main.temp_max) }}&deg;
        </span>
        <span class="text-xs">
          L:
          {{ Math.round(props.location.weather.main.temp_min) }}&deg;
        </span>
      </div>
    </div>
  </div>
</template>
