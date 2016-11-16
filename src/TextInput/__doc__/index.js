import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../TextInput'

import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'TextInput'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<TextInput />`" />
  </div>
)
