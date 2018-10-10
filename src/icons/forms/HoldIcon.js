import React from 'react'
import SvgIcon from '../SvgIcon'

export default function HoldIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 11 6">
      <path
        d="M5.825 2C5.415.835 4.305 0 3 0 1.345 0 0 1.345 0 3s1.345 3 3 3a2.995 2.995 0 0 0 2.825-2H8v2h2V4h1V2H5.825zM3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

HoldIcon.displayName = 'HoldIcon'
