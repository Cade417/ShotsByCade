<template>

    <Head>
        <Meta name="description"
            content="Experienced event, family, friends, and sports photographer serving Southwest Missouri and Northwest Arkansas. Explore my portfolio and reach out today!">
        </Meta>
    </Head>
    <div class="bg-black text-white">
        <!-- Hero Section -->
        <section class="relative h-screen flex items-center justify-center bg-cover bg-center"
            style="background-image: url('/images/WHS_FBSB_CRANEWOODBAT-65.jpg');">
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <div class="relative z-5 text-center p-6 md:p-12">
                <h1
                    class="hero-text text-4xl md:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s hero-text">
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
                            <h3 class="text-xl font-semibold mb-2 uppercase">Agriculture photography and videography
                            </h3>
                            <p class="text-gray-300">Needing some photos or video from your farm or ag business, I can
                                do that!</p>
                        </div>
                    </div>
                    <div
                        class="bg-zinc-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/images/sports.jpg" alt="Featured Work 2"
                            class="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 uppercase">Athletics</h3>
                            <p class="text-gray-300">With many years at the highest level, photography in sports is my
                                forte.</p>
                        </div>
                    </div>
                    <div
                        class="bg-zinc-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="/images/photoshoot.jpg" alt="Featured Work 3"
                            class="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 uppercase">Photoshoots</h3>
                            <p class="text-gray-300">Are you wanting some photos for yourself, group, or family? I got
                                you covered!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full"> <!-- Social Media -->
            <div class="bg-white w-[80%] ml-[10%] mr-auto rounded-3xl " v-motion-slide-visible-top>
                <h3 class="text-black text-center">Follow on Social</h3>
                <div class="flex flex-col desktop:flex-row p-[1cqw] justify-center">
                    <SocialMediaTag title="Facebook" icon-name="ic:baseline-facebook" url="https://www.facebook.com/shotsbycade/"/>
                    <SocialMediaTag title="Instagram" icon-name="mdi:instagram" url="https://www.instagram.com/shotsbycade/"/>
                    <SocialMediaTag title="TikTok" icon-name="ic:baseline-tiktok" url="https://www.tiktok.com/@shotsbycade"/>    
                </div>
                
            </div>
        </section>
        <section class="py-16 bg-black">
            <h1 class="text-center">What I do</h1>
            <div class="text-center">
                <h1 class="text-[3em] bg-white text-black p-[1em]">Photography</h1>
                <div class="flex flex-wrap items-center justify-center w-[75%] ml-[12.5%] mr-[12.5%]">
                    <img src="/images/baseball/WHS_FBSB_CRANEWOODBAT_GM3-14.webp" class="w-1/2"/>
                    <img src="/images/baseball/WHS_FBSB_CRANEWOODBAT_GM3-15.webp" class="w-1/2"/>
                    <img src="/images/baseball/WHS_FBSB_CRANEWOODBAT_GM3-16.webp" class="w-1/2"/>
                    <img src="/images/baseball/WHS_FBSB_CRANEWOODBAT_GM3-17.webp"class="w-1/2"/>
                    <img src="/images/baseball/oklahoma/CustomExport-1.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-2.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-3.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-4.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-5.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-6.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-7.jpg"/>
                    <img src="/images/baseball/oklahoma/CustomExport-8.jpg"/>
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-[3em] bg-white text-black p-[1em]">videography</h1>
                <div class="flex w-full justify-center"  v-motion="{
      initial: {
        opacity: 0,
        y: '1cqw'
      },
      visible: {
        opacity: 1,
        y: '0',
        transition: {
            type: 'ease',
            duration: 1100
        }
      }
    }">
                    <video class="h-fit aspect-auto" src="/videos/oldtruckpromo.mp4" controls/>
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-[3em] bg-white text-black p-[1em]">Graphic Design</h1>
                <div class="flex flex-wrap items-center justify-center">
                    <img src="/images/graphicdzn/WheatonAtFordland.jpg"/>
                    <img src="/images/graphicdzn/WheatonAtNevc.jpg"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    let HeaderImagePath = "assets/images/WHS_FBSB_CRANEWOODBAT-65.jpg"
    import videoElement from '~/components/videoElement.vue';

    const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})

    const videos = [
  "https://rxvuigbyexdarrlusojh.supabase.co/storage/v1/object/public/weg_public/shotsbycade/videos/HalloweenVideo.mp4?t=2024-09-27T19%3A43%3A46.753Z",
  "https://rxvuigbyexdarrlusojh.supabase.co/storage/v1/object/public/weg_public/shotsbycade/videos/BSB_OU_TEXAS_2023.mp4?t=2024-09-27T19%3A43%3A36.520Z",
  "https://rxvuigbyexdarrlusojh.supabase.co/storage/v1/object/public/weg_public/shotsbycade/videos/RedSoloCup_Singalong.mp4?t=2024-09-27T19%3A43%3A56.430Z",
  "/videos/oldtruckpromo.mp4",
];
const currentIndex = ref(0);
const nextVideo = () => {
  if (currentIndex.value < videos.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Loop back to the first video
  }
};
const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = videos.length - 1; // Loop back to the last video
  }
};
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
    .VideoBtn {
        @apply bg-white text-black font-bold uppercase m-1 rounded-xl border-2 hover:bg-black hover:text-white hover:border-white text-[2cqw] desktop:m-5
    }
    .hero-title {
  font-size: clamp(2rem, 4vw + 1rem, 6rem); /* Responsive text size */
  animation: pulse 2s infinite; /* Subtle pulsing effect */
}
</style>