import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../TextInput'

import codeFormGroup from '!!raw!../../FormGroup/FormGroup'
import codeInputStatus from '!!raw!../../InputStatus/InputStatus'


import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = `TextInput /
                      FormGroup /
                      InputStatus`

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<TextInput />`" />
    <PropTypesTable code={codeInputStatus} header="### Свойства `<InputStatus />`" />
    <PropTypesTable code={codeFormGroup} header="### Свойства `<FormGroup />`" />
  </div>
)
