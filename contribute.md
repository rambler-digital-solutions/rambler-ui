# Гайд по разработке RamblerUI

## Roadmap
- [x] Buttons
- [x] RadioButton 
- [x] Toggle 
- [x] Checkbox
- [x] Dropdown
- [x] Tooltip
- [x] Popup
- [x] Hint
- [x] Input
- [x] Textarea
- [x] Snackbar
- [x] Notification
- [x] Avatar
- [x] Loader
- [x] Spinner
- [x] Select
- [x] Suggest

## Установка
```
git clone git@gitlab.rambler.ru:rambler-ui/rambler-ui.git
cd ./rambler-ui
npm install
npm install -g gulp webpack
cd ./site
npm install
npm run dev
```

### Запуск на отдельном порту/хосте
```
npm run dev -- --port 8080 --host 127.0.0.1
```


## Билд и деплой компонентов
1. Установить версию в package.json
2. Запустить команду
```
npm run release
```

## Билд и деплой gh-pages
1. Перейти `cd ./site`
2. Подправить файл versions.json (Добавить новую версию)
3. Запустить команду и указать версии, которые мы паблишем
```
npm run gh-pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'
```

## Стайл-гайды

1. Для css используем [JSS](https://github.com/cssinjs/jss) + Модули для префикса компонентов.
2. Для javascript кода используем базовый "airbnb-base" + некоторые правила переопределены в `.eslintrc`

## Написание документации
Чтобы компонент попал в документацию, нужно создать файл `__doc__/index.js` внутри папки с компонентом.
Этот файл может экспортировать следующие свойства:
1. `{String} title` - Название компонента (Понятное на русском)
2. `{Component} default` - компонент с документацией и примерами
3. `{String} description` - Описание компонента (опционально)
4. `{Boolean} [hideChildrenIfNotCurrent=false]` - Скрывать ли дочерние компоненты, если в данный момент не выбран текущий компонент

