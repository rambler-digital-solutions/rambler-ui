import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LoadIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15M12.5 5c-.828 0-1.5.671-1.5 1.5S11.672 8 12.5 8 14 7.329 14 6.5 13.328 5 12.5 5m-10 2C1.672 7 1 7.671 1 8.5S1.672 10 2.5 10 4 9.329 4 8.5 3.328 7 2.5 7m6.5.5C9 8.329 8.328 9 7.5 9S6 8.329 6 7.5 6.672 6 7.5 6 9 6.671 9 7.5"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20M18 9c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2M6 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2m4 1c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

LoadIcon.displayName = 'LoadIcon'
