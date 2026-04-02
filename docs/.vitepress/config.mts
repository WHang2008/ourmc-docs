import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "ourmc 服务器",
  description: "探索无边，方块筑梦",

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
      { text: '指南', link: '/guide/what' },
      { text: 'EULA', link: '/EULA' },
    ],

    sidebar: {
      '/guide/': [
      {
        text: '简介',
        items: [
          { text: '什么是ourmc', link: '/guide/what' },
          { text: '快速加入', link: '/guide/join' },
        ]
      },
      {
        text: '了解更多',
        items: [
          { text: '服务器人物档案', link: '/guide/players' }
        ]
      }
    ]
  },

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