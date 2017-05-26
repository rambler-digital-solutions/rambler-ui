import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Loader.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Loader'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} />
  </div>
)
