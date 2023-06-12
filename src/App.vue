<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="h-full min-h-screen px-4 pb-14 bg-primary">
    <RouterView class="max-w-md mx-auto pt-14" />
  </div>
</template>
