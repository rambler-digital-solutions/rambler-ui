import examplesCode from '!!raw!./examples.js'
import examplesCodeHref from '!!raw!./examples-href.js'
import examplesCodeRouter from '!!raw!./examples-react-router.js'
import codeSideNav from '!!raw!../SideNav.js'
import codeSideNavItem from '!!raw!../SideNavItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'SideNav'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCodeHref} title="Пример со ссылками" />
    <Playground code={examplesCodeRouter} canEdit={false} showPreview={false} title="Пример использования с react-router" />
    <PropTypesTable code={codeSideNav} header="### Свойства `<SideNav/>`" />
    <PropTypesTable code={codeSideNavItem} header="### Свойства `<SideNavItem/>`" />
  </div>
)
