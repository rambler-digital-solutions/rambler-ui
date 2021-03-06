import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PhotoCameraIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M7.5 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 1.2c.992 0 1.8.807 1.8 1.8s-.808 1.8-1.8 1.8S5.7 8.993 5.7 8s.808-1.8 1.8-1.8zM5.414 1c-.265 0-.519.105-.707.293L3 3H1c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1h-2l-1.707-1.707C10.105 1.105 9.851 1 9.586 1H5.414zm4.089 1.2l1.707 1.707c.188.188.442.293.707.293H13.8v8.6H1.2V4.2h1.883c.265 0 .519-.105.707-.293L5.497 2.2h4.006zM0 15V0v15zM15 0v15V0z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20M10 7c-1.93 0-3.5 1.57-3.5 3.5S8.07 14 10 14s3.5-1.57 3.5-3.5S11.93 7 10 7m0 1.5c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2M6.707 3.293L5 5H3c-.552 0-1 .448-1 1v10c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V6c0-.552-.448-1-1-1h-2l-1.707-1.707c-.188-.188-.442-.293-.707-.293H7.414c-.265 0-.519.105-.707.293M12.379 4.5l1.707 1.707c.187.188.442.293.707.293H16.5v9h-13v-9h1.707c.265 0 .52-.105.707-.293L7.621 4.5h4.758"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

PhotoCameraIcon.displayName = 'PhotoCameraIcon'
