import IconButton from 'rambler-ui/IconButton'
import React from 'react'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'
import {MailruIcon, GoogleIcon} from 'rambler-ui/icons/profiles'
import { PhotoCameraIcon } from 'rambler-ui/icons/forms'
import { ApplyTheme } from 'rambler-ui/theme'

const types = ['primary', 'danger', 'secondary', 'outline', 'flat']

export default function IconButtonExample() {
  return (
    <ApplyTheme>
      <div>
        {types.map(type => (
          <div key={type}>
            <IconButton style={{margin: 15}} type={type}><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} loading={true}><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} disabled={true}><RamblerMailIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size="medium"><MailruIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size="medium" disabled={true}><MailruIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size="small"><GoogleIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size="small" disabled={true}><GoogleIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size="small" loading={true}><GoogleIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size={23}><PhotoCameraIcon /></IconButton>
            <IconButton style={{margin: 15}} type={type} size={23} loading={true}><PhotoCameraIcon /></IconButton>
          </div>
        ))}
      </div>
    </ApplyTheme>
  )
}
