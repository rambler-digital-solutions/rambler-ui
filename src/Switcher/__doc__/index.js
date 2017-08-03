import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Switcher.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Switcher'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} />
  </div>
)
