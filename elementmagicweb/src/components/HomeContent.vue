<script setup>
import GreatButton from '@/components/ui/GreatButton.vue';
import FeatureCard from '@/components/ui/FeatureCard.vue';
import GradientShowcase from '@/components/ui/GradientShowcase.vue';
import { ref } from 'vue';

// 导入技术栈图标
import ReactIcon from '@/components/icon/ReactIcon.vue';
import NextjsIcon from '@/components/icon/NextjsIcon.vue';
import VueIcon from '@/components/icon/VueIcon.vue';
import ViteIcon from '@/components/icon/ViteIcon.vue';
import TailwindIcon from '@/components/icon/TailwindIcon.vue';
import AngularIcon from '@/components/icon/AgularIcon.vue';
import BootstrapIcon from '@/components/icon/BootstrapIcon.vue';

// 控制极光效果的显示状态
const showAurora = ref(false);

// 技术栈数据
const techStacks = [
    { name: 'Vue', icon: VueIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Vite', icon: ViteIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'Angular', icon: AngularIcon },
    { name: 'Bootstrap', icon: BootstrapIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon }
];



// 产品特点数据
const productFeatures = [
    {
        title: '极简操作 快速实现',
        description: 'Powered by a mix of purpose-built and frontier models, Cursor is smart and fast.',
        icon: '/frontier-intelligence.png'
    },
    {
        title: 'Feels Familiar',
        description: 'Import all your extensions, themes, and keybindings in one click.',
        icon: '/feels-familiar.png'
    },
    {
        title: 'Privacy Options',
        description: 'If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified.',
        icon: '/privacy-options.png'
    }
];

// 展示案例数据
const showcaseItems = [
    {
        title: 'Alt+Enter',
        description: '使用ElementMagic扩展标记目标元素，精确复制您需要的结构与样式',
        image: '/animations/elementmagic-1.gif'
    },
    {
        title: '在线渲染 立刻预览',
        description: '使用Magicbot在线快速查看与调试样式效果，所见即所得',
        image: '/animations/elementmagic-2.gif'
    },
    {
        title: '自然语言调整',
        description: '无需编写代码也能调整样式，优秀设计轻松落地',
        image: '/animations/elementmagic-3.gif'
    }
];

</script>

<template>
    <div class="bg-gray-100 text-gray-900 pt-[9rem]  flex flex-col items-center">

        <!-- 主标题 -->
        <div class="text-center max-w-5xl mx-auto px-4 mt-6 md:mt-10">
            <h1 class="text-4xl md:text-[5.5rem] font-extrabold mb-4 md:mb-6 text-gray-800 tracking-tight leading-none">
                The Online AICoding Tool
            </h1>

            <!-- 副标题 -->
            <p class="text-gray-500 opacity-90 text-lg font-light tracking-wider mb-8">
               快速克隆网页元素或页面，在线渲染立刻预览，自然语言实现定制化，轻松复刻任意网站
            </p>

            <!-- 按钮 -->
            <div class="flex justify-center">
                <GreatButton></GreatButton>
            </div>
        </div>

        <!-- 产品展示图容器 -->
        <div class="w-full max-w-6xl mx-auto mt-10 md:mt-12 px-4 relative mb-16">
            <!-- 产品展示容器 - 调整为浅灰色，去掉阴影 -->
            <div 
                class="relative rounded-2xl p-[0.4rem] overflow-hidden transition-all duration-500 bg-gray-200"
                @mouseenter="showAurora = true"
                @mouseleave="showAurora = false"
            >
                <!-- 极光效果 - 鼠标悬浮时显示 -->
                <div 
                    class="absolute inset-0 bg-gradient-to-r from-[#1a73e8]/20 via-[#22d3ee]/20 to-[#3b82f6]/20 opacity-0 transition-opacity duration-700 z-0"
                    :class="{ 'opacity-100': showAurora }"
                ></div>
                
                <!-- 动态极光光晕效果 - 参考GreatButton.vue的颜色 -->
                <div 
                    class="absolute -inset-1 opacity-0 blur-xl transition-all duration-700 z-0 aurora-gradient"
                    :class="{ 'opacity-40': showAurora }"
                ></div>
                
                <!-- 图片容器 -->
                <div class="relative z-10 bg-gray-50 rounded-2xl overflow-hidden">
                    <img 
                        src="/homepage.png" 
                        alt="homepage" 
                        class="w-full h-full object-cover rounded-2xl"
                    >
                </div>
            </div>

            <!-- 装饰性光效 - 调整为适合白色主题的颜色 -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-100/50 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-100/50 rounded-full blur-3xl"></div>
        </div>

        <!-- 技术栈展示区域 -->
        <div class="w-full max-w-6xl mx-auto pt-10 px-4 mb-16">
            <div class="text-center mb-8">
                <p class="text-gray-500 opacity-90 text-lg font-light tracking-wider">正在逐步集成您喜爱的框架</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div v-for="(tech, index) in techStacks" :key="index" class="flex items-center gap-2 px-4 py-3 mx-8">
                    <div class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <component 
                            :is="tech.icon" 
                            color="#6B7280"
                            secondaryColor="#9CA3AF"
                            :width="40"
                            :height="40"
                        />
                    </div>
                    <span class="text-xl md:text-xl text-gray-500 font-medium">{{ tech.name }}</span>
                </div>
            </div>
        </div>

        <!-- 渐变卡片展示区 -->
        <div class="w-full max-w-6xl px-4 pt-10 mx-auto mb-16">
            <div class="flex flex-col gap-10">
                <GradientShowcase 
                    v-for="(item, index) in showcaseItems" 
                    :key="index"
                    :content="`<h2 class='text-3xl text-gray-700 font-bold mb-3'>${item.title}</h2><p class='text-gray-500 opacity-90 text-lg font-light tracking-wider'>${item.description}</p>`"
                    mediaType="image"
                    :mediaSrc="item.image"
                    :altText="`ElementMagic ${item.title}`"
                />
            </div>
        </div>

        <!-- 产品特点部分 -->
        <div class="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-20">
                <div class="max-w-xl mb-8 md:mb-0">
                    <h2 class="text-4xl md:text-4xl font-bold text-gray-700 mb-4">全新的开发范式</h2>
                    <p class="text-gray-500 opacity-90 text-lg font-light tracking-wider">快速、智能、准确...ElementMagic将成为网站复刻的最佳选择</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <!-- 使用FeatureCard组件替换原来的卡片 -->
                <FeatureCard 
                    v-for="(feature, index) in productFeatures" 
                    :key="index"
                    :title="feature.title"
                    :description="feature.description"
                    :imageSrc="feature.icon"
                />
            </div>
        </div>

        
    </div>
</template>

<style scoped>
/* 参考GreatButton.vue的渐变色 */
.aurora-gradient {
    background: conic-gradient(
        from 0deg at 50% 50%,
        #ffffff 0%,
        #67e8f9 20%,
        #22d3ee 40%,
        #0ea5e9 60%,
        #3b82f6 80%,
        #1a73e8 100%
    );
    border-radius: 1rem;
    animation: rotate 8s linear infinite;
}

/* 现代字体设置 */
h1, h2, h3 {
    font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 添加文字阴影效果 */
h1 {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes aurora-animation {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.1);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
}

.animate-aurora {
    animation: aurora-animation 15s infinite linear;
}
</style>