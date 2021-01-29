import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LockIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zM7.65 9h-.3c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5h.3c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5zM13 6h-1V4.5C12 2.015 9.985 0 7.5 0S3 2.015 3 4.5V6H2c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h11c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1zM7.5 1.2c1.82 0 3.3 1.48 3.3 3.3V6H4.2V4.5c0-1.82 1.48-3.3 3.3-3.3zM2.2 13.8h10.6V7.2H2.2v6.6z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm6.5 7c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1h-7V7zM15 8v-.785c0-2.612-1.909-4.944-4.509-5.192C7.509 1.739 5 4.077 5 7v1H4c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h12c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-1zm-5.8 4.5v2c0 .276.224.5.5.5h.6c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5h-.6c-.276 0-.5.224-.5.5zm-4.7 4h11v-7h-11v7z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

LockIcon.displayName = 'LockIcon'

LockIcon.alias = ['LockOutlineIcon']
