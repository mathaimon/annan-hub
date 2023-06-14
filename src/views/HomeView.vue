<script setup>
import { onMounted, ref } from "vue";
import { db } from "@/firebase/firebase"
import { collection, onSnapshot } from "firebase/firestore"
import LoadingIcon from "vue-material-design-icons/Loading.vue"
import ContentCard from "../components/ContentCard.vue"

const contents = ref([])
const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  onSnapshot(collection(db, "content"), (querySnapshot) => {
    const fbContent = [];
    querySnapshot.forEach((doc) => {
      const individualEvent = {
        id: doc.id,
        title: doc.data().title,
        url: doc.data().url,
        views: doc.data().views,
        like: doc.data().like
      };
      fbContent.push(individualEvent);
    });
    contents.value = fbContent;
    isLoading.value = false
  });
});
</script>

<template>
  <div class="w-full px-2 text-white">
    <h1 class="mt-5 mb-3 text-4xl font-semibold">Popular Uploads</h1>
    <!-- Warning Dialog Box -->
    <div class="flex items-center w-full p-4 mt-5 rounded-lg bg-secondary" :class="{ 'hidden': !isLoading }">
      <div class="w-6 mr-5 animate-spin">
        <LoadingIcon fillColor="#FFA31A" />
      </div>
      <p>Please wait while we load awersome Annan content <span class="animate-pulse">....</span>
      </p>
    </div>
    <!-- Announcement Card -->
    <div class="flex flex-col gap-4 mt-4" v-if="!isLoading">
      <ContentCard v-for="content in contents" :key="content.id" :content="content" />
    </div>
  </div>
</template>
