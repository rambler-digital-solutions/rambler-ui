import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MinusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M13.5 6.9h-12c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5M15 0v15M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

MinusIcon.displayName = 'MinusIcon'
