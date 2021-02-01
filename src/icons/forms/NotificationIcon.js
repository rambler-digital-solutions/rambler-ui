import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function NotificationIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M14 12H1c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5zm-6.5 2.5c-.828 0-1.5-.672-1.5-1.5h3c0 .828-.672 1.5-1.5 1.5zM2 5.5C2 2.462 4.462 0 7.5 0S13 2.462 13 5.5v4.1h-1.2V5.5c0-2.371-1.929-4.3-4.3-4.3-2.371 0-4.3 1.929-4.3 4.3v4.1H2V5.5zM0 0v15V0zm15 15V0v15z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M16.5 14.5h-13c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5h5c.276 0 .5-.224.5-.5V15c0-.276-.224-.5-.5-.5zM16 13V9c0-3.314-2.686-6-6-6S4 5.686 4 9v4h1.5V9c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v4H16zM0 20V0v20zM20 0v20V0z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

NotificationIcon.displayName = 'NotificationIcon'
