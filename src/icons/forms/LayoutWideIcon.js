import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LayoutWideIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zM2.5 9.9c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10zm0-3c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10zM2 4.4v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10c-.276 0-.5.224-.5.5zM1 1c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H1zm.2 11.8h12.6V2.2H1.2v10.6z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm14.5 12.25h-9c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h9c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5zm0-3h-9c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h9c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5zm0-3h-9c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h9c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5zM2 4v12c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1zm1.5 11.5h13v-11h-13v11z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

LayoutWideIcon.displayName = 'LayoutWideIcon'
