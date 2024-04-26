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
    <router-view />
  </component>
</template>
