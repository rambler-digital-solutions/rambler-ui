import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PauseIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M15 0v15M0 0v15M12 2.5v10c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5m-6 0v10c0 .276-.224.5-.5.5h-2c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m15-4V4c0-.553-.448-1-1-1h-2c-.552 0-1 .447-1 1v12c0 .553.448 1 1 1h2c.552 0 1-.447 1-1m-7 1H6c-.552 0-1-.447-1-1V4c0-.553.448-1 1-1h2c.552 0 1 .447 1 1v12c0 .553-.448 1-1 1"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PauseIcon.displayName = 'PauseIcon'
