import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronRightIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M11.712 6.864L6.277 1.43c-.195-.196-.512-.195-.707 0l-.141.141c-.195.195-.195.512 0 .707L10.651 7.5l-5.222 5.223c-.195.195-.195.511 0 .707l.141.141c.195.195.512.195.707 0l5.435-5.434c.352-.352.352-.922 0-1.273M0 15V0m15 0v15"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20M7.177 16.177l-.354-.354c-.195-.195-.195-.512 0-.707L11.939 10 6.823 4.884c-.195-.195-.195-.512 0-.707l.354-.354c.195-.195.512-.195.707 0l5.469 5.47c.391.39.391 1.024 0 1.414l-5.469 5.47c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChevronRightIcon.displayName = 'ChevronRightIcon'
