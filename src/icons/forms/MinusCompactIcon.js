import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MinusCompactIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15m-4-7.8v.6c0 .276-.224.5-.5.5h-6c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h6c.276 0 .5.224.5.5"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm6.5 11c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5h-7z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

MinusCompactIcon.displayName = 'MinusCompactIcon'
