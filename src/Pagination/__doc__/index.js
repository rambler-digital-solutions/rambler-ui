import examplesCode from '!!raw!./examples.js'
import code from '!!raw!../Pagination.js'
import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Pagination'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<Pagination />`" />
  </div>
)
