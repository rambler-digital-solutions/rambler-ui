import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GlobalSourceIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="nonzero"
        d="M13.87 13.91A1.47 1.47 0 0 0 12.5 13H12v-2c0-.55-.45-1-1-1H7V8h1.3c.39 0 .7-.31.7-.7V6h1.5c.71 0 1.3-.48 1.45-1.14 2.08.78 3.55 2.79 3.55 5.14 0 1.53-.62 2.91-1.63 3.91M10 15.5c-3.04 0-5.5-2.46-5.5-5.5 0-.46.06-.9.17-1.33L6 10l2 2v.5c0 .83.67 1.5 1.5 1.5H11v1.41c-.32.06-.66.09-1 .09M10 3c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7"
      />
    </SvgIcon>
  )
}

GlobalSourceIcon.displayName = 'GlobalSourceIcon'
