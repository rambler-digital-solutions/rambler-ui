import examplesCode from '!!raw!./examples.js'
import examplesCodeHref from '!!raw!./examples-href.js'
import examplesCodeRouter from '!!raw!./examples-react-router.js'
import codeSideNavigation from '!!raw!../SideNavigation.js'
import codeSideNavigationItem from '!!raw!../SideNavigationItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Боковая навигация'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCodeHref} canEdit={false} showPreview={false} title="Пример со ссылками" />
    <Playground code={examplesCodeRouter} canEdit={false} showPreview={false} title="Пример использования с react-router" />
    <PropTypesTable code={codeSideNavigation} header="### Свойства `<SideNavigation/>`" />
    <PropTypesTable code={codeSideNavigationItem} header="### Свойства `<SideNavigationItem/>`" />
  </div>
)
