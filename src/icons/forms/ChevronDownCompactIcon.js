import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronDownCompactIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M11.571 6.571l-.141-.141c-.195-.196-.512-.196-.707 0L7.5 9.652 4.278 6.43c-.195-.196-.512-.196-.707 0l-.141.141c-.195.195-.195.512 0 .707l3.717 3.717c.195.196.512.196.707 0l3.717-3.717c.195-.195.195-.512 0-.707M15 0v15M0 15V0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m9.293-7.647l-3.47-3.469c-.195-.195-.195-.512 0-.707l.354-.354c.195-.195.512-.195.707 0L10 10.939l3.116-3.116c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707l-3.47 3.469c-.39.391-1.024.391-1.414 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronDownCompactIcon.displayName = 'ChevronDownCompactIcon'
