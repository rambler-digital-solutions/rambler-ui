import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function TickIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            fillRule="evenodd"
            d="M13.514 3.675l-.142-.142c-.195-.195-.511-.195-.707 0L6.443 9.756 3.221 6.533c-.195-.195-.512-.195-.707 0l-.142.142c-.195.195-.195.512 0 .707l3.718 3.717c.195.196.512.196.707 0l6.717-6.717c.195-.195.195-.512 0-.707M15 0v15M0 15V0"
          />
        ) : (
          <path
            d="M8.707 14.353l8.47-8.47c.195-.195.195-.51 0-.707l-.354-.353c-.195-.195-.512-.195-.707 0L8 12.94 3.884 8.823c-.196-.195-.512-.195-.707 0l-.354.353c-.195.196-.195.512 0 .707l4.47 4.47c.39.391 1.023.391 1.414 0M0 20V0m20 0v20"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

TickIcon.displayName = 'TickIcon'
