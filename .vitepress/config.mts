import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir:"docs",
  base:"web-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    lastUpdated: {
      text: 'Last Updated',
       formatOptions: {
        localeMatcher: 'best fit',
       }
    },

    search:{
        provider: 'local',
    },

    sidebar: [
      {
        text: 'web学习',
        items: [
          { text: 'JavaScript基础学习', link: '/web/js' }, //后面记得加逗号
          { text: 'css学习', link: '/web/css' }, //不需要增加md后缀
        ]
      },
      {
        text: 'python',
        items: [
          { text: 'py基础', link: '/python/python' }, //后面记得加逗号
        ]
      },
      {
        text: 'go语言学习',
        items: [
          { text: '类型', link: '/go/type' },
          { text: '基础', link: '/go/def' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
