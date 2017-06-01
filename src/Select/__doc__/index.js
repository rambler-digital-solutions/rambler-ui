import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Select.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Select'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Select />`" />
  </div>
)
