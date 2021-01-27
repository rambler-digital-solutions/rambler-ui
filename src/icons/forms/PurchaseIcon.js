import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PurchaseIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M7.5 11.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-.3-5.7h12.6V3.2H1.2v2.6zM1 2c-.552 0-1 .448-1 1v7.3h1.2V7h12.6v4.8H9.7V13H14c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H1zM0 0v15V0zm15 15V0v15z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PurchaseIcon.displayName = 'PurchaseIcon'
