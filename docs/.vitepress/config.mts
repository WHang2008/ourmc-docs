import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "ourmc 服务器",
  description: "探索无边，方块筑梦",

  // 将 AdSense 验证脚本注入到 HTML 的 <head> 中
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5811273402921349',
        crossorigin: 'anonymous'
      }
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '关于本服', link: '/about' },
      { text: '加入本服', link: '/join' },
      { text: '法律信息', link: '/EULA'}
    ],

    sidebar: [
      {
        text: '关于本服',
        link: '/about',
        items: [
          { text: '服务器神人档案', link: '/players' }
        ]
      },
      {
        text: '加入本服',
        link: '/join',
        items: [
        ]
      },
      {
        text: '法律信息',
        items: [
          { text: '最终用户协议', link: '/EULA' }
        ]
      },
    ],

    outline: {
      label: '在此页面上'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/1aQna5t2CA' }
    ]
  }
})