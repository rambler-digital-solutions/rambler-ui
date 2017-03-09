import IconButton from 'rambler-ui/IconButton'
import React from 'react'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'
import { ApplyTheme } from 'rambler-ui/theme'

export default function IconButtonExample() {
  return (
    <div>

      <ApplyTheme>
        <div>
          <div>
            <IconButton style={{margin: 20}}><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 20}} type="secondary"><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 20}} type="outline"><RamblerMailIcon /></IconButton>
          </div>
          <div>
            <IconButton style={{margin: 20}} type="secondary" size="small"><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 20}} type="flat" size="small"><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 20}} type="danger" size="small"><RamblerMailIcon /></IconButton>
          </div>
        </div>
      </ApplyTheme>

    </div>
  )
}
