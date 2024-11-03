<template>
    <Head>
        <Title>My Work</Title>
        <Meta name="description" content="My work for you to see, and make sure that you are getting the best."></Meta>
    </Head>
    <div class="portfolio">
        <h2 class="title text-centers">My Work</h2>

        <div class="portfolio-grid">
            <!-- Loop through portfolio items -->
            <div class="portfolio-item" 
            v-motion="{
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
    }"
            v-for="(item, index) in portfolioItems" :key="index">
                <h2 class="portfolio-title">{{ item.title }}</h2>

                <!-- Image grid with dynamic puzzle layout -->
                <div class="portfolio-images">
                    <div class="portfolio-image-wrapper" v-for="(image, imgIndex) in item.images" :key="imgIndex">
                        <img :src="image" :alt="item.title" class="portfolio-image" />
                    </div>
                </div>

                <!-- Portfolio item description -->
                <p class="portfolio-description">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const portfolioItems = [
        {
            title: "Oklahoma Baseball",
            description: "Work with Oklahoma Baseball for three years, working on video board, videography, and photography content.",
            images: [
                "/images/baseball/oklahoma/CustomExport-1.jpg",
                "/images/baseball/oklahoma/CustomExport-2.jpg",
                "/images/baseball/oklahoma/CustomExport-3.jpg",
                "/images/baseball/oklahoma/CustomExport-8.jpg",
                "/images/baseball/oklahoma/CustomExport-5.jpg",
                "/images/baseball/oklahoma/CustomExport-6.jpg",
                "/images/baseball/oklahoma/CustomExport-7.jpg",
                "/images/baseball/oklahoma/CustomExport-4.jpg",
                "/images/baseball/oklahoma/CustomExport.jpg"
            ]
        },
        {
            title: "Central Crossing Fire Protection District",
            description: "Content creator for CCFPD based in Shell Knob, Missouri, working on marketing and recruiting content.",
            images: [
                "/images/firstresponse/CCFPD/CCFPD-1.jpg",
                "/images/firstresponse/CCFPD/CCFPD-07.jpg",
                "/images/firstresponse/CCFPD/CCFPD-16.jpg",
                "/images/firstresponse/CCFPD/CCFPD-22.jpg",
                "/images/firstresponse/CCFPD/CCFPD-37.jpg",
            ]
        },
        {
            title: "High School Sports",
            description: "Baseball, Basketball, and other content for schools in Southwest Missouri.",
            images: [
                "/images/high-school-sports/WHS_FBSB_CRANEWOODBAT-11.jpg",
                "/images/high-school-sports/WHSATGHS_FBBALL2024-042.jpg",
                "/images/high-school-sports/WHSATGHS_FBBALL2024-076.jpg",
                "/images/high-school-sports/WHSATGHS_FBBALL2024-096.jpg",
                "/images/high-school-sports/24-F-BSB-SouthwestAtWheaton-17.jpg",
                "/images/high-school-sports/24-F-BSB-SouthwestAtWheaton-25.jpg"
            ]
        }
    ];
</script>

<style scoped>
    .portfolio {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #f9f9f9;
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #333;
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        width: 100%;
    }

    .portfolio-item {
        background-color: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .portfolio-title {
        margin-bottom: 1rem;
        font-size: 1.75rem;
        text-align: center;
        font-weight: bold;
        color: #444;
    }

    .portfolio-images {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 0.5rem;
    }

    .portfolio-image-wrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 70%;
        /* Control aspect ratio (e.g., 70% height of the width) */
        background-color: #ddd;
        /* Placeholder color for loading state */
    }

    .portfolio-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* Maintain aspect ratio */
        transition: transform 0.3s ease;
    }

    .portfolio-image:hover {
        transform: scale(1.05);
    }

    .portfolio-description {
        font-size: 1rem;
        text-align: center;
        margin-top: 1rem;
        color: #666;
    }
</style>