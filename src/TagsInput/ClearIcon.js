/* eslint-disable max-len */
import React from 'react'
import SvgIcon from '../SvgIcon'

export default function ClearIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 15">
      <path d="M0 15V0v15zM15 0v15V0zM8.35 7.5l3.22 3.22a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 8.35l-3.22 3.22a.5.5 0 0 1-.7 0l-.15-.14a.5.5 0 0 1 0-.7L6.65 7.5 3.43 4.28a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0L7.5 6.65l3.22-3.22a.5.5 0 0 1 .7 0l.15.14a.5.5 0 0 1 0 .7L8.35 7.5z" />
    </SvgIcon>
  )
}

ClearIcon.displayName = 'ClearIcon'
