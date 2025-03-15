# ElementMagic 动画资源

本目录用于存放ElementMagic网站的动画资源文件，主要是GIF格式的动画。

## 文件列表

- `elementmagic-1.gif` - Alt+Enter功能演示
- `elementmagic-2.gif` - 在线渲染预览功能演示
- `elementmagic-3.gif` - 自然语言调整功能演示

## 使用说明

1. 将GIF文件放在此目录中
2. 在`HomeContent.vue`中通过`/animations/文件名.gif`路径引用

## 缓存策略

这些GIF文件已配置为使用以下缓存策略：

1. 浏览器缓存：通过HTTP头`Cache-Control: public, max-age=604800`设置为缓存一周
2. Service Worker缓存：通过Service Worker实现离线访问和更精细的缓存控制
3. 预加载：在页面加载完成后预加载所有GIF文件，确保用户浏览时无需等待

## 优化建议

1. 尽量压缩GIF文件大小，推荐使用工具如`gifsicle`或在线服务如`ezgif.com`
2. 考虑使用WebP或AVIF格式替代GIF，以获得更好的压缩率
3. 对于较大的动画，考虑使用视频格式(MP4/WebM)替代GIF

## 注意事项

更新GIF文件时，请同时更新以下文件中的引用：

1. `src/components/HomeContent.vue`中的`showcaseItems`数组
2. `public/sw.js`中的`CACHE_URLS`数组
3. `src/main.js`中的`preloadGifs`函数 