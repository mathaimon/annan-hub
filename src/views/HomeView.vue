<script setup>
import ContentCard from "../components/ContentCard.vue"
</script>

<template>
  <div class="w-full text-white px-2">
    <h1 class="mt-5 text-4xl mb-3 font-semibold">Popular Uploads</h1>
    <!-- Announcement Card -->
    <div class="mt-4 flex flex-col gap-4">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  </div>
</template>
