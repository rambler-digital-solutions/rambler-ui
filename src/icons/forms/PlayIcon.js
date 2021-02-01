import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PlayIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M15 0v15M0 0v15m13.272-7.07l-9.518 5.624c-.333.197-.754-.043-.754-.43V1.876c0-.387.421-.627.754-.43l9.518 5.624c.327.193.327.667 0 .86"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m17.48-9.132L6.496 17.146c-.666.38-1.496-.101-1.496-.87V3.724c0-.769.83-1.25 1.496-.87L17.48 9.132c.672.384.672 1.352 0 1.736"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PlayIcon.displayName = 'PlayIcon'
