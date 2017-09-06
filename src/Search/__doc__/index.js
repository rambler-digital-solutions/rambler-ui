import examplesCode from '!!raw!./examples.js'
import codeSearch from '!!raw!../Search'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Search'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeSearch} header="### Свойства `<Search/>`" />
  </div>
)
