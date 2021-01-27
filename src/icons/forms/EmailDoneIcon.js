import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EmailDoneIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm14.565 3.575l-.13-.151c-.18-.209-.495-.234-.705-.054L7.5 8.71 4.77 6.37c-.21-.18-.525-.155-.705.054l-.13.151c-.18.21-.156.526.054.706l2.86 2.451c.375.321.927.321 1.302 0l6.36-5.451c.21-.18.234-.496.054-.706zM15 5.179V13c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V4.6c0-.369.204-.709.529-.882l6.5-3.467c.295-.157.647-.157.942 0l4.846 2.585-.978.838L7.5 1.36 1.2 4.72v8.08h12.6V6.207L15 5.179z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

EmailDoneIcon.displayName = 'EmailDoneIcon'
