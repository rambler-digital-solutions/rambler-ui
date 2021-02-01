import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function CreditCardIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M10 9.8H8.5c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5H10c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-3.5 0h-4c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-5.3 2h12.6V7H1.2v4.8zm0-6h12.6V3.2H1.2v2.6zM1 2c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H1zM0 15V0v15zM15 0v15V0z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm11 12.75v-.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5zm-6 0v-.5c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5zM3.5 14.5h13V9.25h-13v5.25zm0-6.75h13V5.5h-13v2.25zM2 5v10c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

CreditCardIcon.displayName = 'CreditCardIcon'
