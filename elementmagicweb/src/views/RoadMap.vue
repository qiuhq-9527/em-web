<script setup>
// RoadMap.vue - ElementMagic项目关于项目页面
import { ref } from 'vue';

// 定义FAQ数据数组
const faqs = [
  {
    question: `ElementMagic与cursor、bolt、v0...的区别是什么？`,
    answer: `EM走的是与现有AI编码工具不同的赛道！EM不会试图解决所有编程问题，只会专注于前端页面或元素的精准复刻。EM将努力在前端样式领域做到更专业更精确。`
  },
  {
    question: `ElementMagic与设计工具如Figma/Webflow有何不同？`,
    answer: `EM专注于从现有网页"逆向工程"的特定场景。如果你需要分析竞品、学习优秀实现或快速搭建原型，ElementMagic是更直接的解决方案：直接从真实代码开始，而不是从设计稿开始。`
  },
  {
    question: `ElementMagic有什么独特优势？`,
    answer: `我认为EM的魅力在于操作简单与提示词简化，构建复杂组件或页面时，您不需要绞尽脑汁描述你的需求，只需标记想要模仿的元素或页面即可，通常三步以内就能完成。简洁与去提示词化是EM的核心特色！`
  },
  {
    question: `现在能复制整个电商网站吗？`,
    answer: `暂时还不能，目前版本基本可以完美复刻单个页面的结构和样式。下一步是添加交互逻辑与功能，一次性复刻整个网站是EM的终极目标。`
  },
  {
    question: `如何处理交互样式或动态加载的内容？`,
    answer: `当前版本在静态页面上表现最佳，交互样式和动态加载等等需求会在迭代中陆续实现。`
  },
  {
    question: `ElementMagic支持哪些浏览器?`,
    answer: `EM主要在Chrome和Edge环境下进行开发和测试，所以这两款浏览器的体验最佳。理论上，所有基于Chrome内核的浏览器都能流畅使用EM。`
  },
];

// 跟踪当前展开的FAQ索引，-1表示都不展开
const expandedIndex = ref(-1);

// 切换FAQ的展开/收起状态
const toggleFaq = (index) => {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
};
</script>

