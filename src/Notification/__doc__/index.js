import examplesCode from '!!raw!./examples.js'
import examplesDecoratorCode from '!!raw!./examples-decorator.js'
import code from '!!raw!../Notification.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Notification'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesDecoratorCode} title="Пример с декоратором" />
    <PropTypesTable code={code} />
  </div>
)
