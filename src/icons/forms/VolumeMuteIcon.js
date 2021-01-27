import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function VolumeMuteIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm7.168 13.261c.322.286.832.057.832-.374V2.113c0-.431-.51-.66-.832-.374L3.5 5h-2c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h2l3.668 3.261zm5.18-5.761l1.223 1.223c.195.195.195.511-.001.707l-.141.14c-.195.196-.512.196-.707 0L11.5 8.348 10.278 9.57c-.195.196-.512.196-.707 0l-.141-.14c-.196-.196-.196-.512-.001-.707L10.652 7.5 9.429 6.277c-.195-.195-.195-.511.001-.707l.141-.14c.195-.196.512-.196.707 0L11.5 6.652l1.222-1.222c.195-.196.512-.196.707 0l.141.14c.196.196.196.512.001.707L12.348 7.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

VolumeMuteIcon.displayName = 'VolumeMuteIcon'
