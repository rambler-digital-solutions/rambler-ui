import examplesCode from '!!raw!./examples.js'
import codeSelect from '!!raw!../Select.js'
import codeMenuItem from '!!raw!../../Menu/MenuItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Select'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeSelect} header="### Свойства `<Select />`" />
    <PropTypesTable code={codeMenuItem} header="### Свойства `<MenuItem />`" />
  </div>
)
