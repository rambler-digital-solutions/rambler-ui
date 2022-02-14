import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function VkontakteIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M20,0v20 M0,20V0 M17.7,2.3C16.5,1,14.4,1,10.4,1H9.6C5.6,1,3.5,1,2.3,2.3S1,5.6,1,9.6v0.7
        c0,4.1,0,6.1,1.3,7.4S5.6,19,9.6,19h0.7c4.1,0,6.1,0,7.4-1.3s1.3-3.3,1.3-7.4V9.6C19,5.6,19,3.5,17.7,2.3z M13.9,14
        c-0.5-1.4-1.6-2.5-3.1-2.7V14h-0.2C6.5,14,4.1,11.2,4,6.5h2.1c0.1,3.4,1.6,4.9,2.8,5.2V6.5h1.9v3c1.2-0.1,2.4-1.5,2.8-3h1.9
        c-0.3,1.8-1.7,3.2-2.6,3.7c1,0.5,2.5,1.6,3.1,3.8H13.9z"
      />
    </SvgIcon>
  )
}

VkontakteIcon.displayName = 'VkontakteIcon'

VkontakteIcon.defaultProps = {
  color: '#0077ff'
}
