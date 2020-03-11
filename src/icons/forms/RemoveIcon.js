import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RemoveIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M5.5 1h-4c-.275 0-.5.225-.5.5v.2c0 .275.225.5.5.5h12c.275 0 .5-.225.5-.5v-.2c0-.275-.225-.5-.5-.5h-4V.5C9.5.225 9.275 0 9 0H6c-.275 0-.5.225-.5.5V1zM13 6.314V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.7a.5.5 0 0 1 .5-.5h.2a.5.5 0 0 1 .5.5V13.8h8.6V3.7a.5.5 0 0 1 .5-.5h.2a.5.5 0 0 1 .5.5v2.614z" />
    </SvgIcon>
  )
}

RemoveIcon.displayName = 'RemoveIcon'
