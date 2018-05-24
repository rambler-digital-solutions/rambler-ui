import React from 'react'
import examplesCode from 'raw-loader!./examples.js'
import code from 'raw-loader!../Avatar.js'

import PropTypesTable from 'docs/src/components/PropTypesTable'
import Playground from 'docs/src/components/Playground'

export const title = 'Avatar'

export default () => (
  <div>
    <Playground code={examplesCode} title="Пример" />
    <PropTypesTable code={code} />
  </div>
)
