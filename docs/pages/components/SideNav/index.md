import examplesCode from '!!raw-loader!./examples'
import examplesCodeHref from '!!raw-loader!./examples-href'
import examplesCodeRouter from '!!raw-loader!./examples-react-router'
import codeSideNav from '!!raw-loader!rambler-ui/SideNav/SideNav'
import codeSideNavItem from '!!raw-loader!rambler-ui/SideNav/SideNavItem'

import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'

# SideNav

### Пример
<Playground code={examplesCode} />

### Пример со ссылками
<Playground code={examplesCodeHref} />

### Пример использования с `react-router`
<Playground code={examplesCodeRouter} canEdit={false} showPreview={false} />

### Свойства `<SideNav />`
<PropTypesTable code={codeSideNav} />

### Свойства `<SideNavItem />`
<PropTypesTable code={codeSideNavItem} />
