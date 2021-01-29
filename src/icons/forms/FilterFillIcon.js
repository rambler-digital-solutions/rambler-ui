import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FilterFillIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M3 2c-.552 0-1 .448-1 1v1.586c0 .265.105.519.293.707L6 8v3.247c0 .315.148.611.4.8L8.2 13.4c.33.247.8.012.8-.4V8l3.707-2.707c.188-.188.293-.442.293-.707V3c0-.552-.448-1-1-1H3zm12 13V0v15zM0 0v15V0z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m10.18-3.683L8.36 14.8c-.228-.19-.36-.472-.36-.768V10.5L3.375 6.8C3.138 6.61 3 6.323 3 6.019V4.5c0-.276.224-.5.5-.5h12c.276 0 .5.224.5.5v1.519c0 .304-.138.591-.375.781L11 10.5v5.432c0 .424-.494.656-.82.385"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

FilterFillIcon.displayName = 'FilterFillIcon'
