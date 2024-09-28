<template>
    <footer class="bg-black text-white py-8">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row md:justify-between mb-8">
                <div class="mb-4 md:mb-0">
                    <ul class="flex flex-col md:flex-row md:space-x-6 text-center">
                        <li><a href="/policies" class="hover:underline">Policies</a></li>
                        <li><a href="/policies/privacypolicy" class="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <p class="text-sm text-gray-400 text-center">&copy; 2024 Shots By Cade. All rights reserved.</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <img src="@/assets/_branding/Logo_White.png" class="h-[5em] m-auto"/>
        </div>
    </footer>
</template>

<script setup>
    // No script required for this example
</script>

<style scoped>
    /* No additional styles needed, Tailwind CSS handles the styling */
</style>