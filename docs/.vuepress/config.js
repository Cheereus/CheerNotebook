module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '每一天都是新的练习',
    description: '用明天换走失去的',
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
                '',
                '2020-07-30'
            ],
            '/Java/': [
                '',
                '2020-05-21',
                '2020-05-22',
                '2020-05-24',
            ],
            '/Python/': [
                '',
                '2020-04-11',
                '2020-04-18',
            ],
            '/NLP/': [
                '',
                '2021-01-22',
                '2021-01-31',
            ],
            '/reports/': [
                '',
                '2021-02-01'
            ]
        },
        sidebarDepth: 5,
        nav: [
            { text: '首页', link: '/' },
            { text: '简历', link: '/resume/' },
            { text: 'Python', link: '/Python/' },
            { text: 'Hadoop', link: '/Java/' },
            { text: '统计学习方法', link: '/SLM/' },
            { text: '自然语言处理', link: '/NLP/' },
            { text: 'Github', link: 'https://github.com/Cheereus' },
        ]
    },

}