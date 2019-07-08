import React from 'react'
import SvgIcon from '../SvgIcon'

export default function TickIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 15">
      <path
        fillRule="evenodd"
        d="M13.514 3.675l-.142-.142a.5.5 0 0 0-.707 0L6.443 9.756 3.221 6.533a.5.5 0 0 0-.707 0l-.142.142a.5.5 0 0 0 0 .707l3.718 3.717a.499.499 0 0 0 .707 0l6.717-6.717a.5.5 0 0 0 0-.707M15 0v15M0 15V0"
      />
    </SvgIcon>
  )
}

TickIcon.displayName = 'TickIcon'
