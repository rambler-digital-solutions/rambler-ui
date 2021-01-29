import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronUpCompactIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M3.429 9.429l.141.141c.195.196.512.196.707 0L7.5 6.348l3.222 3.222c.195.196.512.196.707 0l.141-.141c.195-.195.195-.512 0-.707L7.853 5.005c-.195-.196-.512-.196-.707 0L3.429 8.722c-.195.195-.195.512 0 .707M0 15V0m15 0v15"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m13.116-7.823L10 9.061l-3.116 3.116c-.195.195-.512.195-.707 0l-.354-.354c-.195-.195-.195-.512 0-.707l3.47-3.469c.39-.391 1.024-.391 1.414 0l3.47 3.469c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronUpCompactIcon.displayName = 'ChevronUpCompactIcon'
