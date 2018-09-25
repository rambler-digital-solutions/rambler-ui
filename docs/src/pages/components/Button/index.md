import examplesCode from '!!raw-loader!./examples'
import examplesCodeRouter from '!!raw-loader!./examples-react-router'
import code from '!!raw-loader!rambler-ui/Button/Button'

import Playground from 'docs/src/components/Playground'
import PropTypesTable from 'docs/src/components/PropTypesTable'

export const title = 'Button'

### Пример
<Playground code={examplesCode} />

### Пример использования с `react-router`
<Playground code={examplesCodeRouter} canEdit={false} showPreview={false} />

### Свойства `<Button />`
<PropTypesTable code={code} />
