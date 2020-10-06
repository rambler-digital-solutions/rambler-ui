import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FacebookIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M20,0V20M0,20V0M19,9.5A9,9,0,1,0,8.59,18.39V12.1H6.31V9.5H8.59v-2A3.18,3.18,0,0,1,12,4a14.32,14.32,0,0,1,2,.17V6.41H12.87a1.29,1.29,0,0,0-1.46,1.4V9.5H13.9l-.4,2.6H11.41v6.29A9,9,0,0,0,19,9.5Z" />
    </SvgIcon>
  )
}

FacebookIcon.displayName = 'FacebookIcon'

FacebookIcon.defaultProps = {
  color: '#4661a3'
}
