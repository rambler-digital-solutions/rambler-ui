import examplesCode from '!!raw-loader!./examples'
import examplesDecoratorCode from '!!raw-loader!./examples-decorator'
import code from '!!raw-loader!rambler-ui/Snackbar/Snackbar'

import Playground from 'docs/src/components/Playground'
import PropTypesTable from 'docs/src/components/PropTypesTable'

export const title = 'Snackbar'

### Пример
<Playground code={examplesCode} />

### Пример с декоратором
<Playground code={examplesDecoratorCode} />

### Свойства `<Snackbar />`
<PropTypesTable code={code} />
