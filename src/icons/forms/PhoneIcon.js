import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PhoneIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zM3.2 13.8h8.6V4H3.2v9.8zm0-11h8.6V1.2H3.2v1.6zM13 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm-5.5 9.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm10 12.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM5.5 16.5h9V7h-9v9.5zm0-11h9v-2h-9v2zM4 3v14c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H5c-.552 0-1 .448-1 1z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PhoneIcon.displayName = 'PhoneIcon'
