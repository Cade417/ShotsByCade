<template>

    <Head>
        <Title>Pricing</Title>
    </Head>
    <div class="w-full bg-cover p-[1em]" style="background-image: url('/images/baseball/oklahoma/CustomExport-7.jpg');">
        <h1 class="text-center bg-white w-[80%] ml-[10%] mr-[10%] rounded-xl">Packages</h1>
        <div class="flex flex-col desktop:flex-row w-[75%] ml-[12.5%] mr-[12.5%] justify-evenly items-center">
            <PricingElement accentColor="green" pckTitle="Package I" pckPrice="$120" startingAt="true"
                pckDesc="One Hour Photo Shoot, At least 15 Professionally Edited Photos, One Location, Online Gallery" />
            <PricingElement accentColor="red" pckTitle="Package II" pckPrice="$225" startingAt="true"
                pckDesc="Two Hour Photo Shoot, At least 20 Professionally Edited Photos, Two Locations, Online Gallery" />
            <PricingElement accentColor="blue" pckTitle="Mini Package" pckPrice="Based On Event"
                pckDesc="Used on special event shoots. Prices, details, and inclusions will be provided in a post or webpage related to the shoot." />
        </div>
        <div class="bg-black text-white rounded-xl">
            <h1 class="text-center">Add-Ons to Packages</h1>
            <div class="text-center text-[1.25em] w-[80%] ml-[10%] mr-[10%]">
                <p><b>Physical Copy of Photos on USB: </b> $10</p>
                <p><b>Extra Time: </b> $50 per 30 minutes after allotted time.</p>
                <p><b>Extra Edits: </b> Extra edits, or additional versions of edited photos, are $15 each.</p>
                <p><i>Only able to be applied to packages</i></p>
            </div>
        </div>
        <hr class="h-[1em] rounded-xl">
        <div class="bg-black text-white rounded-xl">
            <h1 class="text-center">Event Coverage</h1>
            <div class="text-center text-[1.25em] w-[80%] ml-[10%] mr-[10%]">
                <p>Event coverage starts at $100 per hour.</p>
                <p>Mileage over 50 miles from Rocky Comfort will be billed at $1 per mile.</p>
                <p>A minimum of 1 hour will be billed, and must be paid before the time of the event.</p>
                <p>All outstanding balances must be paid before the delivery of photos.</p>
                <p>Real-time edits start at an additional $25 per hour on top of the base rate and must be paid ahead of the shared link.</p>
            </div>
        </div>
        <hr class="h-[1em] rounded-xl">
        <div class="bg-black text-white rounded-xl">
            <h1 class="text-center">Sports</h1>
            <div class="text-center text-[1.25em] w-[80%] ml-[10%] mr-[10%]">
                <p><b>Baseball: </b> Highly Edited and High Quality Photos will be $1 to download. Free downloads will be offered to be downloaded for free.</p>
                <p><b>Basketball: </b> All downloads will be $3 each, which is much more affordable than other local sports and news outlets.</p>
            </div>
        </div>
        <hr class="h-[1em]">
    </div>
</template>


<script setup>
</script>

<style lang="css" scoped>
    .page-titleblock {
        @apply bg-gray-200 rounded-xl desktop:w-[75%] desktop:ml-[12.5%] desktop:mr-[12.5%] desktop:m-[1cqw] desktop:p-[1cqw] shadow-lg bg-opacity-50 text-black
    }

    .PhotoPackage-Main {
        @apply bg-gray-200 rounded-xl desktop:m-[1cqw] m-[0.1cqw] mt-1 shadow-xl desktop:w-1/3 hover:shadow-black border-2 border-black desktop:hover:scale-110 transition-all
    }

    .AddonOption {
        @apply bg-gray-200 rounded-xl desktop:m-[1cqw] m-[0.1cqw] mt-1 shadow-xl desktop:w-1/3 hover:shadow-black border-2 border-black desktop:hover:scale-110 transition-all
    }
</style>