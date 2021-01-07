module.exports = {
    base:'/Cherry-UI/',
    title: 'Cherry-UI',
    description: '一个简约、易用的 UI 组件库方案',
    themeConfig: {
      nav: [
        {text: '主页', link: '/'},
        {text: 'Github', link: 'https://github.com/cherry0tree/cherry-UI'},
      ],
      displayAllHeaders: true, // 默认值：false
      sidebar: [
        {
          title: '组件',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            '/components/button',
            '/components/tabs',
            '/components/input',
            '/components/grid',
            '/components/layout',
            '/components/toast',
            '/components/collapse',
            '/components/popover',
          ]
        },
  
      ]
    }
  }