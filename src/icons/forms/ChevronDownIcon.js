import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronDownIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM7.854 11.995c-.196.195-.512.195-.708 0L1.429 6.278c-.195-.196-.195-.512 0-.707l.141-.141c.196-.196.512-.196.708-.001L7.5 10.651l5.222-5.222c.196-.195.512-.195.708.001l.141.141c.195.195.195.511 0 .707l-5.717 5.717z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChevronDownIcon.displayName = 'ChevronDownIcon'
