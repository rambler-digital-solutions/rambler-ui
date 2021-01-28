import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LockIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM7.65 9h-.3c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5h.3c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5zM13 6h-1V4.5C12 2.015 9.985 0 7.5 0S3 2.015 3 4.5V6H2c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h11c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1zM7.5 1.2c1.82 0 3.3 1.48 3.3 3.3V6H4.2V4.5c0-1.82 1.48-3.3 3.3-3.3zM2.2 13.8h10.6V7.2H2.2v6.6z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LockIcon.displayName = 'LockIcon'

LockIcon.alias = ['LockOutlineIcon']
