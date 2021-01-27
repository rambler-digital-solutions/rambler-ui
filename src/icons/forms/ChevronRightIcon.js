import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChevronRightIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M11.712 6.864L6.277 1.43c-.195-.196-.512-.195-.707 0l-.141.141c-.195.195-.195.512 0 .707L10.651 7.5l-5.222 5.223c-.195.195-.195.511 0 .707l.141.141c.195.195.512.195.707 0l5.435-5.434c.352-.352.352-.922 0-1.273M0 15V0m15 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChevronRightIcon.displayName = 'ChevronRightIcon'
