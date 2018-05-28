import React from 'react'
import examplesCode from '!!raw-loader!./examples.js'
import code from '!!raw-loader!../Avatar.js'

import Playground from 'docs/src/components/Playground'
import PropTypesTable from 'docs/src/components/PropTypesTable'

export const title = 'Avatar'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} />
  </div>
)
