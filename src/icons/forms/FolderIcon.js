import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EmailIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM1 1c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H8L6.293 1.293C6.105 1.105 5.851 1 5.586 1H1zm4.503 1.2L7.21 3.907c.188.188.442.293.707.293H13.8v8.6H1.2V2.2h4.303z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

EmailIcon.displayName = 'EmailIcon'
