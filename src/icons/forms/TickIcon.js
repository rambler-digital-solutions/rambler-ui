import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function TickIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        d="M13.514 3.675l-.142-.142c-.195-.195-.511-.195-.707 0L6.443 9.756 3.221 6.533c-.195-.195-.512-.195-.707 0l-.142.142c-.195.195-.195.512 0 .707l3.718 3.717c.195.196.512.196.707 0l6.717-6.717c.195-.195.195-.512 0-.707M15 0v15M0 15V0"
      />
    </SvgIcon>
  )
}

TickIcon.displayName = 'TickIcon'
