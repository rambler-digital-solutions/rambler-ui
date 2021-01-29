import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RecordIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M7.5 1C3.91 1 1 3.91 1 7.5S3.91 14 7.5 14 14 11.09 14 7.5 11.09 1 7.5 1m0 3C9.43 4 11 5.57 11 7.5S9.43 11 7.5 11 4 9.43 4 7.5 5.57 4 7.5 4M15 0v15M0 0v15"
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

RecordIcon.displayName = 'RecordIcon'
