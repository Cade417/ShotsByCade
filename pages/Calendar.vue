<template>

    <Head>
        <Title>Calendar</Title>
        <Meta name="description" content="Calendar of events that I plan on being at.">
        </Meta>
    </Head>
    <div class="w-full relative bg-gray-400">
        <div class="w-[90%] ml-[5%] mr-auto">
            <br>
            <div class="w-full bg-black text-white p-[2em] rounded-lg">
                <h3 class="w-full text-center font-bold">Shots By Cade Booking Calendar</h3>
                <p class="text-center">This calendar shows events and shoots that are already planned, so you have an idea of what is open,
                    or what photos you can expect. While I promise to do my best to keep it up to date, I can not
                    promise that it will be all the time. Please reach out to me if you have any questions! Thank you!
                </p>
            </div>

            <br>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=Shots%20By%20Cade&src=ZGM5NGM0NDFjOWQ2ODY3NjA5YTM2ZjUzMzU1OTJjYzM5YmRmODA0MTBkZjQ3NGJhYTc2NDg1MmY3YWM2NzE0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23cccccc"
                style="border:solid 1px #777" width="100%" frameborder="0" scrolling="no" class="aspect-[1/1]"></iframe>
            <br>
            <div class="bg-secondary text-white text-center p-[2em] rounded-xl shadow-xl">
                <h2>To schedule an appointment or book a game, simply visit my contact page and reach out today!</h2>
                <nuxt-link to="/contact"><button
                        class="font-Playwrite uppercase border-white border-2 rounded-md p-1">To Contact
                        Page</button></nuxt-link>
            </div>
            <br>
        </div>
    </div>

</template>

<script setup>
</script>