import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      { text: '关于本服', link: '/about' }
    ],

    sidebar: [
      {
        items: [
          { text: '关于本服', link: '/about' },
          { text: '加入本服', link: '/join' },
          { text: '服务器人员档案', link: '/players' },
          { text: '最终用户协议', link: '/EULA' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/1aQna5t2CA' }
    ]
  }
})