import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LoadIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0m15 0v15M12.5 5c-.828 0-1.5.671-1.5 1.5S11.672 8 12.5 8 14 7.329 14 6.5 13.328 5 12.5 5m-10 2C1.672 7 1 7.671 1 8.5S1.672 10 2.5 10 4 9.329 4 8.5 3.328 7 2.5 7m6.5.5C9 8.329 8.328 9 7.5 9S6 8.329 6 7.5 6.672 6 7.5 6 9 6.671 9 7.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LoadIcon.displayName = 'LoadIcon'
