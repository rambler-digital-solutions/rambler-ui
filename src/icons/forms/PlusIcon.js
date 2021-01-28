import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PlusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M13.5 6.9H8.1V1.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v5.4H1.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h5.4v5.4c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5V8.1h5.4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5M15 0v15M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PlusIcon.displayName = 'PlusIcon'

PlusIcon.alias = ['AddIcon']
