import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FontMinusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm6.611 9.2L5.5 6 4.389 9.2h2.222zm2.72 3.8H8.47c-.205 0-.388-.124-.465-.314L7.251 10.8H3.749l-.754 1.886c-.077.19-.26.314-.465.314h-.861c-.354 0-.595-.357-.464-.686l3.2-8c.076-.19.26-.314.464-.314h1.262c.204 0 .388.124.464.314l3.2 8c.131.329-.11.686-.464.686zM13.5 8.8h-3c-.276 0-.5-.224-.5-.5v-.6c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v.6c0 .276-.224.5-.5.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FontMinusIcon.displayName = 'FontMinusIcon'
