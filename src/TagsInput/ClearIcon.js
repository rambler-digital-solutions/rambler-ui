/* eslint-disable max-len */
import React from 'react'
import SvgIcon from '../icons/SvgIcon'

export default function ClearIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 15">
      <path d="M0 0v15V0zm15 0v15V0zM8.35 8.5l2.4 2.4a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 9.35l-2.4 2.4a.5.5 0 0 1-.71 0l-.14-.14a.5.5 0 0 1 0-.7l2.4-2.41-2.4-2.4a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0l2.41 2.4 2.4-2.4a.5.5 0 0 1 .71 0l.14.14a.5.5 0 0 1 0 .7L8.35 8.5z" />
    </SvgIcon>
  )
}

ClearIcon.displayName = 'ClearIcon'
