<script setup>
import LogoIcon from '@/components/icon/LogoIcon.vue';
import { useRoute } from 'vue-router';

// 获取当前路由信息
const route = useRoute();

// 导航链接数据
const navLinks = [
  { name: '首页', path: '/', isExternal: false },
  { name: '操作指南', path: '/documents', isExternal: false },
  { name: '发展规划', path: '/roadmap', isExternal: true }
];
</script>

<template>
    <header class="px-3 py-2.5 md:px-5 md:py-3.5 flex items-center fixed top-0 left-0 w-full z-20 bg-gray-100/85 backdrop-blur-sm">
        <div class="flex items-center w-full justify-between max-w-7xl mx-auto">
            <div class="flex items-center gap-1.5 md:gap-2.5">
                <!-- 项目图标和名称的包裹元素 -->
                <div id="logo-link" class="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                    <!-- 项目图标 -->
                    <LogoIcon width="24" height="24" class="md:w-7 md:h-7" />
                    <!-- 项目名称 -->
                    <a href="#" target="_blank"
                        class="font-bold text-base md:text-lg text-current no-underline">ElementMagic</a>
                </div>

                <!-- Beta标识 -->
                <span class="inline-block py-0.5 px-2 text-[0.5rem] font-medium rounded-full bg-[#bdbdbd] text-white uppercase tracking-wider">Beta</span>                
                <!-- 导航链接 -->
                <nav class="flex items-center space-x-5 md:space-x-7 ml-4 md:ml-6 text-xs md:text-sm text-gray-600">
                    <!-- 使用数组渲染导航链接 -->
                    <div v-for="(link, index) in navLinks" :key="index" class="relative">
                        <router-link v-if="!link.isExternal" :to="link.path" class="font-medium">{{ link.name }}</router-link>
                        <a v-else :href="link.path" class="font-medium">{{ link.name }}</a>
                        <!-- 当前模块指示器 - 改为黑色/深灰色 -->
                        <div v-if="route.path === link.path" class="absolute h-0.5 w-full bg-gray-800 bottom-[-6px]"></div>
                    </div>
                </nav>
            </div>

            <div class="flex items-center gap-2 md:gap-3">
                <button class="border border-gray-300 text-gray-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer text-[0.65rem] md:text-xs transition-all duration-200 h-7 md:h-8 flex items-center hover:bg-gray-100 hover:text-gray-800">
                    下载扩展
                </button>
            </div>
        </div>
    </header>
</template>