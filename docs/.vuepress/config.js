module.exports = {
    evergreen: true,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '每一天都是新的练习',
            description: 'a blog powered by vuepress'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/meta/favicon.ico'}]
    ],
    theme: require.resolve('../../'),
    themeConfig: {
        sidebar: [
            '/post/'
        ],
        sidebarDepth: 4,
        domain: 'http://localhost/ ',
        notice: [
            {
                text: 'vuepress 博客主题开源地址',
                url: 'https://github.com/cadecode/vuepress-theme-2zh'
            },
            {
                text: 'vuepress 官方文档',
                url: 'https://www.vuepress.cn/'
            },
            {
                text: 'vue 官方文档',
                url: 'https://cn.vuejs.org/v2/guide/'
            }
        ],
        links: [
            {text: 'Github', url: 'https://github.com'},
        ],
        // comment: ['Your own appId', 'Your own appKey']
        comment: ['vXo2Gd4MBJRYWdM0rBpfUl5A-gzGzoHsz', 'sUn0budFdojUMbAjoFMBvWgp']
    }
}
