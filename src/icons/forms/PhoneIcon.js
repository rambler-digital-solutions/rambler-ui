import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PhoneIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM3.2 13.8h8.6V4H3.2v9.8zm0-11h8.6V1.2H3.2v1.6zM13 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm-5.5 9.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PhoneIcon.displayName = 'PhoneIcon'
