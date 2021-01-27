import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RemoveIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 0v15V0zm15 15V0v15zM9.5 1V.5C9.5.224 9.276 0 9 0H6c-.276 0-.5.224-.5.5V1h-4c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-4zm2.3 2.9v9.9H3.2V3.9c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5V14c0 .552.448 1 1 1h9c.552 0 1-.448 1-1V3.9c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

RemoveIcon.displayName = 'RemoveIcon'
