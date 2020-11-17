/**
 * 每个页面的webpack 打包配置路由
 */
const htmlArrs = [
  {
    _html: 'index',
    title: '首页',
    chunks: ['index']
  },
  {
    _html: 'downApp',
    title: '下载',
    chunks: ['downApp']
  }
]

module.exports = htmlArrs
