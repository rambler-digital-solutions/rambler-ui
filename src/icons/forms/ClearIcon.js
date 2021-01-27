import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ClearIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM8.349 7.5l5.222 5.222c.195.195.195.512 0 .707l-.142.142c-.195.195-.512.195-.707 0L7.5 8.349l-5.222 5.222c-.195.195-.512.195-.707 0l-.142-.142c-.195-.195-.195-.512 0-.707L6.651 7.5 1.429 2.278c-.195-.195-.195-.512 0-.707l.142-.142c.195-.195.512-.195.707 0L7.5 6.651l5.222-5.222c.195-.195.512-.195.707 0l.142.142c.195.195.195.512 0 .707L8.349 7.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ClearIcon.displayName = 'ClearIcon'
