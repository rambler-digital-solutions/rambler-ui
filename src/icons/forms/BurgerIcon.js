import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function BurgerIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M15 0v15M0 0v15m1-3.6v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5m0-4v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5m0-4v.2c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-12c-.276 0-.5.224-.5.5"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m18-4.5v-1c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5m0-5v-1c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5M17.5 6h-15c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5h15c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

BurgerIcon.displayName = 'BurgerIcon'
