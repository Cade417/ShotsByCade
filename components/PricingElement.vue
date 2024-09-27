<template>
    <div class="PricingElement">
        <h1>{{ pckTitle }}</h1>
        <hr :style="{ backgroundColor: accentColor }" style="height: 0.5em;" class="rounded"/>
        <h4 v-if="startingAt">Starting At</h4>
        <h2>{{ pckPrice }}</h2>
        <p>{{ pckDesc }}</p>
    </div>
</template>

<script setup>
    // Define the props
    const { accentColor, pckTitle, pckPrice, pckDesc, startingAt } = defineProps({
        accentColor: String,
        pckTitle: String,
        pckPrice: String,
        pckDesc: String,
        startingAt: Boolean
    });
</script>

<style lang="css" scoped>
.PricingElement {
    transition: all 0.25s ease;
    @apply desktop:w-[25%] rounded-xl p-[1em] m-[1em] text-center bg-slate-50 border-4 border-black hover:scale-110 hover:shadow-xl
}
</style>
