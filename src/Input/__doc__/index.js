import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Input'

import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'Input'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Input />`" />
  </div>
)
