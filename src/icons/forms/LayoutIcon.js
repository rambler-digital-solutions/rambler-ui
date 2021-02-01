import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LayoutIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M2.5 3.8c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h10c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-10zM1 1c-.552 0-1 .448-1 1v10c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H1zm.2 10.8h12.6V2.2H1.2v9.6zM15 15V0v15zM0 0v15V0z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm14.5 6.25h-9c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h9c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5zM2 4v12c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1zm1.5 11.5h13v-11h-13v11z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

LayoutIcon.displayName = 'LayoutIcon'
