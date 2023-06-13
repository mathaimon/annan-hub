<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { vOnClickOutside } from "@vueuse/components";

const route = useRoute();
const router = useRouter();

const toggleNav = ref(false);

function closeNav() {
    toggleNav.value = false;
}

// Collapse Navbar on route change
watch(route, () => {
    closeNav();
});
</script>

<template>
    <nav class="fixed top-0 z-50 w-full mx-auto text-white shadow-md shadow-primary/50 bg-secondary/90 backdrop-blur">
        <div class="flex items-center justify-between max-w-4xl px-4 mx-auto shadow-sm h-14">
            <img @click="router.push({ name: 'home' })" src="../assets/annan hub logo.png" alt="College Union Logo"
                class="cursor-pointer h-7" />
            <!-- Hamburger Menu -->
            <div class="relative">
                <button type="button" class="flex items-center justify-center w-8 h-8 ml-3 text-gray-500 rounded-md"
                    @click="toggleNav = true">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div v-show="toggleNav" v-on-click-outside="closeNav"
                    class="absolute mt-2 right-0 z-50 p-3 w-[14rem] bg-secondary outline outline-2 outline-sechover backdrop-blur-md rounded-md">
                    <div class="flex flex-col gap-1">
                        <RouterLink
                            class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
                            :to="{ name: 'home' }">Home</RouterLink>
                        <RouterLink
                            class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
                            :to="{ name: 'new-content' }">Submit new Content</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    @apply font-medium bg-accent/20;
}
</style>
