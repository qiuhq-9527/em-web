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
    default: '#000000'
  },
  bgColor: {
    type: String,
    default: '#FFFFFF'
  }
});
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180"
            height="180">
            <circle cx="90" cy="90" r="90" :fill="color" />
        </mask>
        <g mask="url(#mask0_408_139)">
            <circle cx="90" cy="90" r="87" :fill="color" :stroke="bgColor" stroke-width="6" />
            <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                :fill="bgColor" />
            <rect x="115" y="54" width="12" height="72" :fill="bgColor" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>

</template>