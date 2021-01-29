import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MinusIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M13.5 6.9h-12c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5M15 0v15M0 15V0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm3.5 10.8c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.6c0 .276-.224.5-.5.5h-13z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

MinusIcon.displayName = 'MinusIcon'
