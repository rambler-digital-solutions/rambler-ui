import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronUpCompactIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M3.429 9.429l.141.141c.195.196.512.196.707 0L7.5 6.348l3.222 3.222c.195.196.512.196.707 0l.141-.141c.195-.195.195-.512 0-.707L7.853 5.005c-.195-.196-.512-.196-.707 0L3.429 8.722c-.195.195-.195.512 0 .707M0 15V0m15 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChevronUpCompactIcon.displayName = 'ChevronUpCompactIcon'
