<script setup>
import AsyncLocationView from "../components/AsyncLocationView.vue";
import LocationViewSkeleton from "../components/skeletons/LocationViewSkeleton.vue";
</script>

<template>
  <div>
    <Suspense>
      <async-location-view />
      <template #fallback>
        <location-view-skeleton />
      </template>
    </Suspense>
  </div>
</template>
