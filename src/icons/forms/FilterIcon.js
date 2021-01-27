import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FilterIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M12.8 3.503L8.093 8.21c-.188.188-.293.442-.293.707V12.6l-1.6-1.2V8.917c0-.265-.105-.519-.293-.707L1.2 3.503V2.2h11.6v1.303zM13 1H1c-.552 0-1 .448-1 1v1.586c0 .265.105.519.293.707L5 9v2.5c0 .315.148.611.4.8l2.8 2.1c.33.247.8.012.8-.4V9l4.707-4.707c.188-.188.293-.442.293-.707V2c0-.552-.448-1-1-1zm2 14V0v15zM0 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FilterIcon.displayName = 'FilterIcon'
