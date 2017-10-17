import examplesBaseCode from '!!raw!./examples.js'
import code from '!!raw!../TagsInput'
import codeItem from '!!raw!../TagsInputItem'

import Playground from 'components/Playground'
import PropTypesTable from 'components/PropTypesTable'

export const title = 'TagsInput'

export default () => (
  <div>
    <Playground code={examplesBaseCode} title="Пример" />
    <PropTypesTable code={code} header="### Свойства `<TagsInput />`" />
    <PropTypesTable code={codeItem} header="### Свойства `<TagsInputItem />`" />
  </div>
)
