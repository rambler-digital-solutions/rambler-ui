import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function DialogIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        d="M0 15V0v15zM15 0v15V0zm-1 0H4c-.552 0-1 .448-1 1v1h1.2v-.8h9.6v6.6H13V9h1c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1zM1 3c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h1v2c0 .412.47.647.8.4L6 12h5c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H1zm9.8 1.2v6.6H5.6l-2.4 1.8v-1.8h-2V4.2h9.6z"
      />
    </SvgIcon>
  )
}

DialogIcon.displayName = 'DialogIcon'
