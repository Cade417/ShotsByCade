<template>
    <div class="icon-title-container transition-all uppercase text-black w-[90%] desktop:w-[25%] desktop:ml-[75%/2] ml-[5%] text-center flex justify-center border-2 border-black rounded-xl hover:bg-black hover:text-white m-[1cqw]" @click="openLinkInNewWindow(url)">
      <Icon :name="iconName" class="text-3xl"/>
      <h3>{{ title }}</h3>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the props
  const props = defineProps({
    iconName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
        type: String,
        required: true,
    }
  });
  
  // Dynamically generate the icon class (assuming Font Awesome or similar)
  const iconClass = computed(() => `fa fa-${props.iconName}`);

  function openLinkInNewWindow(url) {
  if (url) {
    window.open(url, '_blank'); // '_blank' opens the URL in a new tab/window
  } else {
    console.error('URL is required to open a link');
  }
}
  </script>
  
  <style scoped>
  .icon-title-container {
    display: flex;
    align-items: center;
  }
  
  .icon-title-container i {
    margin-right: 8px; /* Add some spacing between the icon and title */
  }
  </style>
  