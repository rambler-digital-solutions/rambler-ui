import React from 'react'
import Spinner from 'rambler-ui/Spinner'
import { ApplyTheme } from 'rambler-ui/theme'

export default function SpinnerExample() {
  return (
    <div>

      <ApplyTheme>
        <div>
          <div style={{ height: 200, position: 'relative' }}>
            <Spinner />
          </div>
        </div>
      </ApplyTheme>

    </div>
  )
}
