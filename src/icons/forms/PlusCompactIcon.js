import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PlusCompactIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM8.3 6.7h2.2c.276 0 .5.224.5.5v.6c0 .276-.224.5-.5.5H8.3v2.2c0 .276-.224.5-.5.5h-.6c-.276 0-.5-.224-.5-.5V8.3H4.5c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h2.2V4.5c0-.276.224-.5.5-.5h.6c.276 0 .5.224.5.5v2.2z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PlusCompactIcon.displayName = 'PlusCompactIcon'
