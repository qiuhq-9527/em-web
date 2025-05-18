/**
 * 下载扩展压缩包文件
 * @description 触发浏览器下载指定路径的文件
 */
export const downloadExtension = () => {
  // 压缩包文件路径
  const fileUrl = '/ElementMagic-Beta-0.0.1.zip';
  
  // 创建一个隐藏的a标签
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'ElementMagic-Beta-0.0.1.zip';
  link.target = '_blank';
  
  // 添加到文档中并触发点击
  document.body.appendChild(link);
  link.click();
  
  // 清理DOM
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
}; 