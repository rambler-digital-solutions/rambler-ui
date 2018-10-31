import components from /* preval */ './lib/component-list'

export default [
  {
    title: 'Компоненты',
    path: '/components',
    children: components
  },
  {
    title: 'Как использовать',
    path: '/usage',
    children: [
      {
        title: 'Установка',
        path: '/usage/install'
      },
      {
        title: 'Разработка',
        path: '/usage/contribute'
      }
    ]
  }
]
