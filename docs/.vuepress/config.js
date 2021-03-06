module.exports = {
    title: 'DokiMod',
    description: '为 Mod 创作赋能。',
    plugins: {
      "vuepress-plugin-auto-sidebar": {
        titleMap: {
          "moddev": "Mod 开发",
          "player": "玩家指引",
          "mods": "精选 Mod",
          "releases": "版本更新历史",
          "extensions": "素材 / 补丁插件"
        }
      },
    },
    theme: "antdocs",
    head: [
      ['meta', { name: 'theme-color', content: '#fa4694' }],
      ['link', { rel: 'icon', href: '/logo_128x128.png' }],
      ['meta', { name: 'keywords', content: 'ddlc,ddlc mod,ddlcmod,doki doki literature club,doki doki literature club mods,dokimod,文学部,文学部mod,游戏mod开发,心跳文学部,心跳文学部mod,mod开发' }]
    ],
    base: "/",
    themeConfig: {
      docsRepo: 'imgradeone/DDMTCN-Docs',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      smoothScroll: true,
      editLinkText: '前往 GitHub 编辑此页面',
      lastUpdated: '上次更新于',
      logo: '/logo_128x128.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '玩家指引', link: '/player/' },
        { text: '开发者', link: '/moddev/' },
        { text: 'IP Guidelines', link: '/ipguidelines' },
        { text: '更新历史', link: '/releases/' },
        { text: '插件', link: '/extensions/' },
        { text: '赞助', link: '/donate' },
        { text: '下载',
          items: [
            { text: '中文 Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplate-Chinese/releases' },
            { text: 'DDLC Mod', link: '/mods/' },
            { text: 'DDLC 游戏本体', link: 'https://ddlc.moe/' }
          ]
        },
        {
          text: 'GitHub',
          items: [
            { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplate-Chinese' },
            { text: '文档', link: 'https://github.com/imgradeone/DDMTCN-Docs' }
          ]
        }
      ],
    }
    
  }