import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Typography.js'
import listCode from '!!raw!../List.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Typography'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Typography/>`" />
    <PropTypesTable code={listCode} header="### Свойства `<List/>`" />
  </div>
)
