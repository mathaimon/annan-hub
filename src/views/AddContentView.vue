<script setup>
import { computed, ref } from 'vue';
import router from '../router';
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import LoadingIcon from "vue-material-design-icons/Loading.vue"

const contentTitle = ref("")
const contentUrl = ref("")
const contentViews = ref(0)
const contentLike = ref(0)

const isLoading = ref(false)
const showPreview = computed(() => {
    return contentUrl.value.trim() == "" ? false : true
})

const addNewContent = async () => {
    const newContent = {
        title: contentTitle.value,
        url: contentUrl.value,
        views: contentViews.value,
        like: contentLike.value
    }
    isLoading.value = true
    await addDoc(collection(db, "content"), newContent)
    isLoading.value = false
    router.push({ name: "home" })
}
</script>
<template>
    <div class="w-full px-2 text-white">
        <h1 class="mt-5 mb-3 text-4xl font-semibold">Add Content</h1>
        <form @submit.prevent="addNewContent">
            <div class="flex flex-col p-4 mt-5 rounded-xl bg-secondary">
                <!-- Url -->
                <div class="text-lg">Image Url</div>
                <input required v-model="contentUrl" placeholder="Enter the image url for the content"
                    class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent/70 outline-1 bg-secondary" />
                <!-- Image Preview -->
                <div class="flex flex-col p-2 mt-5 rounded-md outline outline-accent/70 outline-1" v-if="showPreview">
                    <p class="mb-2 text-neutral-300">Image Preview</p>
                    <img :src="contentUrl" class="rounded-md object-center h-[14rem] object-cover w-full">
                </div>
                <!-- Content Title -->
                <div class="mt-5 text-lg">Title</div>
                <input required v-model="contentTitle" placeholder="Enter an appropriate title for the content"
                    class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent/70 outline-1 bg-secondary" type="text" />
                <div class="mt-5 text-lg">Views</div>
                <input required v-model="contentViews" type="number" placeholder="000,000"
                    class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent/70 outline-1 bg-secondary" />
                <div class="mt-5 text-lg">Like Percentage</div>
                <input required type="number" inputmode="numeric" v-model="contentLike"
                    class="w-full h-10 px-3 mt-1 mb-5 rounded-md outline outline-accent/70 outline-1 bg-secondary" />
            </div>
            <!-- Warning Dialog Box -->
            <div class="flex w-full p-4 mt-5 rounded-lg bg-secondary" v-if="isLoading">
                <div class="w-6 mr-5 animate-spin">
                    <LoadingIcon fillColor="#FFA31A" />
                </div>
                <p>Adding content to database...</p>
            </div>
            <div class="flex justify-center">
                <button type="submit"
                    class="px-10 w-[12rem] mx-auto mt-5 rounded-xl text-lg font-medium text-primary py-3 bg-accent hover:bg-accent/90">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>