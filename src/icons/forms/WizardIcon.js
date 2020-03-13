import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function WizardIcon(props) {
  return (
    <SvgIcon viewBox="0 0 22 22" {...props}>
      <path
        d="M8.985 12l1.06 1.06-8.484 8.486L.5 20.486 8.985 12zM12 0h1.5v4H12V0zm0 14h1.5v4H12v-4zm10-5.75v1.5h-4v-1.5h4zm-14 0v1.5H4v-1.5h4zM6.56 1.5l3.536 3.536-1.06 1.06L5.5 2.561 6.56 1.5zm12.976 0l1.06 1.06-3.535 3.536L16 5.036 19.536 1.5zM17.06 12l3.535 3.536-1.06 1.06L16 13.061 17.06 12z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

WizardIcon.displayName = 'WizardIcon'
