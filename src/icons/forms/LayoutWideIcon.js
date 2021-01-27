import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LayoutWideIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM2.5 9.9c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10zm0-3c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10zM2 4.4v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10c-.276 0-.5.224-.5.5zM1 1c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H1zm.2 11.8h12.6V2.2H1.2v10.6z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LayoutWideIcon.displayName = 'LayoutWideIcon'
