<script setup>
import ThumbUpIcon from "vue-material-design-icons/ThumbUp.vue"
</script>
<template>
    <div class="w-full py-3">
        <img src="https://images.pexels.com/photos/296817/pexels-photo-296817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="rounded-md object-center h-[14rem] object-cover w-full">
        <p class="mt-2 text-lg font-semibold text-accent">I was asleep, look what happened</p>
        <div class="flex items-center mt-1">
            <p class="mr-5 text-sm text-gray-500">212,314 Views</p>
            <div class="flex items-center">
                <ThumbUpIcon fillColor="#39bb1a" :size="18" class="mr-2" />
                <p class="text-sm font-semibold text-gray-300">92 %</p>
            </div>
        </div>
    </div>
</template>