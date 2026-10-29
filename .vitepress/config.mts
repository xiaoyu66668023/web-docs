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
        ]
      },
      {
        text: 'go语言学习',
        items: [
          { text: '类型', link: '/go/type' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
