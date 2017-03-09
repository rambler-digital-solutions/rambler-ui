import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../IconButton.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Кнопки-иконки'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} />
  </div>
)
