<template>
    <div class="overflow-hidden overscroll-contain">
        <AppHeader class="relative z-10"/>
        <slot />
        <AppFooter class="relative z-10"/>
    </div>
</template>

<script setup>
import AppHeader from '~/components/_base/AppHeader.vue';
import AppFooter from '~/components/_base/AppFooter.vue';
</script>