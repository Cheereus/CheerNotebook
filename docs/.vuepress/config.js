module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '每一天都是新的练习',
    description: 'Just playing around!',
    themeConfig: {
        sidebar: [
            ['/fanwei/', '感知机'],
        ],
        sidebarDepth: 5,
        nav: [
            { text: '首页', link: '/' },
            { text: '单细胞聚类', link: '/fanwei/' },
            { text: 'Github', link: 'https://github.com/Cheereus/WIT-Xinxi-Lab' },
        ]
    },

}