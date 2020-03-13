# Rambler UI

> Общие React компоненты для проектов вертикалей Рамблера.

## Установка

```sh
npm install --save rambler-ui
```

## Использование

```js
// src/index.js
import React from 'react'
import {render} from 'react-dom'
import App from './App'

render(<App />, document.getElementById('app'))

// src/App.js
import React from 'react'
import Button from 'rambler-ui/Button'

export default () => (
  <div>
    <Button buttonType="button">
      Кнопка
    </Button>
  </div>
)
```

Более подробно про установку и использование можно прочитать в [документации](https://ui-kit.rambler.ru/#/usage/install) и в описании [API компонентов](https://ui-kit.rambler.ru/#/components/Avatar).

## [Разработка](https://ui-kit.rambler.ru/#/usage/contribute)

## Лицензия

MIT
