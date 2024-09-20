<template>
    <div class="w-[100%] bg-gray-50 bg-cover mt-0 p-4 transition-all" style="background-image: url('/images/2023.08.01_Hay-6.jpg');">
        <div class="page-titleblock">
            <h1 class="text-3xl text-center">Pricing and Packages</h1>
            <br>
            <p class="text-md text-center">I understand the importance of getting the best value for your investment,
                and I appreciate your consideration of quality. After extensive research into industry standards and a
                thorough analysis of how my work compares, I’ve set my prices to be competitively below the norm. While
                my rates may appear high to some, they reflect not only the quality of the work but also include the
                costs of travel, equipment maintenance, and the extensive time dedicated to planning, capturing, and
                editing each photo.</p>
        </div>
        <div class="packages-section flex desktop:flex-row flex-col w-full p-5">
            <div v-for="(PhotoPackage, index) in PhotoPackages" :key="index"
                class="PhotoPackage-Main bg-cover bg-center m-4 p-6 border rounded-lg">
                <h1 class="text-3xl p-1 text-center">{{ PhotoPackage.title }}</h1>

                <!-- Learn More Toggle -->
                <div class="text-center p-4 text-lg">
                    <p>{{ PhotoPackage.desc }}</p>
                    
                </div>

                <div class="w-full">
                    <ul  v-if="PhotoPackage.showDesc">
                        <li v-for="(item, idx) in PhotoPackage.includes" :key="idx" class="text-center p-1">
                            {{ item }}
                        </li>
                    </ul>
                    <button @click="toggleDesc(index)"
                        class="bg-black text-white py-2 px-4 rounded mt-2 hover:bg-gray-800 transition w-full">
                        {{ PhotoPackage.showDesc ? 'Show Less' : 'Learn More' }}
                    </button>
                </div>

                <h3 class="text-center font-bold uppercase text-2xl pt-5">{{ PhotoPackage.price }}</h3>
            </div>
        </div>
        <div>
            <button>Book Now</button>
        </div>
    </div>
    <div class="w-full bg-black text-white">
        <div class="w-[80%] ml-[10%] ">
            <h1 class="text-3xl text-center">Want Extras? I've got you covered!</h1>
            <p class="text-center">Below are the add on's!</p>
            <div class="flex desktop:flex-row text-center text-black flex-col">
                <div v-for="addon in addons" class="AddonOption">
                    <h1 class="p-1 text-2xl">{{ addon.title }}</h1>
                    <h3 class="p-1 text-2lg font-bold uppercase italic">{{ addon.price }}</h3>
                    <p class="p-2 text-lg">{{ addon.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
    const toggleDesc = (index) => {
        PhotoPackages[index].showDesc = !PhotoPackages[index].showDesc
    }
    const image1 = "/images/photoshoot.jpg"

    const PhotoPackages = reactive([
        {
            title: 'Basic Package',
            desc: 'Looking to refresh your family and friends photos? Let me capture those special moments!',
            includes: ["A One Hour Session", "One Location", "15 professionally edited photos", "An online gallery of edited photos", "Free digital downloads", "Print Release"],
            price: 'Starting at $125',
            imgurl: '/images/photoshoot.jpg',
            showDesc: false
        },
        {
            title: 'Premium Package',
            desc: 'Capture timeless moments with our Premium Package, perfect for those special family and friend photos!',
            includes: ["A Two Hour Session", "Up to Two Location", "30 professionally edited photos", "An online gallery of edited photos", "Free digital downloads", "Print Release"],
            price: 'Starting at $225',
            imgurl: '/images/photoshoot.jpg',
            showDesc: false
        },
        {
            title: 'The Mini Package',
            desc: 'Short and Sweet, this package is often offred on special events like team shoots, etc.',
            includes: ["A 30 Minute Session", "One Location", "10 professionally edited photos", "An online gallery of edited photos", "Free digital downloads", "Print Release"],
            price: 'Starting at $80',
            imgurl: '/images/photoshoot.jpg',
            showDesc: false
        },

    ])
    const addons = [
        {
            title: 'Extra Session Length',
            desc: "Sometimes the time allotted is not enough to capture the memories you want! You can pre-order extra time, or it can be auto factored in during the shoot! Will take effect 15 mins after the alloted time.",
            price: 'Only $75 Per Hour',
        },
        {
            title: 'Extra Edits',
            desc: "Not satisfied with the number of images? No problem—I completely understand! While capturing as many memories as possible is important, the editing process does take time and care. Although $10 per additional edited image may seem steep, many photographers charge anywhere from $15 to $50 per extra photo. I strive to offer both value and quality in every shot.",
            price: 'Only $10 Per Edited Image',
        },
        {
            title: 'USB Saved Gallery',
            desc: "Looking for a physical backup of your photos? Have your gallery saved onto a USB for easy access and safe storage!",
            price: 'Only $10 Per USB',
        },
    ]
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