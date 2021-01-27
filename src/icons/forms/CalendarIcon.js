import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function CalendarIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 15V0v15zm1.2-1.2h12.6V6H1.2v7.8zm0-11.6h1.7v.3c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5v-.3h6.8v.3c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5v-.3h1.7v2.6H1.2V2.2zM12.1 1V.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5V1H4.1V.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5V1H1c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1h-1.9z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

CalendarIcon.displayName = 'CalendarIcon'
