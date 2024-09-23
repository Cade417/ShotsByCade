<template>
    <div class="relative h-[20em] flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/images/baseball/WHS_FBSB_CRANEWOODBAT_GM3-17.webp');">
        <span class="page-title-text text-[8em] text-white bg-black rounded-2xl p-5 uppercase shadow-lg bg-opacity-30">Help</span>
    </div>
    <div class="text-center w-full">
        <div class="list-parent">
            <h1>Are you needing help with something?</h1>
            <p>This help page is here to assist with commonly asked questions and issues!</p>
            <hr class="BreakupBar" />
            <div>
                <h2>How to purchase digital downloads?</h2>
            <p>If the gallery you are looking at has digital download options, you can click the bag icon <Icon name="material-symbols-light:shopping-bag-outline" size="1.5em"/> (Hover over
                the image on desktop, or click on it on mobile, and it will be located at the top of the screen.)</p>
            <p>Once you have clicked on the bag, it should open a menu that has the purchase options, click on which one
                you would like. This will generaly be worded along the nature of "Single Photo Download" or "Digital
                Download" depending on how the gallery is set up. Click on the item you would like, and that should open an option to 
            add that to the cart. You can add multiple images to your cart at one tme so be able to purchase all of them together at one time.</p>
            <p>Once you have all the photos and added products to your cart, you can find the cart icon at the top of the page. Click on the cart icon, and it will open a page to confirm your cart, and procceed to checkout.</p>
            <p>If you have a coupon code or a gift card, that can be applied at check out aswell. Photos either will be avaible to download from the page after checkout, or it will send you a link to download the photos, or possibily both. I do not have control of this, so if you have any issues, please reach out using the info on <a href="/contact">contact page</a> and I will help you as much as I can!</p>
            </div>
            <hr class="BreakupBar"/>
            <div>
                <h2>Download Free Downloads</h2>
                <p>On mobile and desktop devices, if the photo is avalible for free download, there will be a white download icon, smillar to this: <Icon name="hugeicons:download-05" size="1.5em"/>. If the icon is grey, that likely means that the download is not free, and must be purchased using the instructions above.</p>
            </div>
            <hr class="BreakupBar"/>
            <h2>If you have any other issues, please use the <a href="/contact">Contact Page</a> to reach out and I'll glady help!</h2>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .BreakupBar {
        @apply rounded-xl w-full bg-black h-[0.25em]
    }
    .list-parent {
        @apply w-[90%] desktop:w-[60%] ml-[5%] mr-[5%] desktop:ml-[20%] desktop:mr-[20%]
    }
    h1 {
        @apply text-[2em] text-black
    }
    h2 {
        @apply text-[1.25em] text-black
    }
    p {
        @apply text-[1em] text-black
    }
</style>