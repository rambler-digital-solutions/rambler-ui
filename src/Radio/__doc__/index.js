import examplesCode from '!!raw!./examples.js'
import codeRadioButton from '!!raw!../RadioButton'
import codeRadioButtonGroup from '!!raw!../RadioButtonGroup'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Радиобаттоны'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeRadioButton} header="### Свойства `<codeRadioButton/>`" />
    <PropTypesTable code={codeRadioButtonGroup} header="### Свойства `<codeRadioButtonGroup/>`" />
  </div>
)
