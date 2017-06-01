import examplesCode from '!!raw!./examples.js'
import codeSelect from '!!raw!../Select.js'
import codeSelectOption from '!!raw!../SelectOption.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Select'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeSelect} header="### Свойства `<Select />`" />
    <PropTypesTable code={codeSelectOption} header="### Свойства `<SelectOption />`" />
  </div>
)
