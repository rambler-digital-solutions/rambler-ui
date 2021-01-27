import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LockOpenIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M13 6H4.2V4.5c0-1.82 1.48-3.3 3.3-3.3.865 0 1.645.341 2.232.89.196.183.502.176.692-.014l.139-.139c.201-.201.193-.527-.014-.721C9.748.466 8.683 0 7.5 0 5.015 0 3 2.015 3 4.5V6H2c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h11c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1zM0 15V0v15zM15 0v15V0zM7.65 9h-.3c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5h.3c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5zM2.2 13.8h10.6V7.2H2.2v6.6z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LockOpenIcon.displayName = 'LockOpenIcon'
