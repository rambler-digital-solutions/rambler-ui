import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GridIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-1 11h-3v3h2c.552 0 1-.448 1-1v-2zm-8 3h3v-3H6v3zm-2-3H1v2c0 .552.448 1 1 1h2v-3zM1 9h3V6H1v3zm5 0h3V6H6v3zm5 0h3V6h-3v3zm2-8h-2v3h3V2c0-.552-.448-1-1-1zM6 4h3V1H6v3zM4 4H1V2c0-.552.448-1 1-1h2v3z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M17 18h-3v-4h4v3c0 .552-.448 1-1 1zm-9 0h4v-4H8v4zm-2 0H3c-.552 0-1-.448-1-1v-3h4v4zm8-6h4V8h-4v4zm-6 0h4V8H8v4zm-6 0h4V8H2v4zm16-6h-4V2h3c.552 0 1 .448 1 1v3zM8 6h4V2H8v4zM6 6H2V3c0-.552.448-1 1-1h3v4zM0 20V0v20zM20 0v20V0z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

GridIcon.displayName = 'GridIcon'
