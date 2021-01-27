import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function StartFillIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM5.006 4.253l-4.072.592c-.615.089-.861.845-.416 1.279l2.947 2.872-.696 4.056c-.105.613.538 1.08 1.089.791L7.5 11.928l3.642 1.915c.551.289 1.194-.178 1.089-.791l-.696-4.056 2.947-2.872c.445-.434.199-1.19-.416-1.279l-4.072-.592L8.173.563c-.276-.558-1.07-.558-1.346 0l-1.821 3.69z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

StartFillIcon.displayName = 'StartFillIcon'
