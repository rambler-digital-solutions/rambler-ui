import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function AttentionIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M.77 14h13.459c.571 0 .933-.612.657-1.112L8.156.69C7.871.173 7.128.173 6.843.69L.113 12.888C-.162 13.388.199 14 .77 14zm12.697-1.2H1.532L7.5 1.984 13.467 12.8zM0 15V0v15zm7.7-5.2h-.4c-.277 0-.5.224-.5.5v.4c0 .276.223.5.5.5h.4c.276 0 .5-.224.5-.5v-.4c0-.276-.224-.5-.5-.5zM7.35 9h.3c.276 0 .5-.224.5-.5v-3c0-.276-.224-.5-.5-.5h-.3c-.277 0-.5.224-.5.5v3c0 .276.223.5.5.5zM15 15V0v15z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

AttentionIcon.displayName = 'AttentionIcon'
