import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'
import examples from '!!raw-loader!./examples'
import examplesHref from '!!raw-loader!./examples-href'
import examplesRouter from '!!raw-loader!./examples-react-router'
import codeSideNav from '!!raw-loader!rambler-ui/SideNav/SideNav'
import codeSideNavItem from '!!raw-loader!rambler-ui/SideNav/SideNavItem'

# SideNav

### Пример
<Playground code={examples} />

### Пример со ссылками
<Playground code={examplesHref} />

### Пример использования с `react-router`
<Playground code={examplesRouter} canEdit={false} showPreview={false} />

### Свойства `<SideNav />`
<PropTypesTable code={codeSideNav} />

### Свойства `<SideNavItem />`
<PropTypesTable code={codeSideNavItem} />
