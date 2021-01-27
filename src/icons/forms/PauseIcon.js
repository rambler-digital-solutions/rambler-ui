import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PauseIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15M0 0v15M12 2.5v10c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5m-6 0v10c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PauseIcon.displayName = 'PauseIcon'
