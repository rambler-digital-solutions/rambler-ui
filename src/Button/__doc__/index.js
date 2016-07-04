import examplesCode from '!raw!./examples'
import examplesCode from '!raw!./examples-react-router'
import code from '!raw!../Button'

import PropTypesTable from 'site/src/components/PropTypesTable'
import Playground from 'site/src/components/Playground'

export const title = 'Кнопки'

export default () => (
  <div>
    <Playground code={examplesCode} canEdit={false} showPreview={false} title="Пример" />
    <Playground code={examplesCode} title="Пример использования с react-router" />
    <PropTypesTable code={code} />
  </div>
)
