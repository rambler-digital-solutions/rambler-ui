import React from 'react'
import SvgIcon from '../SvgIcon'

export default function FacebookIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 9 18">
      <path
        d="M5.854 9.428h2.642l.397-3.077h-3.04V4.379c0-.894.24-1.503 1.517-1.503H9V.115C8.718.077 7.75 0 6.625 0c-2.35 0-3.957 1.432-3.957 4.073v2.278H0v3.077h2.668v7.93h3.186v-7.93z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FacebookIcon.displayName = 'FacebookIcon'

FacebookIcon.defaultProps = {
  color: '#4661a3'
}
