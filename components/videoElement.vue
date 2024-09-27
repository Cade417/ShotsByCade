<script setup>
const props = defineProps({
  src: String,
  autoplay: Boolean,
  controls: Boolean,
  loop: Boolean,
  muted: Boolean
});
</script>

<template>
  <video
    :src="src"
    :autoplay="autoplay"
    :controls="controls"
    :loop="loop"
    :muted="muted"
  >
    Your browser does not support the video tag.
  </video>
</template>