import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function SaveIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-2.2 12.8h-.6v-4c0-.552-.448-1-1-1H3.8c-.552 0-1 .448-1 1v4h-.6V2.2h8.303L12.8 4.497V12.8zm-8.8 0h7V9H4v3.8zM10.586 1H2c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h11c.552 0 1-.448 1-1V4.414c0-.265-.105-.519-.293-.707l-2.414-2.414c-.188-.188-.442-.293-.707-.293z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20V0zM0 0v20V0zm15.5 15.5h-1v-4c0-.552-.448-1-1-1h-7c-.552 0-1 .448-1 1v4h-1v-11h7.879L15.5 7.621V15.5zm-8.5 0h6V12H7v3.5zM12.586 3H4c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h12c.552 0 1-.448 1-1V7.414c0-.265-.105-.519-.293-.707l-3.414-3.414c-.188-.188-.442-.293-.707-.293z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

SaveIcon.displayName = 'SaveIcon'
