import examplesCode from '!!raw!./examples.js'
import codeToggle from '!!raw!../Toggle.js'
import codeToggleOption from '!!raw!../ToggleOption.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Переключатели'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeToggle} header="### Свойства `<Toggle/>`" />
    <PropTypesTable code={codeToggleOption} header="### Свойства `<ToggleOption/>`" />
  </div>
)
