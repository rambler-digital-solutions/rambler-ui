import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function CreditCardIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M10 9.8H8.5c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5H10c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-3.5 0h-4c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-5.3 2h12.6V7H1.2v4.8zm0-6h12.6V3.2H1.2v2.6zM1 2c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H1zM0 15V0v15zM15 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

CreditCardIcon.displayName = 'CreditCardIcon'
