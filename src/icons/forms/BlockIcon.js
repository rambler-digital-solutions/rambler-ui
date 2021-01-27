import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function BlockIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0m15 0v15m-3.045-3.045C10.765 13.145 9.183 13.8 7.5 13.8c-1.481 0-2.883-.509-4.01-1.442l8.868-8.867c2.043 2.473 1.91 6.151-.403 8.464m-8.91-8.91C4.235 1.855 5.817 1.2 7.5 1.2c1.481 0 2.883.509 4.01 1.442l-8.868 8.867C.599 9.036.732 5.358 3.045 3.045m9.758-.848C11.339.732 9.419 0 7.5 0S3.661.732 2.197 2.197c-2.929 2.929-2.929 7.677 0 10.606C3.661 14.268 5.581 15 7.5 15s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.677 0-10.606"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

BlockIcon.displayName = 'BlockIcon'
