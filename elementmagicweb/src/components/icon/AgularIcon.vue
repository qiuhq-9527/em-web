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
    default: '#DD0031'
  }
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256" :width="width" :height="height">
        <g clip-path="url(#a)">
            <mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance">
                <path fill="#fff" d="M0 0h242v256H0V0Z" />
            </mask>
            <g mask="url(#b)">
                <path :fill="color"
                    d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" />
                <path :fill="color" opacity="0.5"
                    d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" />
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h242v256H0z" />
            </clipPath>
        </defs>
    </svg>
</template>