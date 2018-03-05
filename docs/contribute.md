# Разработка

## Установка

```
git clone git@gitlab.rambler.ru:rambler-ui/rambler-ui.git
cd ./rambler-ui
npm install
npm run dev
```

### Запуск на отдельном порту/хосте

```
npm run dev -- --port 8080 --host 127.0.0.1
```

## Билд и деплой компонентов

```
npm version <patch|minor|major>
```

## Билд и деплой gh-pages

Запустить команду и указать версии, которые мы паблишем

```
npm run pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'
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

