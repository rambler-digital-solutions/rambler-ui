import examplesBaseCode from '!!raw-loader!./examples'
import code from '!!raw-loader!rambler-ui/Input/Input'
import codeFormGroup from '!!raw-loader!rambler-ui/FormGroup/FormGroup'
import codeInputStatus from '!!raw-loader!rambler-ui/InputStatus/InputStatus'

import Playground from 'docs/src/components/Playground'
import PropTypesTable from 'docs/src/components/PropTypesTable'

export const title = 'Input'

### Пример
<Playground code={examplesBaseCode} />

### Свойства `<Input />`
<PropTypesTable code={code} />

### Свойства `<InputStatus />`
<PropTypesTable code={codeInputStatus} />

### Свойства `<FormGroup />`
<PropTypesTable code={codeFormGroup} />
