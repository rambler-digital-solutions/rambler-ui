import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function DialogIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-1 0H4c-.552 0-1 .448-1 1v1h1.2v-.8h9.6v6.6H13V9h1c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1zM1 3c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h1v2c0 .412.47.647.8.4L6 12h5c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H1zm9.8 1.2v6.6H5.6l-2.4 1.8v-1.8h-2V4.2h9.6z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm3 6c-.553 0-1 .447-1 1v8c0 .553.447 1 1 1h1v2c0 .412.471.647.8.4L8 16h6c.553 0 1-.447 1-1V7c0-.553-.447-1-1-1H3zm10.5 1.5v7h-6l-2 1.5v-1.5h-2v-7h10zm3-3V13h.5c.553 0 1-.447 1-1V4c0-.553-.447-1-1-1H6c-.553 0-1 .447-1 1v.5h11.5z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

DialogIcon.displayName = 'DialogIcon'
