import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PhotoCameraIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M7.5 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 1.2c.992 0 1.8.807 1.8 1.8s-.808 1.8-1.8 1.8S5.7 8.993 5.7 8s.808-1.8 1.8-1.8zM5.414 1c-.265 0-.519.105-.707.293L3 3H1c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1h-2l-1.707-1.707C10.105 1.105 9.851 1 9.586 1H5.414zm4.089 1.2l1.707 1.707c.188.188.442.293.707.293H13.8v8.6H1.2V4.2h1.883c.265 0 .519-.105.707-.293L5.497 2.2h4.006zM0 15V0v15zM15 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PhotoCameraIcon.displayName = 'PhotoCameraIcon'
