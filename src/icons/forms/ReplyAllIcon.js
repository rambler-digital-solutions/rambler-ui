import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ReplyAllIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M8.9 6.9H5.948l4.622-4.622c.195-.195.195-.512 0-.707l-.14-.141c-.196-.196-.513-.196-.708-.001L4.287 6.864c-.35.35-.35.92 0 1.273l5.435 5.434c.195.195.512.195.707-.001l.141-.141c.195-.195.195-.511 0-.707L5.948 8.1H8.9c2.548 0 4.648 1.954 4.88 4.442.023.259.237.458.497.458h.2c.293 0 .525-.251.5-.542C14.7 9.347 12.08 6.9 8.9 6.9M15 15V0M0 15V0m5.722 13.57L.287 8.138c-.35-.352-.35-.922 0-1.273L5.722 1.43c.195-.196.512-.196.707 0l.141.14c.195.196.195.513 0 .708L1.348 7.5l5.222 5.222c.195.196.195.512 0 .707l-.14.14c-.196.197-.513.197-.708.002"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20M12 9.25H7.811l4.366-4.366c.195-.195.195-.512 0-.707l-.354-.354c-.195-.195-.512-.195-.707 0l-5.469 5.47c-.391.39-.391 1.024 0 1.414l5.469 5.47c.195.195.512.195.707 0l.354-.354c.195-.195.195-.512 0-.707L7.811 10.75H12c3.286 0 5.988 2.549 6.232 5.774.02.265.227.476.493.476h.502c.285 0 .525-.24.505-.524-.27-4.03-3.635-7.226-7.732-7.226m-5.884 6.927l-5.469-5.47c-.391-.39-.391-1.024 0-1.414l5.469-5.47c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707L2.061 10l5.116 5.116c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ReplyAllIcon.displayName = 'ReplyAllIcon'
