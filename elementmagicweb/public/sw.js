// Service Worker版本，用于更新缓存
const CACHE_VERSION = 'v1';
const CACHE_NAME = `elementmagic-${CACHE_VERSION}`;

// 需要缓存的资源列表
const CACHE_URLS = [
  '/',
  '/index.html',
  '/animations/elementmagic-1.gif',
  '/animations/elementmagic-2.gif',
  '/animations/elementmagic-3.gif'
];

// 安装Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: 缓存已打开');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        // 强制激活Service Worker
        return self.skipWaiting();
      })
  );
});

// 激活Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // 删除旧版本缓存
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 删除旧缓存', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // 接管所有客户端
      return self.clients.claim();
    })
  );
});

// 处理资源请求
self.addEventListener('fetch', (event) => {
  // 只处理GET请求
  if (event.request.method !== 'GET') return;
  
  // 获取请求URL
  const url = new URL(event.request.url);
  
  // 特殊处理GIF文件
  if (url.pathname.endsWith('.gif') && url.pathname.includes('/animations/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // 如果缓存中有响应，直接返回
        if (response) {
          console.log('Service Worker: 从缓存返回GIF', url.pathname);
          return response;
        }
        
        // 否则从网络获取
        return fetch(event.request).then((networkResponse) => {
          // 检查响应是否有效
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          
          // 克隆响应（因为响应流只能使用一次）
          const responseToCache = networkResponse.clone();
          
          // 将响应添加到缓存
          caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: 缓存GIF', url.pathname);
            cache.put(event.request, responseToCache);
          });
          
          return networkResponse;
        });
      })
    );
  } else {
    // 对于其他资源，使用网络优先策略
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // 如果网络请求失败，尝试从缓存获取
          return caches.match(event.request);
        })
    );
  }
}); 