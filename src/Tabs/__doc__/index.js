import examplesCode from '!!raw!./examples.js'
import examplesCodeRouter from '!!raw!./examples-react-router.js'
import codeTabs from '!!raw!../Tabs.js'
import codeTabsItem from '!!raw!../TabsItem.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Tabs'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCodeRouter} canEdit={false} showPreview={false} title="Пример использования с react-router" />
    <PropTypesTable code={codeTabs} header="### Свойства `<Tabs/>`" />
    <PropTypesTable code={codeTabsItem} header="### Свойства `<TabsItem/>`" />
  </div>
)
