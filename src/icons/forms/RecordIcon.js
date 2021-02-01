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
            d="M20 0v20M0 0v20M10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8m0 4c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

RecordIcon.displayName = 'RecordIcon'
