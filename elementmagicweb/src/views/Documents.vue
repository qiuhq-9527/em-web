<script setup>
import Hander from '@/components/Hander.vue';
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { downloadExtension } from '@/utils/download.js';

// 创建四条数据用于展示
const documentItems = ref([
  {
    id: 1,
    title: "Step1:下载扩展",
    content: `<h2 class='text-3xl text-gray-100 font-bold mb-5'>下载扩展</h2>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>1.在官网中下载扩展</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>2.在本地完成解压操作</p>
    `,
    mediaType: "video",
    mediaSrc: "/videos/step1.mp4",
    altText: "下载扩展演示"
  },
  {
    id: 2,
    title: "Step2:安装扩展",
    content: `<h2 class='text-3xl text-gray-100 font-bold mb-5'>安装扩展</h2>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>1.在扩展管理中开启开发者模式，将文件夹拖入到其中</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>2.从扩展卡片中复制ID（后续会用上）</p>`,
    mediaType: "video",
    mediaSrc: "/videos/step2.mp4",
    altText: "安装扩展演示"
  },
  {
    id: 3,
    title: "Step3:使用扩展获取元素",
    content: `<h2 class='text-3xl text-gray-100 font-bold mb-5'>使用扩展获取元素</h2>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>1.打开目标网站，并按住Alt或Option标记目标元素</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>2.标记过程中可以使用⬆⬇⬅⮕按键调整被选中元素</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>3.按下Enter会出现弹窗，表示元素获取成功</p>`,
    mediaType: "video",
    mediaSrc: "/videos/step3.mp4",
    altText: "使用扩展获取元素演示"
  },
  {
    id: 4,
    title: "Step4:配置与使用MagicBot",
    content: `<h2 class='text-3xl text-gray-100 font-bold mb-5'>配置MagicBot</h2>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>1.点击扩展弹窗中右下角的跳转按钮，将进入MagicBot系统</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>2.将刚刚复制的扩展ID粘贴到右上角的输入框中并刷新</p>
    <p class='text-white opacity-90 text-lg font-light tracking-wider'>3.点击操作区中任意指令即可跳转到操作页</p>
    `,
    mediaType: "video",
    mediaSrc: "/videos/step4.mp4",
    altText: "配置与使用MagicBot演示"
  }
]);

// 当前显示的项目索引
const currentIndex = ref(0);

// 获取当前项目
const currentItem = computed(() => documentItems.value[currentIndex.value]);

// 引用容器和当前项目元素
const contentContainer = ref(null);
let currentItemRef = null;
let itemOffsets = [];

// 当前视频元素引用
const currentVideoRef = ref(null);

// 计算内容容器的变换样式，使当前项目居中
const contentTransformStyle = computed(() => {
  if (itemOffsets[currentIndex.value] !== undefined) {
    const offset = itemOffsets[currentIndex.value];
    const containerHeight = contentContainer.value?.clientHeight || 0;
    // 计算需要的偏移量，使当前项目垂直居中
    const translateY = containerHeight / 2 - offset - (containerHeight * 0.1); // 使用相对单位
    return {
      transform: `translateY(${translateY}px)`
    };
  }
  return {};
});

// 计算所有项目的位置偏移
const calculateItemOffsets = () => {
  itemOffsets = [];
  let currentOffset = 0;

  // 获取所有项目元素
  const itemElements = document.querySelectorAll('.content-item');

  itemElements.forEach((el, index) => {
    itemOffsets[index] = currentOffset;
    // 使用元素实际高度加上margin
    const style = window.getComputedStyle(el);
    const marginBottom = parseInt(style.marginBottom);
    currentOffset += el.offsetHeight + marginBottom;
  });
};

// 监听当前索引变化，更新偏移量
watch(currentIndex, () => {
  // 确保DOM已更新
  nextTick(() => {
    calculateItemOffsets();
  });
});

// 组件挂载后计算初始偏移量
onMounted(() => {
  calculateItemOffsets();

  // 监听窗口大小变化，重新计算偏移量
  window.addEventListener('resize', calculateItemOffsets);
  
  // 添加下载按钮点击事件监听
  document.addEventListener('click', (e) => {
    if (e.target.closest('.download-btn')) {
      downloadExtension();
    }
  });
});

// 组件卸载前移除事件监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateItemOffsets);
  document.removeEventListener('click', (e) => {
    if (e.target.closest('.download-btn')) {
      downloadExtension();
    }
  });
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  // 移除视频结束事件监听
  if (currentVideoRef.value) {
    currentVideoRef.value.removeEventListener('ended', handleVideoEnded);
  }
});

// 滚动节流变量
let isScrolling = false;
let scrollTimeout = null;
const scrollThreshold = 500; // 滚动阈值，单位毫秒

// 处理滚轮事件
const handleWheel = (event) => {
  // 如果正在滚动中，则忽略此次滚动事件
  if (isScrolling) return;

  // 设置滚动阈值，防止过于灵敏
  if (Math.abs(event.deltaY) < 20) return;

  isScrolling = true;

  // 向下滚动，显示下一项
  if (event.deltaY > 0 && currentIndex.value < documentItems.value.length - 1) {
    currentIndex.value++;
  }
  // 向上滚动，显示上一项
  else if (event.deltaY < 0 && currentIndex.value > 0) {
    currentIndex.value--;
  }

  // 设置滚动冷却时间
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isScrolling = false;
  }, scrollThreshold);
};

