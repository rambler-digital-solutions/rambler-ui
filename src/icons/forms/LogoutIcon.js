import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LogoutIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M14 15H4c-.552 0-1-.448-1-1v-.302l1.2-1.201V13.8h9.6V1.2H4.2v1.303L3 1.303V1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1m-3-7.6v.2c0 .276-.224.5-.5.5H2.948l1.623 1.622c.195.196.195.512-.001.708l-.141.141c-.195.195-.511.195-.707 0L1.005 7.854c-.195-.196-.195-.512 0-.708l2.717-2.717c.196-.195.512-.195.707 0l.141.141c.196.196.196.512.001.708L2.948 6.9H10.5c.276 0 .5.224.5.5M0 0v15m15 0V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LogoutIcon.displayName = 'LogoutIcon'
