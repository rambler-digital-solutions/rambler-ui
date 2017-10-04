import examplesBaseCode from '!!raw!./examples.js'
import code from '!!raw!../FieldGroup'

import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'FieldGroup'

export default () => (
  <div>
    <Playground code={examplesBaseCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<FieldGroup />`" />
  </div>
)
