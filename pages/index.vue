<template>
    <div class="bg-black text-white">
        <!-- Hero Section -->
        <section class="relative h-screen flex items-center justify-center bg-cover bg-center"
            style="background-image: url('/images/WHS_FBSB_CRANEWOODBAT-65.jpg');">
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class="relative z-10 text-center p-6 md:p-12">
                <h1
                    class="text-4xl md:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    Capturing Moments, Creating Memories</h1>
                <p class="text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">Explore our
                    galleries and discover the art of photography.</p>
                <a href="/portfolio"
                    class="inline-block bg-white text-black px-6 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">See
                    My Work</a>
            </div>
        </section>

        <!-- Featured Work Section -->
        <section class="py-16 bg-black">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8 animate__animated animate__fadeIn">Featured Work</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        class="bg-zinc-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/images/002_600x400.jpg" alt="Featured Work 1"
                            class="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 uppercase">Agriculture photography and videography</h3>
                            <p class="text-gray-300">Needing some photos or video from your farm or ag business, I can do that!</p>
                        </div>
                    </div>
                    <div
                        class="bg-zinc-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/images/sports.jpg" alt="Featured Work 2"
                            class="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">Athletics</h3>
                            <p class="text-gray-300">With many years at the highest level, photography in sports is my forte.</p>
                        </div>
                    </div>
                    <div
                        class="bg-zinc-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/images/photoshoot.jpg" alt="Featured Work 3"
                            class="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">Photoshoots</h3>
                            <p class="text-gray-300">Are you wanting some photos for yourself, group, or family? I got you covered!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
let HeaderImagePath = "assets/images/WHS_FBSB_CRANEWOODBAT-65.jpg"
</script>

<style>
    @import 'animate.css';
    /* Ensure animate.css is installed for animations */

    .container {
        max-width: 1200px;
    }

    .border-transition {
        border-width: 0;
        transition: border-width 0.3s ease, border-color 0.3s ease;
    }

    .border-transition-hover:hover {
        border-width: 0.25cqw;
        border-color: #7f0c0c;
        /* Tailwind red color */
    }
</style>