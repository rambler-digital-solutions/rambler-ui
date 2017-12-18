# Установка

```
npm install --save rambler-ui
```

# Использование
Обязательно включите babel-polyfill в свой код
```
import Button from 'rambler-ui/Button'
import { ApplyTheme } from 'rambler-ui/theme'
import 'babel-polyfill'

export default function() {
  return <ApplyTheme>
    <Button>Кнопка</Button> 
  </ApplyTheme> 
}
```



## Использование с Webpack
Использование babel-loader необязательно, т.к. весь код уже скомпилирован
Тестовый конфиг вы можете найти [здесь](https://gitlab.rambler.ru/rambler-ui/rambler-ui-example/blob/master/webpack.js)

## Использование с server-side-rendering
См. как используется ssr с [JSS](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
```
import { ApplyTheme, createJss, createSheetsRegistry } from 'rambler-ui/theme'

function render() {
    const sheetsRegistry = createSheetsRegistry()

    const component = (
      <ApplyTheme sheetsRegistry={sheetsRegistry}>

      </ApplyTheme>
    )
    const html = renderToString(component)
    const css = sheetsRegistry.toString()
}
```


Теперь ваш проект должен собраться корректно.