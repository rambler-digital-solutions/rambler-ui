import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EllipsisIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15m-2.5-9c-.828 0-1.5.672-1.5 1.5S11.672 9 12.5 9 14 8.328 14 7.5 13.328 6 12.5 6m-10 0C1.672 6 1 6.672 1 7.5S1.672 9 2.5 9 4 8.328 4 7.5 3.328 6 2.5 6M9 7.5C9 8.328 8.328 9 7.5 9S6 8.328 6 7.5 6.672 6 7.5 6 9 6.672 9 7.5"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-2-10c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2M6 10c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2m4 2c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

EllipsisIcon.displayName = 'EllipsisIcon'
