<template>
    <div class="w-full bg-black flex flex-col desktop:flex-row h-[8em] relative z-12">
        <!-- Logo Section -->
        <div class="w-full flex justify-between items-center p-4 desktop:w-[1/3] desktop:justify-start relative">
            <a href="/" class="w-full flex items-center">
                <img src="assets/_branding/Logo_White.png" class="w-16 desktop:w-[4cqw] ml-4" alt="Logo" />
            </a>
            <!-- Mobile Menu Button -->
            <button @click="toggleMenu"
                class="text-white desktop:hidden focus:outline-none relative w-1/4 mr-0 ml-auto justify-center h-[10cqw]">
                <Icon name="material-symbols:menu"
                    class="text-white text-[8cqw] justify-center absolute h-full top-0 transition-all"
                    :class="{ 'opacity-0': isMenuOpen, 'opacity-100': !isMenuOpen }" />
                <Icon name="material-symbols:cancel-presentation"
                    class="text-white text-[8cqw] justify-center absolute h-full top-0 transition-opacity"
                    :class="{ 'opacity-0': !isMenuOpen, 'opacity-100': isMenuOpen }" />
            </button>
        </div>

        <!-- Navigation Links -->
        <div :class="{ 'hidden': !isMenuOpen, 'opacity-0': !isMenuOpen, 'opacity-100': isMenuOpen, 'block': isMenuOpen }"
            class="w-full absolute top-[100%] z-40 desktop:w-[2/3] flex flex-col desktop:flex-row items-center justify-center desktop:justify-end p-4 bg-black z-15">
            <nav class="flex flex-col desktop:flex-row space-y-4 desktop:space-y-0 desktop:space-x-6">
                <a href="/" class="navbutton">Home</a>
                <a href="https://gallery.shotsbycade.com/" target="_blank"
                    class="navbutton">Galleries</a>
                <a href="/about" class="navbutton">About</a>
                <a href="/portfolio" class="navbutton">Portfolio</a>
                <a href="/pricing" class="navbutton">Pricing</a>
                <a href="/contact" class="navbutton">Contact</a>
                <a href="/help" class="navbutton">Help</a>
            </nav>
        </div>
        <div class="hidden desktop:flex h-[8em] items-center">
            <div class="h-full w-full">
                <nav class="flex flex-row h-[4em] mt-[2em] items-center justify-center mr-[4em]">
                    <nuxt-link class="navbutton" to="/">Home</nuxt-link>
                    <a class="navbutton" href="https://gallery.shotsbycade.com/" target="_blank">Galleries</a>
                    <nuxt-link class="navbutton" to="/about">About</nuxt-link>
                    <nuxt-link class="navbutton" to="/contact">Contact</nuxt-link>
                    <nuxt-link class="navbutton" to="/portfolio">Portfolio</nuxt-link>
                    <nuxt-link class="navbutton" to="/pricing">Pricing</nuxt-link>
                </nav>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
</script>

<style scoped>

    /* Adjusts width for specific logo size needs */
    .navbutton {
        transition: all 0.1s ease;
        @apply text-white p-[0.5em] hover:bg-white rounded-xl m-[0.25em] uppercase hover:text-black hover:shadow-red hover:shadow-lg border-2 hover:border-red border-transparent text-center
    }

    .link-exact-active {
        @apply border-2  shadow-lg shadow-white/45 border-white
    }
</style>