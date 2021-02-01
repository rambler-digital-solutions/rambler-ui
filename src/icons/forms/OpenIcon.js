import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function OpenIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M10.8 11.8H3.2V4.2h3.1c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5H3c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V8.7c0-.276-.223-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v3.1zM12.5 2h-4c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h2.45L5.93 8.222c-.195.196-.195.512 0 .707l.142.142c.195.195.512.195.707 0L11.8 4.049v2.45c0 .278.224.5.5.5h.2c.277 0 .5-.222.5-.5v-4c0-.275-.223-.5-.5-.5zM15 0v15V0zM0 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

OpenIcon.displayName = 'OpenIcon'
