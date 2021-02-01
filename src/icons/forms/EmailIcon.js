import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EmailIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-1.2 12.8H1.2V5.64l6.065 3.235c.147.078.323.078.47 0L13.8 5.64v7.16zM1.2 3.2h12.6v1.08L7.5 7.64 1.2 4.28V3.2zM0 2.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5H.5c-.276 0-.5.224-.5.5z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zM20 0v20V0zM3.833 5.5h12.334L10 10.125 3.833 5.5zm12.667 10h-13V7.125l5.9 4.425c.356.267.844.267 1.2 0l5.9-4.425V15.5zM2 5v11c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

EmailIcon.displayName = 'EmailIcon'
