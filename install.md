# Установка

```
npm install --save git+https://gitlab.rambler.ru/rambler-ui/rambler-ui.git#npm-stable
```

# Использование
```
import Button from 'rambler-ui/Button'

export default function() {
  return <Button>Кнопка</Button> 
}
```

## Использование с Webpack
Если вы используете вебпак, добавьте css-loader
```
  module: {
    loaders: [
    ...
    {
      test: /\.css$/,
      loader: 'style!css'
    }
    ...
    ]
  },
```
Если вы используете css-modules, отключите их для `rambler-ui`, чтобы не изменялись имена css-файлов
<br/>
Использование babel-loader необязательно, т.к. весь код уже скомпилирован
Тестовый конфиг вы можете найти [здесь](https://gitlab.rambler.ru/rambler-ui/rambler-ui-example/blob/master/webpack.js)

## Использование с `react-starter-kit`
Если вы используете [react-starter-kit](https://github.com/kriasoft/react-starter-kit), соблюдайте следующие правила, чтобы у вас собиралось изоморфное приложение:
<br/>
1. Обязательно используйте [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) для сборки css-стилей `rambler-ui` (или для всего вашего проекта)
<br>
```
  loaders: [
    ...
    {
      test:    /\.css$/,
      loader:  ExtractTextPlugin.extract('style', 'css'),
    },
    ...
  ]

```
<br>
2. Укажите, что `rambler-ui` является внешней зависимостью
<br>
```
  externals: [
    /^\.\/assets$/,
    function filter(context, request, cb) {
      const isExternal =
        request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
        !request.match(/^react-routing/) &&
        !context.match(/[\\/]react-routing/) &&
        !request.match(/^rambler-ui/);
      cb(null, Boolean(isExternal));
    },
  ],
```
<br>
Теперь ваш проект должен собраться корректно.