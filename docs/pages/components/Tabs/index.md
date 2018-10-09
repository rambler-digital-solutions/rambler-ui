import examplesCode from '!!raw-loader!./examples'
import examplesCodeRouter from '!!raw-loader!./examples-react-router'
import codeTabs from '!!raw-loader!rambler-ui/Tabs/Tabs'
import codeTabsItem from '!!raw-loader!rambler-ui/Tabs/TabsItem'

import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'

# Tabs

### Пример
<Playground code={examplesCode} />

### Пример использования с `react-router`
<Playground code={examplesCodeRouter} canEdit={false} showPreview={false} />

### Свойства `<Tabs />`
<PropTypesTable code={codeTabs} />

### Свойства `<TabsItem />`
<PropTypesTable code={codeTabsItem} />
