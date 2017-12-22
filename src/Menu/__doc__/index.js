import examplesCode from '!!raw!./examples.js'
import codeMenu from '!!raw!../Menu.js'
import codeMenuItem from '!!raw!../MenuItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Menu'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeMenu} header="### Свойства `<Menu />`" />
    <PropTypesTable code={codeMenuItem} header="### Свойства `<MenuItem />`" />
  </div>
)
