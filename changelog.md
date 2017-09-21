# Changelog

## v-3.1.4

* Добавлены адаптивные правила для мобильный устройств для компонентов `Input` и `Button`
* При автокомплите рамочки показывается на компоненте `Input`

## v-3.1.3

* Обновлен цвет по-умолчанию для иконки Instagram
* Исправлен импорт иконок в компонентах для уменьшения размера сборки приложений

## v-3.1.1

* Поправлены размеры Checkbox

## v-3.1.0

* Добавлен компонент Tabs
* Обновлены стили компонетов Toggle, Input, Checkbox и добавлено свойство `variation`
* Обновлены стили компонента Radio
* Исправлены ошибки доступа к `window` при серверном рендере

## v-3.0.0

* Переписан серверный рендеринг
* Обновлен `jss`
* Добавлен `react-jss` вместо `themed-react-jss` для связки с `react`

## v-2.18.2

* Поправлены лейблы в Checkbox и Switcher

## v-2.18.1

* Поправлено закрытие Popup по клику вне на touch устройствах

## v-2.18.0

* Добавлен компонент Switcher

## v-2.17.2

* Поправлено открытие searchable Select на touch устройствах

## v-2.17.1

* Поправлены отступы для input в компоненте Checkbox

## v-2.17.0

* В RadioButtonGroup можно добавлять любые теги и компоненты, не только RadioButton
* В RadioButton в качестве значения можно передавать не только строки, но и объекты 

## v-2.16.1

* Поправлено появление Tooltip на touch устройствах
* Поправлено открытие Select на touch устройствах

## v-2.16.0

* Добавлено свойство `passwordIconTooltip` для подсказки на кнопке показа/скрытия пароля в Input

## v-2.15.1

* Поправлены отступы и открытие Select
* Уменьшены отступы в мобильной версии Popup

## v-2.15.0

* Добавлено свойство `positionY` в Snackbar

## v-2.14.0

* Добавлены `type`: `number`, `url` в Input
* Поправлена подстветка выбранного элемента MenuItem
* Поправлены отступы тайтлов в FormGroup

## v-2.13.0

* Рефакторинг тем
* Рефакторинг верстки в соответствии с замечаниями дизайнеров
* Добавления `props.status` в Tooltip

## v-2.12.0

* Добавлены иконки

## v-2.11.2

* Поправлен автофокус и плейсхолдер для пустого значения в Select
* Поправлены размеры лейбла FormGroup

## v-2.11.1

* Поправлены размеры элементов FormGroup

## v-2.11.0

* Добавлен Select
* Поправлено состояние фокуса у Textarea

## v-2.10.0

* Добавлено свойство `container` для Avatar, позволяющее делать его ссылкой
* Поправлен состояние фокуса Input

## v-2.9.0

* Обновлен пакет `themed-react-jss` и способ работы с темами

## v-2.8.0

* Добавлен Avatar, Spinner, Loader
* Добавлено свойство `rounded` в Button
* Добавлены одноцветные иконки социальных профилей

## v-2.7.0

* Добавлен Notification
* Добавлен размер `small` для Input и Textarea

## v-2.6.0

* Добавлен Snackbar

## v-2.5.0

* Добавлены Hint, Textarea
* Поправлен `font-size` для Input
* Поправлена анимация появления Popup

## v-2.4.0

* Добавлены Tooltip, Dropdown, SideNav, Popup

## v-2.3.1

* Добавлены еще иконки

## v-2.3.0

* Добавлен IconButton
* Добавлены типы `danger` и `flat` для Button
* Добавлен набор иконок для форм и профилей

## v-2.2.0

* Добавлены Input, FormGroup, InputStatus

## v-2.0.0 (08.11.2016)

* Добавлены RadioButton
* Все стили переписаны на `JSS`
* Темы через `<ApplyTheme/>`
* Добавлены тесты на `enzyme` + `karma`
