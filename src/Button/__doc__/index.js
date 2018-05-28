import React from 'react'
import examplesCode from '!!raw-loader!./examples.js'
import examplesCodeRouter from '!!raw-loader!./examples-react-router.js'
import code from '!!raw-loader!../Button.js'

import PropTypesTable from 'docs/src/components/PropTypesTable'
import Playground from 'docs/src/components/Playground'

export const title = 'Button'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <Playground code={examplesCodeRouter} canEdit={false} showPreview={false} title="Пример использования с react-router" />
    <PropTypesTable code={code} />
  </div>
)