<template>
  <div class="bg-[#0f1117] text-[#e6e6e6] font-serif min-h-screen flex flex-col custom-scrollbar">
    <!-- 顶部宇宙背景图和人物剪影 -->
    <div class="relative flex items-center justify-center overflow-hidden h-[80vh] min-h-[500px] bg-gradient-to-b from-[#0f1117] via-[#1a1f2c] to-[#0f1117]">
      <div class="absolute w-full h-full opacity-90">
        <div class="silhouette-container">
          <div class="planets-container">
            <!-- 行星和恒星效果 -->
          </div>
        </div>
      </div>
      <div class="z-10 max-w-[90%] text-center">
        <h1 class="text-[3.5rem] font-bold text-white shadow-text mb-6 tracking-wide">ElementMagic</h1>
      </div>
    </div>

    <!-- 主要内容区域 - 改为更像个人信件的风格 -->
    <div class="max-w-[800px] mx-auto px-8 py-16 leading-loose relative">
      <!-- 添加渐变遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#0f1117] via-[#0f1117] to-transparent pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="mb-16">
          <h2 class="text-2xl font-medium mb-8 text-white text-center tracking-wide">把网页元素转化为实用的代码，就像截图一样简单</h2>
          
          <div class="mb-12 text-right text-[#a0aec0] italic">
            写给每一位热爱创造的朋友
          </div>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            亲爱的读者（开发者）朋友，当我开始构思ElementMagic这个项目时，我脑海中浮现的是我们之前相似的经历：那些为了复刻一个页面或组件而熬过夜，那些在控制台中来回切换查找样式的疲累，那些因为技术细节而逐渐磨灭的创造激情。
          </p>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            我想和你分享一个故事。去年夏天，我在开发属于我的第一个AI项目。当时智谱清言的对话页面与主题卡片非常吸引我，我花了整整一天的时间来复刻它们——拆解DOM结构，分析CSS样式，来回反复调试... 这个过程非常痛苦，我当时甚至憋出：干脆直接截一张图片"装作"是一个组件的念头...当终于完成时，我问自己："为什么这个过程如此繁琐？为什么不能像截一张图一样简单地得到这些元素？"
          </p>

          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            这就是ElementMagic诞生的契机。我希望创造一个工具，让我们能够像使用截图工具一样轻松地获取网页元素，并将其转化为可用的代码。不需要繁琐的提示词，不需要在浏览器控制台与开发工具中来回切换，只需简单几步：选择元素、提取元素、转换成组件。
          </p>
          
          <div class="my-12 border-l-4 border-[#64b5f6] pl-6 py-2 italic text-[#e6e6e6]/80">
            "AI时代，我们不应该被繁琐的技术细节所束缚，而应该专注于创造性的工作。"
          </div>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            与现有的主流AI编码工具不同，ElementMagic走的是一条专注于复刻前端组件/页面样式的路线，EM不会试图解决所有编程问题，而是专注于做好一件事：让网页页面或元素的复刻变得简单而精确。这种专注让EM能够深入理解样式结构和设计意图，确保转换后的组件保持原始设计的视觉完整性。
          </p>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            你是否曾经为了描述一个复杂的样式而绞尽脑汁？现在你不需要复杂的提示词了，ElementMagic将直接从元素源码中学习，无需编写长篇幅的描述。只需要标记你想要模仿复刻的元素，样式算法和AI会处理剩下的工作。这种去提示词化的方法是EM研发的重心，也将是未来AIcoding的趋势。
          </p>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            ElementMagic到现在为止是我一个人在学习和工作之余完成的。我真的太了解独立开发对于时间和精力的挑战。所以对于繁琐的样式和交互，最佳选择就是交给AI来完成，而EM的作用就是帮你省去对样式或交互的描述，依旧得到不错的效果。目前，EM已经能够处理大多数主流技术和框架构建的网站：如关键样式区分、智能合并CSS类定义、保留交互状态、保留自适应...
          </p>
          
          <p class="mb-8 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            展望未来，我有更大的梦想。我希望开发整站复刻引擎，做到能一键复刻完整网站前端项目：不仅复刻外观（可选），还能识别并转换基础的交互逻辑，甚至连同功能也一并完成；最后实现一键复刻完整的前端工程...这些梦想需要时间和努力，但我相信，只要坚持初心，一定能够实现。
          </p>
          
          <p class="mb-12 text-base font-normal text-[#e6e6e6]/90 leading-8 indent-8">
            无论你是前端新手还是经验丰富的开发者，我希望ElementMagic能为你节省时间、提供灵感。我邀请你加入这个旅程，一起探索前端开发的新可能。让我们一起，让前端开发变得像截图一样简单！
          </p>
          
          <div class="text-right mb-16">
            <p class="italic text-[#a0aec0] font-normal">
              真诚的，<br>
              ElementMagic 开发者
            </p>
          </div>

          <div class="h-px bg-white/10 my-12"></div>
        </div>
        
        <!-- 常见问题解答区域 - 保留但简化样式 -->
        <div class="mb-16">
          <h2 class="text-xl font-medium mb-8 text-white">你可能想问的问题</h2>
          
          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="border-b border-white/10 pb-2 overflow-hidden"
            >
              <!-- 问题标题 -->
              <div 
                @click="toggleFaq(index)"
                class="flex justify-between items-center py-4 cursor-pointer"
              >
                <h3 class="text-lg font-normal">{{ faq.question }}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 transition-transform duration-300 text-[#64b5f6]" 
                  :class="expandedIndex === index ? 'rotate-180' : ''"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <!-- 回答内容 -->
              <div 
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :class="expandedIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'"
              >
                <div class="py-4">
                  <p class="text-[#a0aec0] font-normal leading-7 pl-4 border-l-2 border-[#64b5f6]/30">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 mb-10">
          <p class="text-[#a0aec0] font-normal">
            期待与你一起创造更快更好的前端开发体验
          </p>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="mt-auto p-8 pt-10 border-t border-gray-500">
      <div class="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <!-- <div class="font-bold text-lg order-1">ElementMagic</div> -->
        <div class="flex gap-6 order-2 py-4 sm:py-0">
          <router-link to="/" class="text-[#a0aec0] no-underline hover:text-white transition-colors duration-200 px-3 py-2">首页</router-link>
          <router-link to="/documents" class="text-[#a0aec0] no-underline hover:text-white transition-colors duration-200 px-3 py-2">文档</router-link>
        </div>
        <div class="text-[#718096] text-sm order-3">© 2025 ElementMagic</div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 保留图片相关的样式，因为这些不适合用Tailwind重写 */
.silhouette-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 35%, rgba(130, 130, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 75% 44%, rgba(255, 210, 161, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 40% 60%, rgba(130, 238, 255, 0.1) 0%, transparent 40%),
    linear-gradient(180deg, #0f1117 0%, #1a1f2c 100%);
  background-size: cover;
  background-position: center;
  opacity: 0.9;
}

/* 添加人物剪影效果 */
.silhouette-container::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 30%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path d="M600,350 C600,350 500,300 400,350 C300,400 200,380 100,350 C0,320 0,300 0,300 L0,400 L1200,400 L1200,300 C1200,300 1100,320 1000,350 C900,380 800,400 700,350 C650,320 600,350 600,350 Z" fill="%230f1117"/></svg>');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: 5;
}

.silhouette-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, #0f1117, transparent);
  z-index: 4;
}

/* 添加星星效果 */
.planets-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(1px 1px at 25% 15%, white, transparent),
    radial-gradient(1px 1px at 50% 40%, white, transparent),
    radial-gradient(2px 2px at 15% 55%, white, transparent),
    radial-gradient(1px 1px at 60% 70%, white, transparent),
    radial-gradient(1.5px 1.5px at 70% 10%, white, transparent),
    radial-gradient(1px 1px at 85% 30%, white, transparent),
    radial-gradient(1.5px 1.5px at 10% 20%, white, transparent),
    radial-gradient(1px 1px at 35% 85%, white, transparent);
  opacity: 0.6;
}

/* 添加行星效果 */
.planets-container::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, rgba(255, 236, 210, 0.8) 0%, rgba(252, 182, 159, 0.6) 50%, transparent 100%);
  top: 20%;
  left: 65%;
  filter: blur(5px);
  z-index: 2;
  box-shadow: 0 0 40px rgba(255, 210, 161, 0.4);
}

.planets-container::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, rgba(161, 210, 255, 0.8) 0%, rgba(159, 182, 252, 0.6) 50%, transparent 100%);
  top: 35%;
  left: 25%;
  filter: blur(3px);
  z-index: 2;
  box-shadow: 0 0 30px rgba(161, 210, 255, 0.4);
}

.shadow-text {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

/* 添加宋体字体 */
.font-serif {
  font-family: 'Noto Serif SC', 'SimSun', 'STSong', serif;
}

/* 自定义滚动条样式 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border: 2px solid transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .shadow-text {
    font-size: 2.5rem;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
}

@media (max-width: 480px) {
  .shadow-text {
    font-size: 2rem;
  }
}
</style>
