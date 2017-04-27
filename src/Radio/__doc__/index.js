import examplesCode from '!!raw!./examples.js'
import codeRadioButton from '!!raw!../RadioButton'
import codeRadioButtonGroup from '!!raw!../RadioButtonGroup'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Radio'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeRadioButton} header="### Свойства `<RadioButton/>`" />
    <PropTypesTable code={codeRadioButtonGroup} header="### Свойства `<RadioButtonGroup/>`" />
  </div>
)
