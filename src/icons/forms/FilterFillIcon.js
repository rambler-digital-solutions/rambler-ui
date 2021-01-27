import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FilterFillIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M3 2c-.552 0-1 .448-1 1v1.586c0 .265.105.519.293.707L6 8v3.247c0 .315.148.611.4.8L8.2 13.4c.33.247.8.012.8-.4V8l3.707-2.707c.188-.188.293-.442.293-.707V3c0-.552-.448-1-1-1H3zm12 13V0v15zM0 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FilterFillIcon.displayName = 'FilterFillIcon'
