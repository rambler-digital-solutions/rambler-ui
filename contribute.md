# Гайд по разработке RamblerUI

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
2. Запустить команду и указать версии, которые мы паблишем
```
npm run build
npm run publish -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'
```

## Билд и деплой gh-pages
1. Перейти `cd ./site`
2. Подправить файл versions.json (Добавить новую версию)
3. Запустить команду и указать версии, которые мы паблишем
```
npm run gh-pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'
```


