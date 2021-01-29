import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function SendIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0v15zM15 0v15V0zM3 7.5L.854 13.58c-.303.86.607 1.644 1.412 1.216l12.072-6.413c.707-.376.707-1.39 0-1.766L2.266.204C1.461-.224.551.56.854 1.42L3 7.5zm-.844-5.996L13.442 7.5 2.156 13.496l1.999-5.663c.076-.216.076-.45 0-.666L2.156 1.504z"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0v20zM20 0v20V0zM6 10l-3.823 6.881c-.358.644.332 1.365.991 1.035l14.49-7.245c.553-.277.553-1.065 0-1.342L3.168 2.084c-.659-.33-1.349.391-.991 1.035L6 10zM4.666 4.51L15.646 10l-10.98 5.49 2.78-5.004c.168-.302.168-.67 0-.972L4.666 4.51z"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

SendIcon.displayName = 'SendIcon'
