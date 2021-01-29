import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PlusIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M13.5 6.9H8.1V1.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v5.4H1.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h5.4v5.4c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5V8.1h5.4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5M15 0v15M0 15V0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m16.5-9.2h-5.7v5.7c0 .276-.224.5-.5.5h-.6c-.276 0-.5-.224-.5-.5v-5.7H3.5c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h5.7V3.5c0-.276.224-.5.5-.5h.6c.276 0 .5.224.5.5v5.7h5.7c.276 0 .5.224.5.5v.6c0 .276-.224.5-.5.5"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PlusIcon.displayName = 'PlusIcon'

PlusIcon.alias = ['AddIcon']
