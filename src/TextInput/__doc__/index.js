import examplesBaseCode from '!!raw!./examples.js'
import examplesChampCode from '!!raw!./examples-champ.js'
import code from '!!raw!../TextInput'

import codeFormGroup from '!!raw!../../FormGroup/FormGroup'
import codeInputStatus from '!!raw!../../InputStatus/InputStatus'


import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'Текстовые инпуты'

export default () => (
  <div>
    <Playground code={examplesBaseCode} title="Пример" />
    <Playground code={examplesChampCode} title="Пример с 'champ' темой" />
    <PropTypesTable code={code} header="### Свойства `<TextInput />`" />
    <PropTypesTable code={codeInputStatus} header="### Свойства `<InputStatus />`" />
    <PropTypesTable code={codeFormGroup} header="### Свойства `<FormGroup />`" />
  </div>
)
