import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MoveIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15m-6-2.5c0-.828-.672-1.5-1.5-1.5S6 11.672 6 12.5 6.672 14 7.5 14 9 13.328 9 12.5m0-10C9 1.672 8.328 1 7.5 1S6 1.672 6 2.5 6.672 4 7.5 4 9 3.328 9 2.5M7.5 9C6.672 9 6 8.328 6 7.5S6.672 6 7.5 6 9 6.672 9 7.5 8.328 9 7.5 9"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-10-2c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2m0-12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2m-2 4c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

MoveIcon.displayName = 'MoveIcon'
