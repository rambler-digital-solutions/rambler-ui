import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function SortIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M13.5 5.1h-12c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h12c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5m-3 3h-9c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h9c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5m-3 3h-6c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h6c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5M0 0v15m15 0V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

SortIcon.displayName = 'SortIcon'
