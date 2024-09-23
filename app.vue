<template>
  <Head>
    <Title>Shots By Cade</Title>
    <Meta name="description" content="Website for Shots By Cade. A photographer based out of Southwest Missouri."></Meta>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
  </Head>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Shots By Cade` : 'Shots By Cade';
  },
  link: [{rel: 'icon', type: 'image/png', href: 'favicon.ico'
  }]
})
</script>
