<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 24
  },
  height: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: '#41B883'
  },
  secondaryColor: {
    type: String,
    default: '#35495E'
  }
});
</script>
<template>
    <svg :width="width" :height="height" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid">
        <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" :fill="color" />
        <path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" :fill="color" />
        <path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" :fill="secondaryColor" />
    </svg>
</template>