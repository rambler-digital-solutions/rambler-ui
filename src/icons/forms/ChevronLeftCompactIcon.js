import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronLeftCompactIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M9.57 10.723L6.348 7.5 9.57 4.278c.195-.196.195-.512 0-.707l-.141-.141c-.195-.195-.511-.195-.707 0L5.005 7.147c-.196.195-.196.512 0 .707l3.717 3.717c.196.195.512.195.707 0l.141-.141c.195-.195.195-.512 0-.707M0 15V0m15 0v15"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m11.116-5.823l-3.469-3.47c-.391-.39-.391-1.024 0-1.414l3.469-3.47c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707L9.061 10l3.116 3.116c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronLeftCompactIcon.displayName = 'ChevronLeftCompactIcon'
