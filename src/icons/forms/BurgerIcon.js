import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function BurgerIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15M0 0v15m1-3.6v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5m0-4v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5m0-4v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

BurgerIcon.displayName = 'BurgerIcon'
