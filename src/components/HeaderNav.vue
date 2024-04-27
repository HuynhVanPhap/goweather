<script setup></script>

<template>
  <header class="sticky top-0 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 py-6 text-slate-700"
    >
      <router-link :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <font-awesome-icon icon="fa-solid fa-sun" class="tex-2xl" />
          <p class="text-2xl">The Local Weather</p>
        </div>
      </router-link>

      <div class="flex gap-3 flex-1 justify-end">
        <font-awesome-icon
          icon="fa-solid fa-circle-info"
          class="tex-xl cursor-pointer"
        />
        <font-awesome-icon
          icon="fa-solid fa-plus"
          class="tex-xl cursor-pointer"
        />
      </div>
    </nav>
  </header>
</template>
