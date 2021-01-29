import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RemoveIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 0v15V0zm15 15V0v15zM9.5 1V.5C9.5.224 9.276 0 9 0H6c-.276 0-.5.224-.5.5V1h-4c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-4zm2.3 2.9v9.9H3.2V3.9c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5V14c0 .552.448 1 1 1h9c.552 0 1-.448 1-1V3.9c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zM20 0v20V0zm-7 3v-.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5V3H3.5c-.276 0-.5.224-.5.5v1h14v-1c0-.276-.224-.5-.5-.5H13zm1.5 3v9.5h-9V6H4v10c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V6h-1.5z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

RemoveIcon.displayName = 'RemoveIcon'
