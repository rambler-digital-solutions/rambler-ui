import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LikeIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        d="M15 0v15V0zM0 0v15V0zm12.8 11.637L11.357 13.8H5V7.14l3.063-3.535.696-2.087 1.041.347v1.852L8.059 7.2H12.8v4.437zM2.2 13.8h1.6V7.2H2.2v6.6zM10 6l.895-1.789c.069-.139.105-.292.105-.447V1.721c0-.431-.275-.813-.684-.949L8.948.316c-.523-.174-1.09.109-1.264.632L7 3 4.4 6H2c-.553 0-1 .447-1 1v7c0 .553.447 1 1 1h9.465c.334 0 .646-.167.832-.445l1.535-2.303c.109-.164.168-.357.168-.555V7c0-.553-.447-1-1-1h-3z"
      />
    </SvgIcon>
  )
}

LikeIcon.displayName = 'LikeIcon'
