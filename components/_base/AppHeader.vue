<template>
    <div class="w-full bg-black flex flex-col desktop:flex-row relative">
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
            class="w-full absolute top-[100%] z-40 desktop:w-[2/3] flex flex-col desktop:flex-row items-center justify-center desktop:justify-end p-4 bg-black">
            <nav class="flex flex-col desktop:flex-row space-y-4 desktop:space-y-0 desktop:space-x-6">
                <a href="https://gallery.shotsbycade.com/" target="_blank"
                    class="text-white navbutton hover:underline">Galleries</a>
                <a href="/about" class="text-white navbutton hover:underline">About</a>
                <a href="/portfolio" class="text-white navbutton hover:underline">Portfolio</a>
                <a href="/pricing" class="text-white navbutton hover:underline">Pricing</a>
                <a href="/contact" class="text-white navbutton hover:underline">Contact</a>
            </nav>
        </div>
        <div class="DesktopNav hidden desktop:block">
            <nav class="flex flex-row justify-center h-full pr-[1cqw] uppercase relative">
                <a href="https://gallery.shotsbycade.com/" target="_blank"
                    class="text-white navbutton hover:underline">Galleries</a>
                <a href="/about" class="text-white navbutton hover:underline">About</a>
                <a href="/portfolio" class="text-white navbutton hover:underline">Portfolio</a>
                <a href="/pricing" class="text-white navbutton hover:underline">Pricing</a>
                <a href="/contact" class="text-white navbutton hover:underline">Contact</a>
            </nav>
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
        transition: color 0.3s ease;
        @apply text-center desktop:w-[1/5] desktop:pl-[1cqw] justify-center pt-[2.5cqw]
    }

    .navbutton:hover {
        color: #e5e7eb;
        /* Light grey on hover */
    }
</style>