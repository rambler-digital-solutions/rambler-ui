import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Textarea'

import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'Textarea'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Textarea />`" />
  </div>
)
