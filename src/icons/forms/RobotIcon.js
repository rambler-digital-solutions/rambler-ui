import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RobotIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM9 7c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zM4 7c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm-2.8 6.8h12.6V3.2H1.2v10.6zM15 14c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h1.9V.5c0-.276.224-.5.5-.5h.2c.276 0 .5.224.5.5V2h6.8V.5c0-.276.224-.5.5-.5h.2c.276 0 .5.224.5.5V2H14c.552 0 1 .448 1 1v11zm-4-3.4c0 .276-.224.5-.5.5h-6c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h6c.276 0 .5.224.5.5v.2z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

RobotIcon.displayName = 'RobotIcon'
