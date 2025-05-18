<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
    <div class="flex flex-row md:flex-col p-4 sm:p-5 md:p-8">
      <div class="flex-1 pr-3 md:pr-0 md:mb-6">
        <h3 class="text-lg xs:text-xl sm:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">{{ title }}</h3>
        <p class="text-gray-600 font-mono text-xs xs:text-sm leading-relaxed mb-0 md:mb-6">{{ description }}</p>
      </div>
      
      <div class="w-1/3 md:w-full h-24 xs:h-32 md:h-48 sm:h-56 lg:h-64 flex items-center justify-center">
        <div class="relative w-full h-full rounded-xl overflow-hidden image-container">
          <img v-if="imageSrc" :src="imageSrc" :alt="title" class="image-fade" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-fade {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  mask-image: radial-gradient(ellipse at center, black 40%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 90%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 90%, transparent 100%);
}

@media (max-width: 768px) {
  .image-fade {
    max-width: 100%;
    max-height: 100%;
  }
}
</style> 