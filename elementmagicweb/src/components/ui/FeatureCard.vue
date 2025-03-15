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
    <div class="p-8">
      <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
      <p class="text-gray-600 font-mono mb-8 text-sm leading-relaxed">{{ description }}</p>
      <div class="h-64 flex items-center justify-center p-4">
        <div class="relative w-full h-full gradient-bg rounded-2xl overflow-hidden">
          <img v-if="imageSrc" :src="imageSrc" :alt="title" class="absolute inset-0 w-full h-full object-contain z-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-bg {
  /* 使用更加艺术化的渐变背景，模拟颜色粒子燥点质感 */
  background: 
    radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.6) 0%, transparent 55%),
    radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 25% 65%, rgba(78, 70, 229, 0.439) 0%, transparent 50%),
    linear-gradient(135deg, #0d1423 0%, #1e293b 30%, #334155 100%);
  position: relative;
}

/* 添加噪点效果 */
.gradient-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.1;
  mix-blend-mode: soft-light;
  pointer-events: none;
}

/* 添加微妙的光晕效果 */
.gradient-bg::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
  pointer-events: none;
}
</style> 