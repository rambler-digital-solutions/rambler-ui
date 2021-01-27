import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MinusCompactIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0m15 0v15m-4-7.8v.6c0 .276-.224.5-.5.5h-6c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h6c.276 0 .5.224.5.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

MinusCompactIcon.displayName = 'MinusCompactIcon'
