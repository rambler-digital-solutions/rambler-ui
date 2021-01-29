import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PrintIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-1.2 5.2H1.2v6.6H3V10c0-.552.448-1 1-1h7c.552 0 1 .448 1 1v1.8h1.8V5.2zm-9.6 7.6h6.6v-2.6H4.2v2.6zM15 12c0 .552-.448 1-1 1h-2c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1H1c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h13c.552 0 1 .448 1 1v7zM3.2 3H2V2c0-.552.448-1 1-1h9c.552 0 1 .448 1 1v1h-1.2v-.8H3.2V3z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zM20 0v20V0zm-4 4.5V4c0-.552-.448-1-1-1H5c-.552 0-1 .448-1 1v.5h12zm.5 10H15V12c0-.552-.448-1-1-1H6c-.552 0-1 .448-1 1v2.5H3.5v-7h13v7zm-10 1h7v-3h-7v3zM2 7v8c0 .552.448 1 1 1h2c0 .552.448 1 1 1h8c.552 0 1-.448 1-1h2c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PrintIcon.displayName = 'PrintIcon'
