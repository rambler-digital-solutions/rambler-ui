import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronRightCompactIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15m-9.43-3.43l-.141-.141c-.195-.195-.195-.511 0-.707L8.651 7.5 5.429 4.278c-.195-.196-.195-.512 0-.707l.141-.141c.196-.196.512-.196.708-.001l3.717 3.717c.195.196.195.512 0 .708l-3.717 3.717c-.196.195-.512.195-.708-.001"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m8.177-5.823l-.354-.354c-.195-.195-.195-.512 0-.707L10.939 10 7.823 6.884c-.195-.195-.195-.512 0-.707l.354-.354c.195-.195.512-.195.707 0l3.469 3.47c.391.39.391 1.024 0 1.414l-3.469 3.47c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronRightCompactIcon.displayName = 'ChevronRightCompactIcon'
