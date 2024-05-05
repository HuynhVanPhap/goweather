<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { PUBLIC_LAYOUT } from "@/constants/index.js";

const route = useRoute();
// Đảm bảo khi layout thay đổi thì component sẽ được cập nhật lại
const layout = computed(() => route.meta.layout || PUBLIC_LAYOUT.default);
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </component>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
