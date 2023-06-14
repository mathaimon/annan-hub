<script setup>
import { useRouter } from "vue-router";
import ThumbUpIcon from "vue-material-design-icons/ThumbUp.vue"

const router = useRouter()

const props = defineProps({
    content: Object,
})

const redirectToSubscribe = () => {
    router.push({ name: "subscribe" })
}
</script>
<template>
    <div class="w-full py-3" @click="redirectToSubscribe">
        <div class="relative">
            <img :src="props.content.url" loading="lazy" class="rounded-md object-center h-[14rem] object-cover w-full">
            <div class="absolute bottom-0 right-0 px-2 py-0.5 rounded-tl-md rounded-br-md bg-primary/80">HD <span
                    class="font-bold">|</span> Image</div>
        </div>
        <p class="mt-2 text-lg font-semibold text-accent">{{ props.content.title }}</p>
        <div class="flex items-center mt-1">
            <p class="mr-5 text-sm text-gray-500">{{ props.content.views.toLocaleString() }} Views</p>
            <div class="flex items-center">
                <ThumbUpIcon fillColor="#39bb1a" :size="18" class="mr-2" />
                <p class="text-sm font-semibold text-gray-300">{{ props.content.like }} %</p>
            </div>
        </div>
    </div>
</template>