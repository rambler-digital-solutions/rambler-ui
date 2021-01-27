import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronDownCompactIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M11.571 6.571l-.141-.141c-.195-.196-.512-.196-.707 0L7.5 9.652 4.278 6.43c-.195-.196-.512-.196-.707 0l-.141.141c-.195.195-.195.512 0 .707l3.717 3.717c.195.196.512.196.707 0l3.717-3.717c.195-.195.195-.512 0-.707M15 0v15M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChevronDownCompactIcon.displayName = 'ChevronDownCompactIcon'
