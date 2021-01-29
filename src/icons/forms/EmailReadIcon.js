import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EmailReadIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zm-1.2 12.8H1.2V5.64l5.829 3.109c.295.157.647.157.942 0L13.8 5.64v7.16zm-.412-8.3L7.5 7.64 1.612 4.5 7.5 1.36l5.888 3.14zM7.029.251l-6.5 3.467C.204 3.891 0 4.231 0 4.6V13c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V4.6c0-.369-.204-.709-.529-.882L7.971.251c-.295-.157-.647-.157-.942 0z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zM20 0v20V0zm-3.5 15.5h-13V8.125l5.9 4.425c.356.267.844.267 1.2 0l5.9-4.425V15.5zm-1-8.5L10 11.125 4.5 7 10 2.875 15.5 7zM9.4 1.45l-7 5.25c-.252.189-.4.485-.4.8V16c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V7.5c0-.315-.148-.611-.4-.8l-7-5.25c-.356-.267-.844-.267-1.2 0z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

EmailReadIcon.displayName = 'EmailReadIcon'
