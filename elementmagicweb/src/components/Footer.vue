<script setup>
import LogoIcon from '@/components/icon/LogoIcon.vue';
import Weixin from '@/components/icon/WeixinIcon.vue';
import Github from '@/components/icon/GithubIcon.vue';
</script>

<template>
  <footer class="w-full bg-gray-100 py-16 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- 主要内容区 -->
      <div class="flex flex-col md:flex-row justify-between items-start mb-12">
        <!-- 左侧区域 -->
        <div class="mb-8 md:mb-0">
          <h2 class="text-3rem md:text-[5rem] font-bold text-gray-700 mb-6">Try ElementMagic Now</h2>
          <button
            class="border border-gray-300 rounded-full font-medium flex items-center gap-2 px-6 py-3">
            <span class="inline-block w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </span>
            下载扩展
          </button>
        </div>

        <!-- 右侧Logo -->
        <div class="w-full md:w-auto">
          <LogoIcon width="240" height="240" />
        </div>
      </div>

      <!-- 底部声明区域 -->
      <div class="pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>© 2025 ElementMagic.</p>
        <div class="flex items-center gap-4 mt-3">
          <button class="flex items-center justify-center" onclick="weixin_modal.showModal()">
            <Weixin :width="24" :height="24" color="#4B5563" />
          </button>
          <a href="https://github.com/qiuhq-9527" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
            <Github :width="24" :height="24" color="#4B5563" />
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- 微信模态框 -->
  <dialog id="weixin_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-white p-6 rounded-lg shadow-xl">
      <h3 class="text-xl font-bold text-gray-700 mb-4">提示</h3>
      <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
        <!-- <div class="flex flex-col items-center">
          <img src="" alt="个人微信" class="w-40 h-40 object-cover mb-2">
          <p class="text-gray-600 text-sm">个人微信</p>
        </div> -->
        <div class="flex flex-col items-center justify-center h-full">
          <p class="mt-4 text-gray-500 font-thin ">谢谢你的关注，但产品仍在测试中暂未开始运营</p>
        </div>
      </div>
      <div class="modal-action mt-6">
        <form method="dialog">
          <button class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">关闭</button>
        </form>
      </div>
    </div>
  </dialog>
</template>