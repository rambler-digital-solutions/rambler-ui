import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronLeftIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M9.57 12.723L4.348 7.5 9.57 2.278c.195-.196.195-.512 0-.707l-.141-.141c-.195-.195-.511-.195-.707 0L3.005 7.147c-.196.195-.196.512 0 .707l5.717 5.717c.196.195.512.195.707 0l.141-.141c.195-.195.195-.512 0-.707M0 15V0m15 0v15"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-7.884-3.823l-5.469-5.47c-.391-.39-.391-1.024 0-1.414l5.469-5.47c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707L8.061 10l5.116 5.116c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronLeftIcon.displayName = 'ChevronLeftIcon'
