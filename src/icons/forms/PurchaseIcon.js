import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PurchaseIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M7.5 11.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-.3-5.7h12.6V3.2H1.2v2.6zM1 2c-.552 0-1 .448-1 1v7.3h1.2V7h12.6v4.8H9.7V13H14c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H1zM0 0v15V0zm15 15V0v15z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M8.75 14.25c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM20 0v20V0zM0 0v20V0zm11 16h6c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v8h1.5V9.25h13v5.25H11V16zM3.5 7.75h13V5.5h-13v2.25z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PurchaseIcon.displayName = 'PurchaseIcon'
