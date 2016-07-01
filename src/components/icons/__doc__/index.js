export const title = 'Иконки'

import examplesCode from '!raw!./examples'
import svgIconCode from '!raw!../services/SvgIcon/SvgIcon'

import PropTypesTable from 'site/src/components/PropTypesTable'
import Playground from 'site/src/components/Playground'

// /* Дополнительное описание */
// export const description = ''

// /* Скрывать дочерние компоненты, если элемент не текущий, просто показывать ссылки на дочерние компоненты */
export const hideChildrenIfNotCurrent = true

export default () =>
  <div>
    <Playground code={ examplesCode } />
    <PropTypesTable code={ svgIconCode } />
  </div>

/* Дополнительная функция рендеринга, если не дочерних компонент */
export const DocIfNotCurrent = ({ children }) =>
  <div>{ children }</div>
