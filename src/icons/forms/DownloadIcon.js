import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function DownloadIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M12.5 13.1h-10c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5h10c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5M4.278 6.43L6.9 9.051V1.5c0-.276.224-.5.5-.5h.2c.276 0 .5.224.5.5v7.552l2.622-2.623c.196-.195.512-.195.708.001l.141.141c.195.195.195.511-.001.707l-3.716 3.717c-.196.195-.512.195-.708 0L3.43 7.278c-.196-.196-.196-.512-.001-.707l.141-.14c.196-.197.512-.197.708-.002M0 0v15m15 0V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

DownloadIcon.displayName = 'DownloadIcon'
