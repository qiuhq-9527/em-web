<script setup>
import LogoIcon from '@/components/icon/LogoIcon.vue';
import { downloadExtension } from '@/utils/download.js';
import { ref } from 'vue';
// 移除 useRoute 导入，不再需要
// import { useRoute } from 'vue-router';

// 移除路由信息获取
// const route = useRoute();

// 导航链接数据
const navLinks = [
  { name: '首页', path: '/', isExternal: false },
  { name: '操作指南', path: '/documents', isExternal: false },
  { name: '关于项目', path: '/roadmap', isExternal: false }
];

// 处理下载扩展按钮点击事件
const handleDownload = () => {
  downloadExtension();
};

// 控制移动端菜单的显示状态
const isMobileMenuOpen = ref(false);

// 切换移动端菜单的显示状态
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
    <header class="px-3 py-2.5 md:px-5 md:py-3.5 flex items-center fixed top-0 left-0 w-full z-30 bg-gray-100/85 backdrop-blur-sm">
        <div class="flex items-center w-full justify-between max-w-7xl mx-auto">
            <div class="flex items-center gap-1.5 md:gap-2.5">
                <!-- 项目图标和名称的包裹元素 -->
                <div id="logo-link" class="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                    <!-- 项目图标 -->
                    <LogoIcon width="24" height="24" class="md:w-7 md:h-7" />
                    <!-- 项目名称 -->
                    <a href="#" target="_blank"
                        class="font-bold text-base md:text-lg text-gray-800 no-underline">ElementMagic</a>
                </div>

                <!-- Beta标识 -->
                <span class="inline-block py-0.5 px-2 text-[0.5rem] font-medium rounded-full bg-[#bdbdbd] text-white uppercase tracking-wider">Beta</span>                
                <!-- 导航链接 - 在中等屏幕及以上显示 -->
                <nav class="hidden md:flex items-center space-x-5 md:space-x-7 ml-4 md:ml-6 text-xs md:text-sm text-gray-600">
                    <!-- 使用数组渲染导航链接 -->
                    <div v-for="(link, index) in navLinks" :key="index" class="relative">
                        <router-link v-if="!link.isExternal" :to="link.path" class="font-medium">{{ link.name }}</router-link>
                        <a v-else :href="link.path" target="_blank" class="font-medium">{{ link.name }}</a>
                    </div>
                </nav>
            </div>

            <!-- 下载按钮 - 仅在中等屏幕及以上显示 -->
            <div class="hidden md:flex items-center gap-2 md:gap-3">
                <button 
                    class="border border-gray-300 text-gray-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer text-[0.65rem] md:text-xs transition-all duration-200 h-7 md:h-8 flex items-center hover:bg-gray-100 hover:text-gray-800"
                    @click="handleDownload"
                >
                    下载扩展
                </button>
            </div>

            <!-- 汉堡菜单按钮 - 在小屏幕显示 -->
            <button 
                class="md:hidden flex items-center justify-center w-8 h-8 text-gray-600 focus:outline-none"
                @click="toggleMobileMenu"
                aria-label="菜单"
            >
                <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </header>

    <!-- 移动端菜单 - 在小屏幕且菜单打开时显示 -->
    <div 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click="closeMobileMenu"
    ></div>
    
    <div 
        class="fixed top-0 left-0 right-0 bg-gray-100 backdrop-blur-sm z-20 md:hidden transform transition-transform duration-300 ease-in-out rounded-b-2xl shadow-lg"
        :class="isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0'"
        style="max-height: calc(100vh - 3.5rem); overflow-y: auto;"
    >
        <nav class="flex flex-col mt-[3.5rem] p-6 space-y-4">
            <div v-for="(link, index) in navLinks" :key="index" class="py-2">
                <router-link 
                    v-if="!link.isExternal" 
                    :to="link.path" 
                    class="text-gray-700 font-medium text-base block"
                    @click="closeMobileMenu"
                >
                    {{ link.name }}
                </router-link>
                <a 
                    v-else 
                    :href="link.path" 
                    target="_blank" 
                    class="text-gray-700 font-medium text-base block"
                    @click="closeMobileMenu"
                >
                    {{ link.name }}
                </a>
            </div>
        </nav>
    </div>
</template>

<style scoped>
/* 添加过渡效果 */
.transition-opacity {
    transition-property: opacity;
}

.transition-transform {
    transition-property: transform;
}

.duration-300 {
    transition-duration: 300ms;
}

.ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>