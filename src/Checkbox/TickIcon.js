/* eslint-disable max-len */
import React from 'react'
import SvgIcon from '../icons/SvgIcon'

export default function TickIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 9 7">
      <path
        d="M12-6H-3h15zM-3 14h15-15zM.146 2.854a.5.5 0 0 0 0 .707l2.647 2.646a.999.999 0 0 0 1.414 0l4.647-4.646a.5.5 0 0 0 0-.707L8.146.146a.5.5 0 0 0-.707 0L3.5 4.086l-1.939-1.94a.5.5 0 0 0-.707 0l-.708.708z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

TickIcon.displayName = 'TickIcon'
