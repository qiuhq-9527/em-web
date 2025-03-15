<script setup>
defineProps({
  content: {
    type: String,
    default: ''
  },
  mediaType: {
    type: String,
    default: 'image', // 'image' 或 'video'
    validator: (value) => ['image', 'video'].includes(value)
  },
  mediaSrc: {
    type: String,
    default: ''
  },
  altText: {
    type: String,
    default: 'Showcase media'
  },
  // 添加缓存控制属性
  cacheControl: {
    type: String,
    default: 'max-age=604800' // 默认缓存一周
  }
});

// 预加载图片函数
const preloadImage = (src) => {
  if (src && typeof window !== 'undefined') {
    const img = new Image();
    img.src = src;
  }
};

// 如果有mediaSrc，预加载图片
if (typeof mediaSrc !== 'undefined' && mediaSrc) {
  preloadImage(mediaSrc);
}
</script>

<template>
  <div class="showcase-wrapper">
    <!-- 内容区域 - 移到渐变背景上方 -->
    <div v-if="content" class="content-area text-center mb-4">
      <div v-html="content"></div>
    </div>
    
    <div class="showcase-container rounded-3xl overflow-hidden">
      <div class="gradient-bg w-full h-full relative flex items-center justify-center">
        <!-- 媒体展示区域 -->
        <div class="media-container absolute bottom-0 left-0 right-0 flex justify-center">
          <img 
            v-if="mediaType === 'image' && mediaSrc" 
            :src="mediaSrc" 
            :alt="altText" 
            class="max-h-full object-contain select-none rounded-t-xl"
            loading="lazy"
            :fetchpriority="'high'"
            :decoding="'async'"
            :referrerpolicy="'no-referrer'"
            :crossorigin="'anonymous'"
          />
          <video 
            v-else-if="mediaType === 'video' && mediaSrc" 
            :src="mediaSrc" 
            autoplay 
            loop 
            muted 
            class="max-h-full object-contain select-none rounded-t-xl"
            preload="auto"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.showcase-container {
  width: 100%;
  /* 1300:670 比例 */
  aspect-ratio: 1300 / 670;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
}

.gradient-bg {
  /* 使用更加艺术化的渐变背景，模拟颜色粒子燥点质感 */
  background: 
    radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.6) 0%, transparent 55%),
    radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 25% 65%, rgba(78, 70, 229, 0.439) 0%, transparent 50%),
    linear-gradient(135deg, #0d1423 0%, #1e293b 30%, #334155 100%);
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem; /* 3xl */
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

.media-container {
  height: 80%; /* 媒体容器高度，确保内容贴近底部但不会溢出 */
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

/* 内容区域样式 - 移到渐变背景上方 */
.content-area {
  max-width: 80%;
  padding: 1rem 0;
}

.content-area h2 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.content-area p {
  color: #64748b;
}

/* 添加微妙的边框光晕 */
.showcase-container::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 1.5rem; /* 3xl */
  padding: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .showcase-container {
    aspect-ratio: 1300 / 800; /* 移动端稍微调整比例 */
  }
  
  .content-area h2 {
    font-size: 1.5rem;
  }
  
  .content-area p {
    font-size: 0.875rem;
  }
}
</style> 