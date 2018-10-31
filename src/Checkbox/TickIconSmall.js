/* eslint-disable max-len */
import React from 'react'
import SvgIcon from '../icons/SvgIcon'

export default function TickIconSmall(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 13 13">
      <path
        d="M13 0v13M0 0v13m5.146-3.439l-2.249-2.25a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L5.5 7.086l3.439-3.439a.5.5 0 0 1 .708 0l.706.706a.5.5 0 0 1 0 .708l-4.499 4.5a.502.502 0 0 1-.708 0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

TickIconSmall.displayName = 'TickIconSmall'
