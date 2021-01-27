import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FontPlusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm12.3 10h-.846l-.254-.635V7.8h-.626l-.639-1.6H11.2V4.5c0-.276.224-.5.5-.5h.6c.276 0 .5.224.5.5v1.7h1.7c.276 0 .5.224.5.5v.6c0 .276-.224.5-.5.5h-1.7v1.7c0 .276-.224.5-.5.5zm-8.163-.9L6 4l1.863 5.1H4.137zm.56-6.786l-4 10c-.132.329.111.686.464.686h1.077c.205 0 .389-.124.465-.314l.714-1.786h5.166l.714 1.786c.076.19.26.314.465.314h1.077c.353 0 .596-.357.464-.686l-4-10C7.227 2.124 7.043 2 6.839 2H5.161c-.204 0-.388.124-.464.314z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FontPlusIcon.displayName = 'FontPlusIcon'
