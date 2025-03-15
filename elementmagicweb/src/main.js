import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 注册Service Worker
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker 注册成功:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker 注册失败:', error);
      });
  });
}

// 预加载GIF图片
const preloadGifs = () => {
  const gifs = [
    '/animations/elementmagic-1.gif',
    '/animations/elementmagic-2.gif',
    '/animations/elementmagic-3.gif'
  ];
  
  gifs.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// 页面加载完成后预加载GIF
window.addEventListener('load', preloadGifs);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
