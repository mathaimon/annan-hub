<script setup>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="h-full min-h-screen px-4 pb-14 bg-primary">
    <RouterView class="max-w-md mx-auto pt-14" />
  </div>

  <footer>
    <FooterBar />
  </footer>
</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap");

body {
  font-family: "Satoshi", sans-serif;
}
</style>

