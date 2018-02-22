import examplesCode from '!!raw!./examples.js'
import codeStep from '!!raw!../Step.js'
import codeStepper from '!!raw!../Stepper.js'

import PropTypesTable from 'components/PropTypesTable'
import Playground from 'components/Playground'

export const title = 'Stepper'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={codeStep} header="### Свойства `<Step />`" />
    <PropTypesTable code={codeStepper} header="### Свойства `<Stepper />`" />
  </div>
)
