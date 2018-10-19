# Разработка

Склонируйте репозиторий локально и установите зависимости:

```sh
git clone git@github.com:rambler-digital-solutions/rambler-ui.git
cd ./rambler-ui
npm install
```

## Песочница

Для запуска песочницы выполните:

```sh
npm run dev
```

На определенном порту/хосте:

```sh
npm run dev -- --port 8080 --host 127.0.0.1
```

## Структура библиотеки

Каждый компонент, тесты и документация к нему располагаются соответственно следующей структуре:

```sh
docs/
  pages/
    components/
      Button/     # документация
        index.md
        example.js
src/
  Button/
    index.js        # импорты
    Button.js       # код компонента
    Button.test.js  # тесты
```

### Стили

Для стилей библиотеки используется [JSS](https://github.com/cssinjs/jss):

```js
// src/Button/Button.js
import React, { PureComponent } from 'react'
import { injectSheet } from '../theme'

@injectSheet({
  root: { // имя css-класса внутри комонента
    color: 'black'
  }
}, {name: 'Button'})
export default class Button extends PureComponent {
  render() {
    const {classes, children} = this.props

    return (
      <ul className={classes.root}>
        {children}
      </ul>
    )
  }
}
```

Более подробно про `injectSheet` описано в документации [`react-jss`](https://github.com/cssinjs/react-jss). В нашей реализации вторым аргументом в `injectSheet` передается объект с опциями, содержащий имя компонента для генерации детерминированных имен классов.

### Темизация

Библиотека позволяет темизировать компоненты путем изменеия базовых цветов и свойств отдельных компонентов, путем расширения [базовой темы](https://github.com/rambler-digital-solutions/rambler-ui/tree/master/src/theme/base/index.js). Соответственно при описании стилей компонента, необходимо базовые параметры: цвета, шрифты, размеры - выносить в тему и переиспользовать внутри:

```js
// src/Button/Button.js
import React, { PureComponent } from 'react'
import { injectSheet } from '../theme'

@injectSheet(theme => {
  root: { // имя css-класса внутри комонента
    color: theme.button.color
  }
}, {name: 'Button'})
export default class Button extends PureComponent {
  render() {
    const {classes, children} = this.props

    return (
      <ul className={classes.root}>
        {children}
      </ul>
    )
  }
}

// src/theme/base/index.js
import deepmerge from 'deepmerge'

export function createTheme(config) {
  const { colors } = config

  return deepmerge({
    fontFamily: 'Roboto, sans-serif',
    button: {
      color: 'black'
      ...
    },
    ...
  })
}
```

Более подробно о создании собственной темы можно посмотреть в [примере](https://github.com/rambler-digital-solutions/rambler-ui/tree/master/examples/theming).

### Документация

Чтобы добавить компонент в документацию, нужно добавить папку с названием компонента в документацию `docs/pages/components`. Для документации используется формат [`mdx`](https://github.com/mdx-js/mdx), который позволяет использовать `React`-компоненты внутри Markdown.

```md
<!-- docs/pages/components/Button/index.md -->
import example from '!!raw-loader!./example'
import button from '!!raw-loader!rambler-ui/Button/Button'

import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'

# Button

## Пример
<Playground code={example} />

## Свойства компонента `<Button />`
<PropTypesTable code={button} />
```

```js
// docs/pages/components/Button/example.js
import React from 'react'
import Button from 'rambler-ui/Button'
import { ApplyTheme } from 'rambler-ui/theme'

export default () => (
  <ApplyTheme>
    <Button>Кнопка</Button>
  </ApplyTheme>
)
```

## Тестирование

Для тестов используется `karma`, `jasmine` и headless `Chrome` и `Firefox` для их запуска:

```sh
npm test              # запуск тестов в Chrome
npm run test:firefox  # в Firefox
npm run test:watch    # в режиме отслеживания изменений
```

Для запуска тестов определенного компонента или компонентов:

```sh
npm test -- --component Avatar
npm test -- --component Button,Input
```

## Сборка

```sh
npm run build
```

Скомпилированые файлы кладутся в папку `./build`.

## Публикация новой версии

```sh
npm version <patch|minor|major>
```

Эта комманда обновит версию в `package.json`, поставит тег и запушит. Непосредственно публикация производится в `ci`.

## Сборка и публикация сайта

Выполните следующую комманду с указанием версий, в которые необходимо опубликовать текущую сборку:

```
npm run pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'
```
