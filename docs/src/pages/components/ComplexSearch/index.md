import examplesCode from '!!raw-loader!./examples'
import codeSearch from '!!raw-loader!rambler-ui/ComplexSearch/ComplexSearch'
import codeServiceSearch from '!!raw-loader!rambler-ui/ComplexSearch/ServiceSearch'
import codeSimpleSearch from '!!raw-loader!rambler-ui/ComplexSearch/SimpleSearch'
import codeItem from '!!raw-loader!rambler-ui/ComplexSearch/SuggestItem'

import Playground from 'docs/src/components/Playground'
import PropTypesTable from 'docs/src/components/PropTypesTable'

# ComplexSearch

### Пример
<Playground code={examplesCode} />

### Свойства `<ComplexSearch />`
<PropTypesTable code={codeSearch} />

### Свойства `<ServiceSearch />`
<PropTypesTable code={codeServiceSearch} />

### Свойства `<SimpleSearch />`
<PropTypesTable code={codeSimpleSearch} />

### Свойства `<SuggestItem />`
<PropTypesTable code={codeItem} />
