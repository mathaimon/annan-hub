<script setup>
import { ref } from 'vue';

const showQr = ref(false)

const toggleQr = () => {
    showQr.value = !showQr.value
}
</script>
<template>
    <div class="w-full px-2 text-white">
        <h1 class="mt-5 mb-3 text-4xl font-semibold text-center">Subscribe to View More</h1>
        <div class="p-5 mt-10 rounded-xl bg-secondary">
            <div class="mt-2 text-3xl font-semibold text-center">Premium Pro Plus Plan</div>
            <div class="mt-5 text-5xl font-semibold text-center">₹ 69/- <span
                    class="text-xl font-normal text-neutral-400">per
                    month</span>
            </div>
            <h2 class="mt-5 mb-3 text-xl font-semibold">Included With Subscription</h2>
            <ul class="pl-4 list-disc marker:text-accent">
                <li>Full Access to all content on AnnanHub</li>
                <li>HD Video & Images</li>
                <li>Select subscribers get one on one session to meet with Annan</li>
                <li>Special previlage to be showcased with Annan on AnnanHub</li>
                <li>and more...</li>
            </ul>
            <div class="mt-10" v-if="showQr">
                <img src="https://i.imgur.com/ds6Jj4B.png" class="px-8 rounded-md" alt="payment qr code">
                <div class="mt-3 text-xl font-semibold text-center">Scan QR to Pay</div>
            </div>
            <div class="flex justify-center mt-10">
                <button v-if="!showQr" @click="toggleQr"
                    class="px-8 py-3 text-xl font-semibold bg-accent rounded-xl text-primary">Subscribe
                </button>
            </div>
        </div>
    </div>
</template>