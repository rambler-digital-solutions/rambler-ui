import React from 'react'
import SvgIcon from '../SvgIcon'

export default function UserIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M14 12.197c0-.66-.205-1.311-.614-1.829a7.536 7.536 0 0 0-2.734-2.164 4.482 4.482 0 0 1-6.304 0 7.536 7.536 0 0 0-2.734 2.164A2.947 2.947 0 0 0 1 12.197V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.803zM4.5 5c0 1.654 1.346 3 3 3s3-1.346 3-3V3c0-1.654-1.346-3-3-3s-3 1.346-3 3v2zM0 15V0v15zM15 0v15V0z" />
    </SvgIcon>
  )
}

UserIcon.displayName = 'UserIcon'
