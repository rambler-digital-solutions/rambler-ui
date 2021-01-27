import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EmailIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-1.2 12.8H1.2V5.64l6.065 3.235c.147.078.323.078.47 0L13.8 5.64v7.16zM1.2 3.2h12.6v1.08L7.5 7.64 1.2 4.28V3.2zM0 2.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5H.5c-.276 0-.5.224-.5.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

EmailIcon.displayName = 'EmailIcon'
