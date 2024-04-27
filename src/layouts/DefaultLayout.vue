<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-weather-primary">
    <header-nav />
  </div>
  <slot />
</template>
