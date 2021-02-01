import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MonologIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zm15 0V0v15zM2 3c-.552 0-1 .447-1 1v7c0 .553.448 1 1 1h5l3.2 2.4c.33.247.8.012.8-.4v-2h1c.552 0 1-.447 1-1V4c0-.553-.448-1-1-1H2zm.2 1.2h9.6v6.6h-2v1.8l-2.4-1.8H2.2V4.2z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zm20 0V0v20zM4 5c-.553 0-1 .447-1 1v8c0 .553.447 1 1 1h6l3.2 2.4c.329.247.8.012.8-.4v-2h1c.553 0 1-.447 1-1V6c0-.553-.447-1-1-1H4zm.5 1.5h10v7h-2V15l-2-1.5h-6v-7z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

MonologIcon.displayName = 'MonologIcon'
