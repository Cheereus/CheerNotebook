module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '陈十一的博客',
    description: '每一天都是新的练习',
    themeConfig: {
        sidebar: {
            '/SLM/': [
                '',
                '2020-01-16',
                '2020-01-17',
                '2020-01-18',
                '2020-01-20',
                '2020-01-27',
                '2020-01-28',
                '2020-02-12',
                '2020-02-16',
                '2020-02-19',
                '2020-02-24',
            ],
            '/resume/': [
                ''
            ]
        },
        sidebarDepth: 5,
        nav: [
            { text: '首页', link: '/' },
            { text: '简历', link: '/resume/' },
            { text: '统计学习方法', link: '/SLM/' },
            { text: 'Github', link: 'https://github.com/Cheereus' },
        ]
    },

}