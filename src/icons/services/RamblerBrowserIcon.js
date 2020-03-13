import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RamblerBrowserIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M11.483 13.684l-1.422-3.258a.78.78 0 0 0-.407-.404L6.316 8.586l8.42-3.323-3.253 8.421zm4.342-10.473L4.088 7.792a.723.723 0 0 0-.022 1.344L8.19 10.89 2.25 16.724a.479.479 0 0 0 0 .686l.35.342c.192.19.504.19.698 0l5.886-5.78 1.691 3.833c.264.598 1.134.58 1.371-.029l4.545-11.628c.231-.592-.365-1.17-.966-.937z"
      />
    </SvgIcon>
  )
}

RamblerBrowserIcon.displayName = 'RamblerBrowserIcon'
