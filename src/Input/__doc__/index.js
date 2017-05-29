import examplesBaseCode from '!!raw!./examples.js'
import code from '!!raw!../Input'

import codeFormGroup from '!!raw!../../FormGroup/FormGroup'
import codeInputStatus from '!!raw!../../InputStatus/InputStatus'


import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'Input'

export default () => (
  <div>
    <Playground code={examplesBaseCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Input />`" />
    <PropTypesTable code={codeInputStatus} header="### Свойства `<InputStatus />`" />
    <PropTypesTable code={codeFormGroup} header="### Свойства `<FormGroup />`" />
  </div>
)
