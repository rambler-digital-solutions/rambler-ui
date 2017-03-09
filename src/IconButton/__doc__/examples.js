import IconButton from 'rambler-ui/IconButton'
import React from 'react'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'
import { AddIcon, RemoveIcon, UndoIcon, PhotoCameraIcon } from 'rambler-ui/icons/forms'
import { ApplyTheme } from 'rambler-ui/theme'

export default function IconButtonExample() {
  return (
    <div>

      <ApplyTheme>
        <div>
          <IconButton style={{margin: 20}}><RamblerMailIcon /></IconButton>
          <IconButton style={{margin: 20}} type="secondary"><UndoIcon /></IconButton>
          <IconButton style={{margin: 20}} type="outline"><RamblerMailIcon /></IconButton>
          <IconButton style={{margin: 20}} type="secondary" size="small"><PhotoCameraIcon /></IconButton>
          <IconButton style={{margin: 20}} type="flat" size="small"><AddIcon /></IconButton>
          <IconButton style={{margin: 20}} type="danger" size="small"><RemoveIcon /></IconButton>
        </div>
      </ApplyTheme>

    </div>
  )
}
