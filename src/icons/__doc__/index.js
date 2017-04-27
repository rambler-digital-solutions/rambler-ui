export const title = 'Icons'

import examplesCode from '!!raw!./examples.js'
import svgIconCode from '!!raw!../SvgIcon/SvgIcon.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

// /* Дополнительное описание */
// export const description = ''

// /* Скрывать дочерние компоненты, если элемент не текущий, просто показывать ссылки на дочерние компоненты */
export const hideChildrenIfNotCurrent = false

export default ({ renderChildrenDoc }) => (
  <div>
    <Playground code={ examplesCode } />
    <PropTypesTable code={ svgIconCode } />
    { renderChildrenDoc() }
  </div>
)


/* Дополнительная функция рендеринга, если не дочерних компонент */
// export const DocIfNotCurrent = ({ children }) =>
//   <div>{ children }</div>
