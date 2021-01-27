import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ClockIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 15V0M0 15V0m10.571 9.722L8.1 7.251V3.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v3.834c0 .266.105.52.293.707l2.529 2.53c.195.195.512.195.707 0l.142-.142c.195-.195.195-.512 0-.707M7.5 0C3.358 0 0 3.358 0 7.5 0 11.642 3.358 15 7.5 15c4.142 0 7.5-3.358 7.5-7.5C15 3.358 11.642 0 7.5 0m0 1.2c3.474 0 6.3 2.826 6.3 6.3 0 3.474-2.826 6.3-6.3 6.3-3.474 0-6.3-2.826-6.3-6.3 0-3.474 2.826-6.3 6.3-6.3"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ClockIcon.displayName = 'ClockIcon'
