import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ClearCompactIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM8.348 7.5l3.223 3.222c.195.196.195.512-.001.708l-.141.141c-.195.195-.511.195-.707-.001L7.5 8.348 4.278 11.57c-.196.196-.512.196-.707.001l-.141-.141c-.196-.196-.196-.512-.001-.708L6.652 7.5 3.429 4.278c-.195-.196-.195-.512.001-.708l.141-.141c.195-.195.511-.195.707.001L7.5 6.652l3.222-3.222c.196-.196.512-.196.707-.001l.141.141c.196.196.196.512.001.708L8.348 7.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ClearCompactIcon.displayName = 'ClearCompactIcon'
