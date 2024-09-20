<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter/>
    </div>
</template>

<script setup>
import AppHeader from '~/components/_base/AppHeader.vue';
import AppFooter from '~/components/_base/AppFooter.vue';
</script>