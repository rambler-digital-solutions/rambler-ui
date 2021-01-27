import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PlayIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15M0 0v15m13.272-7.07l-9.518 5.624c-.333.197-.754-.043-.754-.43V1.876c0-.387.421-.627.754-.43l9.518 5.624c.327.193.327.667 0 .86"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PlayIcon.displayName = 'PlayIcon'
