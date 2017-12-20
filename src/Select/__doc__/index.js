import examplesCode from '!!raw!./examples.js'
import examplesCode2 from '!!raw!./examples2.js'
import codeSelect from '!!raw!../Select.js'
import codeMenuItem from '!!raw!../../Menu/MenuItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Select'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCode2} title="Пример с кастомным MenuItem" />
    <PropTypesTable code={codeSelect} header="### Свойства `<Select />`" />
    <PropTypesTable code={codeMenuItem} header="### Свойства `<MenuItem />`" />
  </div>
)
