import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function TwitterIcon(props) {
  return (
    <SvgIcon viewBox="0 0 16 13" {...props}>
      <path
        d="M14.115 2.056A3.292 3.292 0 0 0 15.558.24a6.574 6.574 0 0 1-2.085.797A3.283 3.283 0 0 0 7.88 4.03 9.32 9.32 0 0 1 1.115.6 3.281 3.281 0 0 0 2.13 4.983a3.27 3.27 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.219 3.287 3.287 0 0 1-1.483.056 3.286 3.286 0 0 0 3.067 2.28A6.586 6.586 0 0 1 0 11.529a9.291 9.291 0 0 0 5.032 1.474c6.038 0 9.34-5.002 9.34-9.34 0-.142-.004-.284-.01-.424A6.672 6.672 0 0 0 16 1.539a6.563 6.563 0 0 1-1.885.517z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

TwitterIcon.displayName = 'TwitterIcon'

TwitterIcon.defaultProps = {
  color: '#1DA1F2'
}
