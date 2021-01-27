import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChartBarIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M4 5.5v9c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5v-9c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5m5-5v14c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5V.5c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5m5 14v-4c0-.276-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h2c.276 0 .5-.224.5-.5M15 0v15M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChartBarIcon.displayName = 'ChartBarIcon'
