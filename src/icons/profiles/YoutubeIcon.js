import React from 'react'
import SvgIcon from '../SvgIcon'

export default function YoutubeIcon(props) {
  return (
    <SvgIcon viewBox="0 0 16 12" {...props}>
      <path
        d="M-2-4h20M-2 16h20-20zM15.6 1.741c.332 1.243.332 3.835.332 3.835s0 2.593-.333 3.835a1.995 1.995 0 0 1-1.408 1.409c-1.243.333-6.225.333-6.225.333s-4.982 0-6.224-.333A1.995 1.995 0 0 1 .333 9.41C0 8.17 0 5.576 0 5.576s0-2.592.333-3.835A1.995 1.995 0 0 1 1.742.333C2.984 0 7.966 0 7.966 0s4.982 0 6.225.333a1.995 1.995 0 0 1 1.408 1.408zM6.294 8.058l4.14-2.39-4.14-2.39v4.78z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

YoutubeIcon.displayName = 'YoutubeIcon'

YoutubeIcon.defaultProps = {
  color: '#ff0000'
}
