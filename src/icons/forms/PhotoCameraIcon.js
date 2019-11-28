import React from 'react'
import SvgIcon from '../SvgIcon'

export default function PhotoCameraIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M13.993 3c.556 0 1.007.445 1.007.996v9.008a1 1 0 0 1-1.007.996H1.007A1.001 1.001 0 0 1 0 13.004V3.996A1 1 0 0 1 1.007 3h12.986zM10 8.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM4 2c0-.552.438-1 1.003-1h4.994A.999.999 0 0 1 11 2v1H4V2z" />
    </SvgIcon>
  )
}

PhotoCameraIcon.displayName = 'PhotoCameraIcon'
