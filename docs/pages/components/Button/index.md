import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'
import examples from '!!raw-loader!./examples'
import examplesRouter from '!!raw-loader!./examples-react-router'
import code from '!!raw-loader!rambler-ui/Button/Button'

# Button

### Пример
<Playground code={examples} />

### Пример использования с `react-router`
<Playground code={examplesRouter} canEdit={false} showPreview={false} />

### Свойства `<Button />`
<PropTypesTable code={code} />
