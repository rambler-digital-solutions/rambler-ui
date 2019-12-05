import React from 'react'
import SvgIcon from '../SvgIcon'

export default function LockOpenIcon(props) {
  return (
    <SvgIcon viewBox="0 0 11 15" {...props}>
      <path
        d="M5.5 11.429c.756 0 1.375-.643 1.375-1.429S6.256 8.571 5.5 8.571 4.125 9.214 4.125 10s.619 1.429 1.375 1.429zM9.625 5h-.688V3.571C8.938 1.6 7.397 0 5.5 0 3.603 0 2.062 1.6 2.062 3.571H3.37c0-1.221.955-2.214 2.131-2.214 1.176 0 2.131.993 2.131 2.214V5H1.375C.619 5 0 5.643 0 6.429v7.142C0 14.357.619 15 1.375 15h8.25c.756 0 1.375-.643 1.375-1.429V6.43C11 5.643 10.381 5 9.625 5zm0 8.571h-8.25V6.43h8.25v7.142z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LockOpenIcon.displayName = 'LockOpenIcon'
