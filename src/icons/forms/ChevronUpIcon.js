import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronUpIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15m-2.278-4.429L7.5 5.349l-5.222 5.222c-.196.195-.512.195-.708-.001l-.141-.141c-.195-.195-.195-.511.001-.707l5.716-5.717c.196-.195.512-.195.708 0l5.717 5.717c.195.196.195.512 0 .707l-.141.141c-.196.196-.512.196-.708.001"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-4.884-6.823L10 8.061l-5.116 5.116c-.195.195-.512.195-.707 0l-.354-.354c-.195-.195-.195-.512 0-.707l5.47-5.469c.39-.391 1.024-.391 1.414 0l5.47 5.469c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronUpIcon.displayName = 'ChevronUpIcon'
