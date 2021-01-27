import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ForwardIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M8.57 1.43l-.14.14c-.196.196-.196.513 0 .708L13.05 6.9H.501c-.277 0-.5.224-.5.5v.2c0 .277.223.5.5.5h12.55L8.43 12.723c-.195.195-.195.51 0 .707l.141.14c.195.196.512.196.707 0l5.435-5.433c.351-.352.351-.922 0-1.273L9.277 1.43c-.195-.196-.512-.195-.707 0M0 15V0m15 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ForwardIcon.displayName = 'ForwardIcon'
