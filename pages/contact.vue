<template>
    <div>
        <Head>
            <Title>Contact</Title>
        </Head>
        <div>
            <iframe
                id="JotFormIFrame-242704315121140"
                title="General Inquiry Contact Form"
                ref="jotformIframe"
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/242704315121140"
                frameborder="0"
                style="min-width:100%; max-width:100%; height:539px; border:none;"
                scrolling="no">
            </iframe>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const iframe = document.getElementById('JotFormIFrame-242704315121140');
    if (iframe) {
        // Scroll the window to the top once the iframe is loaded
        iframe.onload = () => {
            window.scrollTo(0, 0);
        };

        // Load the external JotForm embed handler
        const script = document.createElement('script');
        script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
        script.onload = () => {
            window.jotformEmbedHandler("iframe[id='JotFormIFrame-242704315121140']", "https://form.jotform.com/");
        };
        document.body.appendChild(script);
    }
});
</script>
