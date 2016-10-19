# Установка

```
npm install --save git+https://gitlab.rambler.ru/rambler-ui/rambler-ui.git#npm-stable
```

# Использование
Обязательно включите babel-polyfill в свой код
```
import Button from 'rambler-ui/Button'
import 'babel-polyfill'

export default function() {
  return <Button>Кнопка</Button> 
}
```



## Использование с Webpack
Использование babel-loader необязательно, т.к. весь код уже скомпилирован
Тестовый конфиг вы можете найти [здесь](https://gitlab.rambler.ru/rambler-ui/rambler-ui-example/blob/master/webpack.js)

## Использование с server-side-rendering
См. как используется ssr с [JSS](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
```
import { ApplyTheme, jss } from 'rambler-ui/theme'

const component = (
  <ApplyTheme>

  </ApplyTheme>
)
const html = renderToString(component)
const css = jss.sheets.toString()
```


Теперь ваш проект должен собраться корректно.