import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function NotificationIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M14 12H1c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5zm-6.5 2.5c-.828 0-1.5-.672-1.5-1.5h3c0 .828-.672 1.5-1.5 1.5zM2 5.5C2 2.462 4.462 0 7.5 0S13 2.462 13 5.5v4.1h-1.2V5.5c0-2.371-1.929-4.3-4.3-4.3-2.371 0-4.3 1.929-4.3 4.3v4.1H2V5.5zM0 0v15V0zm15 15V0v15z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

NotificationIcon.displayName = 'NotificationIcon'
