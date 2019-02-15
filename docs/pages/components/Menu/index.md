import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'
import examples from '!!raw-loader!./examples'
import examplesRouter from '!!raw-loader!./examples-react-router'
import codeMenu from '!!raw-loader!rambler-ui/Menu/Menu'
import codeMenuItem from '!!raw-loader!rambler-ui/Menu/MenuItem'

# Menu

### Пример
<Playground code={examples} />

### Пример использования с `react-router`
<Playground code={examplesRouter} canEdit={false} showPreview={false} />

### Свойства `<Menu />`
<PropTypesTable code={codeMenu} />

### Свойства `<MenuItem />`
<PropTypesTable code={codeMenuItem} />