// 计算每个项目的样式
const getItemStyle = (index) => {
  const distance = index - currentIndex.value;
  // 增加未聚焦元素的模糊度和透明度
  const opacity = distance === 0 ? 1 : 0.5; // 降低未聚焦项的透明度
  // 增加模糊效果，非聚焦项更模糊
  const blur = distance === 0 ? 'none' : `blur(${Math.min(Math.abs(distance) * 0.3, 1)}rem)`; // 增加模糊程度

  return {
    opacity: opacity,
    filter: blur,
    cursor: index !== currentIndex.value ? 'pointer' : 'default'
  };
};

// 处理视频引用
const setVideoRef = (el) => {
  if (el) {
    currentVideoRef.value = el;
    // 添加视频结束事件监听
    el.addEventListener('ended', handleVideoEnded);
  }
};

// 视频结束后的处理函数
const handleVideoEnded = () => {
  // 视频结束后显示控件
  if (currentVideoRef.value) {
    // 添加类以显示控件
    currentVideoRef.value.classList.add('show-controls');
  }
};

// 预加载图片函数
const preloadImage = (src) => {
  if (src && typeof window !== 'undefined' && src.startsWith('/')) {
    const img = new Image();
    img.src = src;
  }
};

// 预加载所有图片
documentItems.value.forEach(item => {
  if (item.mediaType === 'image' && item.mediaSrc) {
    preloadImage(item.mediaSrc);
  }
});
</script>

<template>
  <Hander></Hander>

  <!-- 使用Tailwind CSS实现全屏固定布局 -->
  <div class="fixed inset-0 pt-16 bg-gray-100 overflow-hidden">
    <!-- 主内容区域 - 占满剩余空间 -->
    <div class="w-full h-full p-4 md:p-8">
      <!-- 彩色卡片 - 左右布局 -->
      <div
        class="w-full h-full rounded-3xl overflow-hidden flex flex-col-reverse md:flex-row shadow-lg gradient-bg relative"
        @wheel="handleWheel">
        <!-- 噪点效果 -->
        <div class="noise-effect"></div>

        <!-- 光晕效果 -->
        <div class="glow-effect"></div>

        <!-- 边框光晕 -->
        <div class="border-glow"></div>

        <!-- 左侧内容区域 - 平滑滚动显示多条内容 -->
        <div class="w-full md:w-4/6 flex z-10 px-4 md:px-10 relative">
          <!-- 内容容器 - 使用相对单位 -->
          <div ref="contentContainer" class="w-full p-6 relative overflow-hidden">
            <div class="content-items-container py-2 md:py-3" :style="contentTransformStyle">
              <!-- 所有内容项目 -->
              <div v-for="(item, index) in documentItems" :key="item.id"
                class="content-item mb-10 transition-all duration-500 ease-out" :style="getItemStyle(index)"
                @click="index !== currentIndex ? currentIndex = index : null"
                :ref="el => { if (index === currentIndex) currentItemRef = el }">
                <div v-html="item.content" class="mobile-text"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧媒体展示区域 -->
        <div class="w-full h-[40vh] md:h-full relative z-10">
          <!-- 媒体容器 -->
          <div class="absolute inset-0 flex items-center justify-center p-2 md:p-10">
            <transition name="fade" mode="out-in">
              <template v-if="currentItem.mediaType === 'image' && currentItem.mediaSrc">
                <img :key="'img-' + currentItem.id" :src="currentItem.mediaSrc" :alt="currentItem.altText"
                  class="max-w-full max-h-full object-contain select-none rounded-xl" loading="lazy"
                  fetchpriority="high" decoding="async" referrerpolicy="no-referrer" crossorigin="anonymous" />
              </template>
              <template v-else-if="currentItem.mediaType === 'video' && currentItem.mediaSrc">
                <video 
                  :key="'video-' + currentItem.id" 
                  :src="currentItem.mediaSrc" 
                  autoplay 
                  controls
                  controlslist="nodownload nofullscreen"
                  muted
                  playsinline
                  ref="setVideoRef"
                  class="max-w-full max-h-full object-contain select-none rounded-xl video-player" 
                  preload="auto"
                ></video>
              </template>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 渐变背景 - 与GradientShowcase.vue完全一致 */
.gradient-bg {
  background:
    radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.6) 0%, transparent 55%),
    radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 25% 65%, rgba(78, 70, 229, 0.439) 0%, transparent 50%),
    linear-gradient(135deg, #0d1423 0%, #1e293b 30%, #334155 100%);
  position: relative;
  overflow: hidden;
}

/* 光晕效果 */
.glow-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

/* 边框光晕 */
.border-glow {
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 0.125rem;
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
  z-index: 20;
}

/* 内容容器样式 */
.content-items-container {
  width: 100%;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 内容项目样式 */
.content-item {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 当前聚焦项的特殊过渡效果 */
.content-item[style*="filter: none"] {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 淡入淡出过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 视频播放器控件样式 - 只在悬停时显示或视频结束后显示 */
.video-player::-webkit-media-controls {
  opacity: 0;
  transition: opacity 0.3s;
}

.video-player:hover::-webkit-media-controls,
.video-player.show-controls::-webkit-media-controls {
  opacity: 1;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .mobile-text h2 {
    font-size: 1.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  .mobile-text p {
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
  }

  .content-item {
    margin-bottom: 1rem !important;
  }
}
</style>