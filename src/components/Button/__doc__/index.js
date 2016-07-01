import examplesCode from '!raw!./examples'
import code from '!raw!../Button'

import PropTypesTable from 'site/src/components/PropTypesTable'
import Playground from 'site/src/components/Playground'

export const title = 'Кнопки'

export default () => (
  <div>
    <Playground code={examplesCode} />
    <PropTypesTable code={code} />
  </div>
)
