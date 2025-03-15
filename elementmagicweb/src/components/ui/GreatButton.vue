<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转到Documents页面
const navigateToDocuments = () => {
  router.push('/documents');
};
</script>

<template>
    <!-- 跳转按钮 -->
    <button class="codecard-jump-button" @click="navigateToDocuments">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"
            class="animate-pulse icon" title="元素魔法">
            <path
                d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"
                fill="white"></path>
        </svg>
        <span class="text">开始</span>
    </button>
</template>

<style scoped>
/* 跳转按钮 - 艺术效果 */
.codecard-jump-button {
    width: 7.25rem;
    height: 2.75rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    background-color: rgb(26, 115, 232);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.icon {
    position: relative;
    z-index: 2;
    color: white;
    width: 1.125rem;
    height: 1.125rem;
    transition: transform 0.3s ease;
}

.text {
    position: absolute;
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
}

.codecard-jump-button:hover {
    justify-content: flex-start;
    padding-left: 2.5rem;
}

.codecard-jump-button:hover .icon {
    transform: translateX(-1rem);
}

.codecard-jump-button:hover .text {
    opacity: 1;
}

.codecard-jump-button::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 5%, transparent 6%),
        radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.25) 3%, transparent 4%),
        radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.2) 4%, transparent 5%),
        radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.25) 3%, transparent 4%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 5%, transparent 6%);
    background-size: 150% 150%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.codecard-jump-button:hover::before {
    opacity: 1;
    animation: moveParticles 2s linear infinite;
}

.codecard-jump-button::after {
    content: '';
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    background: conic-gradient(from 0deg at 50% 50%,
            #ffffff 0%,
            #67e8f9 20%,
            #22d3ee 40%,
            #0ea5e9 60%,
            #3b82f6 80%,
            #ffffff 100%);
    filter: blur(1.25rem);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: rotate 4s linear infinite;
}

.codecard-jump-button:hover::after {
    opacity: 1;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes moveParticles {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 100% 100%;
    }
}

/* 添加动画效果 */
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}
</style>